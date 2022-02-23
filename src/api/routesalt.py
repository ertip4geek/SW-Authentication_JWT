"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from werkzeug.security import generate_password_hash, check_password_hash
import flask_praetorian

api = Blueprint('api', __name__)
guard = flask_praetorian.Praetorian()


# Set up some routes for the example
@api.route('/')
def home():
    return {"Hello": "World"}, 200


@api.route('/login', methods=['POST'])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    ret = {'access_token': guard.encode_jwt_token(User)}
    return ret, 200


@api.route('/refresh', methods=['POST'])
def refresh():
    # Refreshes an existing JWT by creating a new one that is a copy of the old
    # except that it has a refrehsed access expiration.
    print("refresh request")
    old_token = request.get_data()
    new_token = guard.refresh_jwt_token(old_token)
    # 3. return token
    access_token = create_access_token(identity=email)
    return jsonify(access_token=access_token)

# Protect a route with jwt_required, which will kick out requests
# without a valid JWT present.
@api.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200
