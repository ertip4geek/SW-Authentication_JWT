import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Signup = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roles, setUser] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      actions.setToken(localStorage.getItem("token"));
      alert("Usuario creado");
      history.push("/");
    }
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRolesChange = (e) => {
    setUser(e.target.value);
  };

  return (
    <>
      <div>
        <h2>Signup</h2>
        <form action="#">
          <div>
            <input
              type="text"
              placeholder="Email"
              onChange={handleEmailChange}
              value={email}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              onChange={handlePasswordChange}
              value={password}
            />
          </div>
          <div>
            {/* <input
              type="dropdowm"
              placeholder="Roles"
              onChange={handlePasswordChange}
              value={password}
            /> */}
            <div class="input-group mb-3">
              <label class="input-group-text" for="inputGroupSelect01">
                Roles
              </label>
              <select
                class="form-select"
                id="inputGroupSelect01"
                onChange={handleRolesChange}
              >
                <option selected>Choose...</option>
                <option value={roles}>User</option>
              </select>
            </div>
          </div>
          <button
            onClick={() => actions.signup(email, password, roles)}
            className="btn sub btn-block"
          >
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
};
