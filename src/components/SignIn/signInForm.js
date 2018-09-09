import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import FormContainer from './form.js';

class SignInModal extends Component{

  constructor(props){
    super(props);
    this.state={
      existingUser : {
        email: '',
        password: ''
      },
      errors: {},
    };
    this.closeModal = this.closeModal.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleData = this.handleData.bind(this);
  }

  componentWillReceiveProps(nextprops){
    this.setState(nextprops);
  }

  closeModal(e){
    this.setState({ isSignInModalOpen:  false});
  }

  handleData(data){
    this.setState({ existingUser : data });
  }

  handleFormSubmit(e){
    console.log('sign in button clicked');
  }

  render(){
    return(
      <div className="static-modal">
        <Modal show={this.state.isSignInModalOpen}>
            <Modal.Header>
              <Modal.Title>Sign In</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <FormContainer handleFormSubmit={this.handleFormSubmit}
                               errors={this.state.errors}
                               handleData={this.handleData}/>
            </Modal.Body>

            <Modal.Footer>
              <Button bsStyle="primary" onClick={this.closeModal}>Close</Button>
              <Button bsStyle="success" onClick={this.handleFormSubmit}>Submit</Button>
            </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

SignInModal.propTypes = {
  isSignInModalOpen: PropTypes.bool.isRequired,
}

export default SignInModal;
