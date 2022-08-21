import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import FirebaseContext from "./context/firebase";
import { firebaseApp } from "./firebase.config";

// console.log("index.js", firebaseApp);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebaseApp }}>
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>
);
