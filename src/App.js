import React from 'react';
import Home from './Home.js';
import Product from './Product.js';
import Address from './Address.js';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

function App() {
  return (
  <div>
    <Router>
    <Switch>
    <Route exact path="/">
      <Redirect to="/marketplace" />
        <Home></Home>
      </Route>
  <Route exact path="/product" component={Product}>
      </Route>
      <Route exact path="/address" component={Address}>
      </Route>
      <Route exact path="/marketplace">
        <Home></Home>
      </Route>
    </Switch>
    </Router>
  </div>
  );
}


export default App;
