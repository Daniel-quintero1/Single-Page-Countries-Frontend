import React from "react";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import store from "./Redux/Store";

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
