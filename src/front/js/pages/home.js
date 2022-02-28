import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useHistory } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);
  let history = useHistory();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      actions.setToken(localStorage.getItem("token"));
      history.push("/login");
    }
  }, []);
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      actions.setToken(localStorage.getItem("token"));
      history.push("/login");
    }
  }, [store.token]);
  return (
    <div className="text-center mt-5">
      <h1>Hello Rigo!!</h1>
      <p>
        <img src={rigoImageUrl} />
      </p>
      <div className="alert alert-info">
        {store.message ||
          "Loading message from the backend (make sure your python backend is running)..."}
      </div>
      <p>
        This boilerplate comes with lots of documentation:{" "}
        <a href="https://github.com/4GeeksAcademy/react-flask-hello/tree/95e0540bd1422249c3004f149825285118594325/docs">
          Read documentation
        </a>
      </p>
    </div>
  );
};
