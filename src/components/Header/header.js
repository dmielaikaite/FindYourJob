import React, { Component } from 'react';
import {Navbar, NavItem, Nav} from 'react-bootstrap';
import RegistrationModal from '../Registration/registrationForm.js';
import SignInModal from '../SignIn/signInForm.js';

class Header extends Component {

  constructor() {
    super();
    this.state = {
      isRegisterButtonClicked: false,
      isSignInButtonClicked: false,
    };
    this.openRegistrationModal = this.openRegistrationModal.bind(this);
    this.openSignInModal = this.openSignInModal.bind(this);
  }

  openRegistrationModal = () => {
    this.setState({ isRegisterButtonClicked: true,
                    isSignInButtonClicked: false})
  }

  openSignInModal = () => {
    this.setState({ isSignInButtonClicked: true,
                    isRegisterButtonClicked: false })
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
            <NavItem onClick={ this.openSignInModal } href="#">
              Sign in
            </NavItem>
          </Nav>
        </Navbar>

        <RegistrationModal isRegisterModalOpen={this.state.isRegisterButtonClicked}/>
        <SignInModal isSignInModalOpen={this.state.isSignInButtonClicked}/>
      </div>
    );
  }
}

export default Header;
