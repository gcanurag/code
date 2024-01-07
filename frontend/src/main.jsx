import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./lib/authStore/store.js";
import { UserContextProvider } from "./contexts/userContexts/UserContext.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <UserContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserContextProvider>
  </Provider>
);
