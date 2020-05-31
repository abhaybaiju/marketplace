import React from 'react'
import Slide from './Slide.js'
import {Link} from 'react-router-dom'
import Navigation from './Navigation.js'
import {Button} from 'reactstrap'
function Product(props){
    const {productID} = props.location.state
  return <div><Navigation></Navigation><Slide></Slide><h1>Product {productID}</h1> 
    <Button><Link to="/address">Buy Now</Link></Button>
  </div>;
  }
  export default Product;