const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      api: "https://3000-ertip4geek-swauthenticat-5z0owhl85dg.ws-eu34xl.gitpod.io",
    },
    actions: {
      login: (email, password) => {
        const store = getStore();
        fetch(`${store.api}/api/login`, {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: password,
          }),
          headers: {
            "Content-type": "application/json",
          },
        })
          .then((resp) => {
            if (resp.ok) {
              return resp.json();
            }
          })
          .then((data) => {
            localStorage.setItem("token", data.token);
            setStore({ isAuthenticate: true });
          })
          .catch((error) => console.error("[ERROR IN LOGIN]", error));
      },
      signup: (email, password, roles) => {
        // const store = getStore();
        fetch(process.env.BACKEND_URL + `/api/signup`, {
          method: "POST",
          body: JSON.stringify({
            email: email,
            password: password,
            roles: roles,
          }),
          headers: {
            "Content-type": "application/json",
          },
        })
          .then((resp) => {
            console.log(resp);
            if (resp.ok) {
              console.log(resp);
              return resp.json();
            }
          })
          .then((data) => {
            console.log(data);
            localStorage.setItem("token", data.token);
            setStore({ isAuthenticate: true });
          })
          .catch((error) => console.error("[ERROR IN LOGIN]", error));
      },
      setToken: (token) => {
        setStore({ token: token });
      },
      syncTokenFromSessionStore: () => {
        const token = localStorage.getItem("token");
        if (token && token != "" && token != undefined)
          setStore({ token: token });
      },
      logout: () => {
        localStorage.removeItem("token");
        console.log("Logout");
        setStore({ token: null });
      },
    },
  };
};
export default getState;
