import React from 'react'
import Slide from './Slide.js'
import {Link} from 'react-router-dom'
import Navigation from './Navigation.js'
import {Button} from 'reactstrap'
function Product(props){
    const {productID} = props.location.state
  return <div><Navigation></Navigation><Slide></Slide>
    <h1 className="display-3" style={{ justifyContent: "center", display: "flex", alignItems: "center", verticalAlign:"center"}}
    >Product {productID} </h1> 
    <Link to="/address">
    <Button style={{ margin: "2vh", marginLeft: "39vw", justifyContent: "center", alignItems:"center", display:"flex", width:"20%", backgroundColor:"lightgray",color:"#212529"}}
    >Buy Now</Button></Link>
  </div>
  }
  export default Product;