import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routes from "./routes/routes";
import AppProvider from "./hooks";
import GlobalStyles from "./globalStyles";
import "swiper/css/bundle";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <Routes />
    </AppProvider>
    <ToastContainer autoClose={2000} />
    <GlobalStyles />
  </React.StrictMode>
);
