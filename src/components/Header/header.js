import React, { Component } from 'react';
import {Navbar, NavItem, Nav} from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <div className="welcomeHeader">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">FindYourJob</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <NavItem href="#">
              Register
            </NavItem>
            <NavItem href="#">
              Sign in
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Header;
