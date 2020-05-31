import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import Navigation from './Navigation.js';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';

function Collection(props){
    const {collectionID} = props.location.state
    return(
        <div>
        <Navigation></Navigation>
      <Jumbotron fluid>
      <Container fluid>
    <h1 className="display-3">Store {collectionID}</h1>
        <p className="lead">This is a store description.</p>
      </Container>
    </Jumbotron>
    <Row>
      <Col>
      <Card body>
        <CardImg top width="100%" src={logo} alt="Card image cap" />
        <CardBody>
          <CardTitle><h1>Product 1</h1></CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>
          <Link to={{pathname: '/product', state: { productID: 1}}}>Buy</Link>

            </Button>
        </CardBody>
      </Card>
      </Col>
      <Col>
      <Card body>
        <CardImg top width="100%" src={logo} alt="Card image cap" />
        <CardBody>
          <CardTitle><h1>Product 2</h1></CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button><Link to={{pathname: '/product', state: { productID: 2}}}>Buy</Link></Button>
        </CardBody>
      </Card>
      </Col>
      <Col>
      <Card body>
        <CardImg top width="100%" src={logo} alt="Card image cap" />
        <CardBody>
          <CardTitle><h1>Product 3</h1></CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button><Link to={{pathname: '/product', state: { productID: 3}}}>Buy</Link></Button>
        </CardBody>
      </Card>
      </Col>
    </Row>
    <p></p>
    <Row>
      <Col>
      <Card body>
        <CardImg top width="100%" src={logo} alt="Card image cap" />
        <CardBody>
          <CardTitle><h1>Product 4</h1></CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button><Link to={{pathname: '/product', state: { productID: 4}}}>Buy</Link></Button>
        </CardBody>
      </Card>
      </Col>
      <Col>
      <Card body>
        <CardImg top width="100%" src={logo} alt="Card image cap" />
        <CardBody>
          <CardTitle><h1>Product 5</h1></CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button><Link to={{pathname: '/product', state: { productID: 5}}}>Buy</Link></Button>
        </CardBody>
      </Card>
      </Col>
      <Col>
      <Card body>
        <CardImg top width="100%" src={logo} alt="Card image cap" />
        <CardBody>
          <CardTitle><h1>Product 6</h1></CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button><Link to={{pathname: '/product', state: { productID: 6}}}>Buy</Link></Button>
        </CardBody>
      </Card>
      </Col>
    </Row>
    
    </div>
    );
}

export default Collection;