import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routes from "./routes/routes";
import { UserProvider } from "./hooks/UserContext";
import GlobalStyles from "./globalStyles";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <Routes />
    </UserProvider>
    <ToastContainer autoClose={2000} />
    <GlobalStyles />
  </React.StrictMode>
);
