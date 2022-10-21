import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { AppEntry } from "./main/Entry";
import { StateInterface, store } from "./redux";
import { Toaster } from "react-hot-toast";
import { HashRouter } from "react-router-dom";

import "./assets/styles/main.scss";

export const USER_ID = "477786704158392321";

declare global {
  interface Window {
    state: StateInterface;
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Toaster />
    <HashRouter>
      <AppEntry />
    </HashRouter>
  </Provider>,
  document.getElementById("app"),
);
