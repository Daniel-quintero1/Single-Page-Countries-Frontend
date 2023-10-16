import React from "react";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import store from "./Redux/Store";
import axios from "axios"
// axios.defaults.baseURL = `http://localhost:3001`//esto dice que toda axios al momento de efectuarse tenga por defaults la base url http://localhost:3001 //este es el servidor de nuestro LOCAL
axios.defaults.baseURL = `single-page-countries-backend-production.up.railway.app`

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);