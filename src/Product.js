import React from 'react'
import Slide from './Slide.js'
import {Link} from 'react-router-dom'
import {
    Collapse,  Navbar,  NavbarToggler,  NavbarBrand,  Nav,  NavItem,  NavLink,  UncontrolledDropdown,  DropdownToggle,  DropdownMenu,
    DropdownItem,
    NavbarText,
    Button
  } from 'reactstrap';
function Product(props){
    const {productID} = props.location.state
    console.log(productID);
  return <div><Slide></Slide><h1>Product {productID}</h1> 
    <Button><Link to="/address">Buy Now</Link></Button>
  </div>;
  }
  export default Product;