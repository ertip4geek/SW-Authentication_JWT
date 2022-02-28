import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const getUser = (e) => {
  //   setEmail(e.target.value);
  // };
  // const getPassword = (e) => {
  //   setPassword(e.target.value);
  // };
  // const master = () => {
  //   console.log("hola");
  //   console.log(email, password);
  // };
  const master = () => {
    console.log("hola");
    console.log(email, password);
    const click = {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: "test",
      }),
    };
    fetch(
      "https://3001-ertip4geek-swauthenticat-5z0owhl85dg.ws-eu34xl.gitpod.io/api/login",
      click,
      { mode: "no-cors" }
    )
      .then((resp) => {
        if (resp.status === 200) return resp.json();
        else alert("There is an error");
      })
      .then((data) => {
        console.log("from backend", data);
        sessionStorage.setItem("token", data.token);
      })
      .catch((error) => {
        console.error("There is an error!!", error);
      });
  };

  return (
    <>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button onClick={master}>Submit</button>
    </>
  );
};
