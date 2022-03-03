import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Signup = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roles, setRoles] = useState("");
  const [user, setUser] = useState("");
  let history = useHistory();

  useEffect(() => {
    if (user) {
      // if (localStorage.getItem("token")) {
      //   actions.setToken(localStorage.getItem("token"));
      alert("Usuario creado");
      history.push("/");
    }
  }, [user]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRolesChange = (e) => {
    setRoles(e.target.value);
  };

  const handleSubmit = (e) => {
    actions.signup(email, password, roles);
    setUser(true);
    console.log(e.target.value);
  };

  return (
    <>
      <div>
        <h2>Signup</h2>
        <form action="#">
          <div className="mb-3">
            <input
              className="form-control"
              type="text"
              placeholder="Email"
              onChange={handleEmailChange}
              value={email}
            />
          </div>
          <div className="mb-3">
            <input
              className="form-control"
              type="password"
              placeholder="Password"
              onChange={handlePasswordChange}
              value={password}
            />
          </div>
          <div>
            <div className="input-group mb-3">
              <label className="input-group-text" htmlFor="inputGroupSelect01">
                Roles
              </label>
              <select
                className="form-select"
                id="inputGroupSelect01"
                onChange={handleRolesChange}
              >
                <option selected>Choose...</option>
                <option value={roles}>User</option>
                <option value={roles}>Seller</option>
              </select>
            </div>
          </div>
          <button
            // onClick={() => actions.signup(email, password, roles)}
            onClick={handleSubmit}
            className="btn sub btn-block"
          >
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};
