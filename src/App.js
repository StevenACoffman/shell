import React, { Component } from 'react';
import { Provider } from 'react-redux'
import store from './containers/store'
import OutlineComponent from './containers/outline_component.jsx'

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <OutlineComponent/>
      </Provider>
    );
  }
}

export default App;
