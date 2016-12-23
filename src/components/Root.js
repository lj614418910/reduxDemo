import React from 'react';
import {Provider} from 'react-redux';
import App from './App.js';
import {Router, Route, hashHistory, browserHistory} from 'react-router';

const Root = ({store}) => (
  <Provider store = {store}>
    <Router history={hashHistory}>
      <Route path="/(:filter)" component={App} />
    </Router>
  </Provider>
)


export default Root;
