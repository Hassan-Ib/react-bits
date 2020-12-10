import React from "react";
import ReactDOM from "react-dom";

// import App from "./workOut/app";
import "./exes/9-color-generator/setup/index.css"; // importing the css
import App from "./exes/9-color-generator/setup/App"; // importing the app js

// import "./exes/7-slider/setup/index.css"; // importing the css
// import App from "./exes/7-slider/setup/App"; // importing the app js

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
