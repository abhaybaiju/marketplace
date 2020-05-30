import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Jumbotron, Container } from 'reactstrap';
import {
  Collapse,  Navbar,  NavbarToggler,  NavbarBrand,  Nav,  NavItem,  NavLink,  UncontrolledDropdown,  DropdownToggle,  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';

function App() {
  return (
  <div>
    <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler  />
        <Collapse isOpen={false} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
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
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      </Col>
      <Col>
      <Card body>
        <CardImg top width="100%" src={logo} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      </Col>
      <Col>
      <Card body>
        <CardImg top width="100%" src={logo} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
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
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      </Col>
      <Col>
      <Card body>
        <CardImg top width="100%" src={logo} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      </Col>
      <Col>
      <Card body>
        <CardImg top width="100%" src={logo} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      </Col>
    </Row>
    
  </div>
  );
}

export default App;
