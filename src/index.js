// @flow
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import store from "./containers/store";
import { fetchListItems } from "./actions/index";

/*if (process.env.NODE_ENV !== 'production') {
    var axe = require('react-axe');
    axe(React, ReactDOM, 1000);
}*/
ReactDOM.render(
    <App />,
  document.getElementById("root")
);

store.dispatch(fetchListItems("70822"));
