const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      // // Use getActions to call a function within a fuction
      // exampleFunction: () => {
      // 	getActions().changeColor(0, "green");
      // },
      syncTokenFromSessionStore: () => {
        const token = sessionStorage.getItem("token");
        console.log("Application just loaded, syncro local storage");
        if (token && token != "" && token != undefined)
          setStore({ token: token });
      },
      logout: () => {
        sessionStorage.removeItem("token");
        console.log("Logout");
        setStore({ token: null });
      },
      //   getMyTasks = await (username, password) => {
      //  // retrieve token form localStorage
      //  const token = localStorage.getItem('jwt-token');

      //  const resp = await fetch(`https://your_api.com/protected`, {
      //     method: 'GET',
      //     headers: {
      //       "Content-Type": "application/json"
      //       'Authorization': 'Bearer '+token // ⬅⬅⬅ authorization token
      //     }
      //  })
      //  if(!resp.ok) throw Error("There was a problem in the login request")

      //  else if(resp.status === 403){
      //      throw Error("Missing or invalid token");
      //  }
      //  else{
      //      throw Error('Uknon error');
      //  }

      //  const data = await resp.json();
      //  console.log("This is the data you requested", data);
      //  return data
    },
    changeColor: (index, color) => {
      //get the store
      const store = getStore();

      //we have to loop the entire demo array to look for the respective index
      //and change its color
      const demo = store.demo.map((elm, i) => {
        if (i === index) elm.background = color;
        return elm;
      });

      //reset the global store
      setStore({ demo: demo });
    },
  };
};
export default getState;
