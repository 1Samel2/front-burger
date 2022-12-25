import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./page/Login";
import GlobalStyles from "./globalStyles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Login />
    <GlobalStyles />
  </React.StrictMode>
);
