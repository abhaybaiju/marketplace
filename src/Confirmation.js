import React from 'react'
import { InputGroup, InputGroupAddon, InputGroupText, Input, Form, FormGroup, Label, Row, Col, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import Navigation from './Navigation.js';

function Confirmation(){
    return(
        <div>
            <Navigation></Navigation>
                <h1 className="display-3" style={{ paddingTop: "10vh", marginBottom: "-30vh", justifyContent: "center", display: "flex", alignItems: "center", verticalAlign:"center"}}>
                    Order is Confirmed</h1>
        <br></br>
                    <Link to='/marketplace'  style={{ paddingTop: "30vh", marginBottom: "-30vh", justifyContent: "center", display: "flex", alignItems: "center", verticalAlign:"center"}}><Button >
                         Home</Button></Link>
        
    </div>
    );
}
export default Confirmation;