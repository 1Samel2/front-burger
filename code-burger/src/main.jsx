import React from "react";
import ReactDOM from "react-dom/client";
/* import Login from "./page/Login"; */
import Register from './page/Register'
import GlobalStyles from "./globalStyles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Login /> */}
    <Register/>
    <GlobalStyles />
  </React.StrictMode>
);
