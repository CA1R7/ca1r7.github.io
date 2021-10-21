import React from "react";
import { store } from "./redux";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Initialize } from "./components/app";

import "./styles/main.scss";

ReactDOM.render(
  <Provider store={store}>
    <Initialize />
  </Provider>,
  document.getElementById("app"),
);
