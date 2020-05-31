import React from 'react'
import { InputGroup, InputGroupAddon, InputGroupText, Input, Form, FormGroup, Label, Row, Col, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import Navigation from './Navigation.js';
function Address(){
    return(
        <div>
            <Navigation></Navigation>
                <h1 className="display-3" style={{ paddingTop: "10vh", marginBottom: "-30vh", justifyContent: "center", display: "flex", alignItems: "center", verticalAlign:"center"}}>
                    Enter Details</h1>

        <div style={{ justifyContent: "center", display: "flex", alignItems: "center", verticalAlign:"center", height: "100vh"}}>
        <Form style={{ width: "50%", border: "solid", borderColor: "lightgray", padding:"1vh", borderWidth: "0.5px"}}>
            <FormGroup>
       
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Email</InputGroupText>
        </InputGroupAddon>
        <Input type="email" placeholder="Email Id" />
        <InputGroupAddon addonType="append">
          <InputGroupText>@example.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>
            Password
          </InputGroupText>
        </InputGroupAddon>
        <Input type="password" placeholder="Enter Password" />
      </InputGroup>
      <br></br>

      <InputGroup>
      <Link to='./confirmation' style={{ justifyContent: "center", alignItems:"center", display:"flex", width:"100%", backgroundColor:"lightgray",color:"#212529"}}>
        <Button style={{ justifyContent: "center", alignItems:"center", display:"flex", width:"100%", backgroundColor:"lightgray",color:"#212529"}}>
             Place Order</Button></Link>
      </InputGroup>
      
      </FormGroup>
      </Form>
    </div>
    </div>
    );
}
export default Address;