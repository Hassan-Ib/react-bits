import React from "react";
import ReactDOM from "react-dom";

// import App from "./workOut/app";
import { AppProvider } from "./exes/15-cocktails/setup/context"; //importing context api
import "./exes/15-cocktails/setup/index.css"; // importing the css
import App from "./exes/15-cocktails/setup/App"; // importing the app js

ReactDOM.render(
  <React.StrictMode>
    <AppProvider children={<App />} />
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
