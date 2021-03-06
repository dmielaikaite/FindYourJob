import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import FormContainer from './form.js';
import { handleValidation } from './validation.js';

class RegistrationModal extends Component{

  constructor(props){
    super(props);
    this.state = {
      newUser: {
        username: '',
        password: '',
        confirmedPassword: '',
        email: '',
        gender: ''
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

  closeModal(e) {
    e.preventDefault();
    this.setState({ isRegisterModalOpen : false });
    this.setState({
      newUser: {
        username: '',
        password: '',
        confirmedPassword: '',
        email: '',
        gender: ''
      },
      errors: {}
    })
  }

  handleData(data){
    this.setState({ newUser : data });
  }

  apiCall(data){
    fetch('http://127.0.0.1:5000/api/addUser', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: data.username,
        password: data.password,
        email: data.email,
        gender: data.gender
      })
    }).then(function(response) {
      console.log(response.json());
      // return response.json();
    }).catch(err => {return err})
  }

  handleFormSubmit(e){
    e.preventDefault();
    let newUser = this.state.newUser;
    if (handleValidation(newUser).isFormValid){
      this.apiCall(newUser);
      // this.closeModal(e);
    }
    this.setState({errors: handleValidation(this.state.newUser).errors});
  }

  render(){
    return(
      <div className="static-modal">
        <Modal show={this.state.isRegisterModalOpen}>
            <Modal.Header>
              <Modal.Title>Registration</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <FormContainer dataHandler={this.handleData}
                             handleFormSubmit={this.handleFormSubmit}
                             errors={this.state.errors}/>
            </Modal.Body>

            <Modal.Footer>
              <Button bsStyle="primary" onClick={this.closeModal}>Close</Button>
              <Button bsStyle="success" onClick={this.handleFormSubmit}>Submit</Button>
            </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

RegistrationModal.propTypes = {
  isRegisterModalOpen: PropTypes.bool.isRequired
};

export default RegistrationModal;
