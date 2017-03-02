import React from "react";
import ReactDOM from "react-dom";
import "./legacy_v2.css";
import "./my-jstor.css";
import {Provider} from "react-redux";
import OutlineContainer from "./containers/OutlineContainer.jsx";

import store from "./containers/store";
import { fetchListItems } from "./actions/index";

/*if (process.env.NODE_ENV !== 'production') {
    var axe = require('react-axe');
    axe(React, ReactDOM, 1000);
}*/
ReactDOM.render(
  <Provider store={store}>
    <OutlineContainer/>
  </Provider>,
  document.getElementById("outline-react-app")
);

const getListIdFromLocation = () => {
    return window.location.search.split("?listId=").pop() || window.location.pathname.split("/myjstor/outline/").pop().replace("/", "") || 70822;
};

store.dispatch(fetchListItems("70822"));
