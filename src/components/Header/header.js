import React, { Component } from 'react';
import {Navbar, NavItem, Nav} from 'react-bootstrap';
import RegistrationModal from '../Registration/registrationForm.js';

class Header extends Component {

  constructor() {
    super();
    this.state = {
      isRegisterButtonClicked: false,
    };
    this.openRegistrationModal = this.openRegistrationModal.bind(this);
  }

  openRegistrationModal = () => {
    this.setState({ isRegisterButtonClicked: true })
  }

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
            <NavItem onClick={ this.openRegistrationModal } href="#">
              Register {this.state.isRegisterButtonClicked.toString()}
            </NavItem>
            <NavItem href="#">
              Sign in
            </NavItem>
          </Nav>
        </Navbar>

        <RegistrationModal isModalOpen={this.state.isRegisterButtonClicked}></RegistrationModal>

      </div>
    );
  }
}

export default Header;
