import React from "react";
import ReactDOM from "react-dom";

// import App from "./workOut/app";
import { AppProvider } from "./exes/14-cart/setup/context"; //importing context api
import "./exes/14-cart/setup/index.css"; // importing the css
import App from "./exes/14-cart/setup/App"; // importing the app js

ReactDOM.render(
  <React.StrictMode>
    <AppProvider children={<App />} />
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
