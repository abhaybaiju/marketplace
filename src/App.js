import React from 'react';
import Home from './Home.js';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
  <div>
    <Router>
    <Switch>
  <Route exact path="/product" component={Product}>
      </Route>
      <Route exact path="/">
        <Home></Home>
      </Route>
    </Switch>
    </Router>
  </div>
  );
}
function Product(props){
  const {productID} = props.location.state
  console.log(productID);
return <h1>Product {productID}</h1>
}

export default App;
