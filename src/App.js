import React, {Component} from "react";
import {Provider} from "react-redux";
import store from "./containers/store";
import OutlineContainer from "./containers/OutlineContainer.jsx";

import "./App.css";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <OutlineContainer/>
            </Provider>
        );
    }
}

export default App;
