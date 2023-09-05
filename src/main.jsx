import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MessageProvider } from "./hooks/MessageContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MessageProvider>
      <BrowserRouter>
        <App />
        <ToastContainer />
      </BrowserRouter>
    </MessageProvider>
  </React.StrictMode>
);
