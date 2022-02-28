import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      actions.setToken(localStorage.getItem("token"));
      history.push("/");
    }
  }, []);

  const onSubmitClick = (e) => {
    e.preventDefault();
    console.log("You pressed login");
    let opts = {
      email: email,
      password: password,
    };
    console.log(opts);
    fetch(
      "https://3001-ertip4geek-swauthenticat-5z0owhl85dg.ws-eu34xl.gitpod.io/api/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(opts),
      }
    )
      .then((r) => r.json())
      .then((token) => {
        if (token.token) {
          localStorage.setItem("token", token.token);
          actions.setToken(token.token);
          history.push("/");
        } else {
          console.log("Please type in correct email/password");
        }
      });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <h2>Login</h2>
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
        <button onClick={onSubmitClick} type="submit">
          Login Now
        </button>
      </form>
    </div>
  );
};
