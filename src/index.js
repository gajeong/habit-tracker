import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import App from './app';
import "@fortawesome/fontawesome-free/js/all.js"; //fontawesome을 플러그인화
import SimpleHabit from "./components/simpleHabit";

ReactDOM.render(
  <React.StrictMode>
    <SimpleHabit />
  </React.StrictMode>,
  document.getElementById("root")
);
