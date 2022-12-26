import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./routes";
import GlobalStyles from "./globalStyles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Routes />
    <GlobalStyles />
  </React.StrictMode>
);
