import React, { useState } from "react";

export const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const getUser = (e) => {
    setUser(e.target.value);
  };
  const getPassword = (e) => {
    setPassword(e.target.value);
  };
  const master = () => {
    console.log("hola");
    console.log(user, password);
  };

  return (
    <>
      <h1>Login</h1>
      <input type="text" placeholder="user" onChange={setUser}></input>
      <input type="text" placeholder="password" onChange={setPassword}></input>
      <button onClick={master}>Submit</button>
    </>
  );
};
