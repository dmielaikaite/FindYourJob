import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import FormContainer from './form.js';

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
      errors: [],
    };
    this.closeModal = this.closeModal.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleData = this.handleData.bind(this);
    this.validate = this.validate.bind(this);
  }

  componentWillReceiveProps(nextprops){
    this.setState(nextprops);
  }

  closeModal(e) {
    e.preventDefault();
    this.setState({ isModalOpen : false });
    this.setState({
      newUser: {
        username: '',
        password: '',
        confirmedPassword: '',
        email: '',
        gender: ''
      }
    })
  }

  handleData(data){
    this.setState({ newUser : data });
  }

  validate(newUser){
    const errors = [];
    if (newUser.username.length === 0){
      errors.push("Username is is required");
    }
    return errors;
  }

  handleFormSubmit(e){
    e.preventDefault();
    let newUser = this.state.newUser;
    const errors = this.validate(newUser);
    // if (errors.length > 0) {
    //   this.setState({ errors });
    //   return;
    // }
  }

  render(){
    return(
      <div className="static-modal">
        <Modal show={this.state.isModalOpen}>
            <Modal.Header>
              <Modal.Title>Registration</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              {this.state.errors.map(error => (
                <p key={error}>Error: {error}</p>
                ))}
              <FormContainer dataHandler={this.handleData} handleFormSubmit={this.handleFormSubmit}/>
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
  isModalOpen: PropTypes.bool.isRequired
};

export default RegistrationModal;
