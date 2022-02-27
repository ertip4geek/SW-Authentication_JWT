from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(600), unique=False, nullable=False)
    roles = db.Column(db.Text)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    def set_token(self, token):
        self.token = token
        db.session.add(self)
        db.session.commit()


    @property
    def rolenames(self):
        try:
            return self.roles.split(',')
        except Exception:
            return []

    @classmethod
    def lookup(cls, email):
        user = cls.query.filter_by(email=email).one_or_none()
        return user

    @classmethod
    def identify(cls, id):
        return cls.query.get(id)

    @property
    def identity(self):
        return self.id

    def is_valid(self):
        return self.is_active

    def __repr__(self):
        return '<User %r>' % self.email

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            # do not serialize the password, its a security breach
        }

    def create_user(self):
        db.session.add(self)
        db.session.commit()

