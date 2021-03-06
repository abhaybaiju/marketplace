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

function Home(){
    return(
        <div>
        <Navigation></Navigation>
      <Jumbotron fluid>
      <Container fluid>
        <h1 className="display-3">Marketplace</h1>
        <p className="lead">This is a site description.</p>
      </Container>
    </Jumbotron>
    <Row>
      <Col>
      <Card body>
        <CardImg top width="100%" src={logo} alt="Card image cap" />
        <CardBody>
          <CardTitle><h1>Store 1</h1></CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>
          <Link to={{pathname: '/collection', state: { collectionID: 1}}}>Buy</Link>

            </Button>
        </CardBody>
      </Card>
      </Col>
      <Col>
      <Card body>
        <CardImg top width="100%" src={logo} alt="Card image cap" />
        <CardBody>
          <CardTitle><h1>Store 2</h1></CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button><Link to={{pathname: '/collection', state: { collectionID: 2}}}>Buy</Link></Button>
        </CardBody>
      </Card>
      </Col>
      <Col>
      <Card body>
        <CardImg top width="100%" src={logo} alt="Card image cap" />
        <CardBody>
          <CardTitle><h1>Store 3</h1></CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button><Link to={{pathname: '/collection', state: { collectionID: 3}}}>Buy</Link></Button>
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
          <CardTitle><h1>Store 4</h1></CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button><Link to={{pathname: '/collection', state: { collectionID: 4}}}>Buy</Link></Button>
        </CardBody>
      </Card>
      </Col>
      <Col>
      <Card body>
        <CardImg top width="100%" src={logo} alt="Card image cap" />
        <CardBody>
          <CardTitle><h1>Store 5</h1></CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button><Link to={{pathname: '/collection', state: { collectionID: 5}}}>Buy</Link></Button>
        </CardBody>
      </Card>
      </Col>
      <Col>
      <Card body>
        <CardImg top width="100%" src={logo} alt="Card image cap" />
        <CardBody>
          <CardTitle><h1>Store 6</h1></CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button><Link to={{pathname: '/collection', state: { collectionID: 6}}}>Buy</Link></Button>
        </CardBody>
      </Card>
      </Col>
    </Row>
    
    </div>
    );
}

export default Home;