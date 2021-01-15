import React from "react";
import ReactDOM from "react-dom";

// import App from "./workOut/app";
import { AppProvider } from "./exes/12-sidebar-modal/setup/context";
import "./exes/12-sidebar-modal/setup/index.css"; // importing the css
import App from "./exes/12-sidebar-modal/setup/App"; // importing the app js

// import "./exes/7-slider/setup/index.css"; // importing the css
// import App from "./exes/7-slider/setup/App"; // importing the app js

ReactDOM.render(
  <React.StrictMode>
    <AppProvider children={<App />} />
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
