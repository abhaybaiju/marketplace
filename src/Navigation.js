import React from 'react'
import {
    Collapse,  Navbar,  NavbarToggler,  NavbarBrand,  Nav,  NavItem,  NavLink,  UncontrolledDropdown,  DropdownToggle,  DropdownMenu,
    DropdownItem,
    NavbarText,
    Button
  } from 'reactstrap';

  function Navigation(){
      return(
        <Navbar color="light" light expand="md">
        <NavbarBrand href={process.env.PUBLIC_URL + '/'}>Home</NavbarBrand>
        <NavbarToggler  />
        <Collapse isOpen={false} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="https://mlh.io/">MLH</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/abhaybaiju/marketplace">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Resources
              </DropdownToggle> 
              <DropdownMenu right>
                <DropdownItem>
                <NavLink href="https://reactjs.org/">React</NavLink>
                </DropdownItem>
                <DropdownItem>
                <NavLink href="https://reactstrap.github.io/">ReactStrap</NavLink>
                </DropdownItem>
               
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
  </Navbar> 
      );
  }
  export default Navigation;