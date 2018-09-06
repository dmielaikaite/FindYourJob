import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import FormContainer from './form.js';

class RegistrationModal extends Component{

  constructor(props){
    super(props);
    this.state = {};
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillReceiveProps(nextprops){
    this.setState(nextprops);
  }

  closeModal() {
    this.setState({ isModalOpen : false });
  }

  render(){
    return(
      <div className="static-modal">
        <Modal show={this.state.isModalOpen}>
            <Modal.Header>
              <Modal.Title>Registration</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <FormContainer/>
            </Modal.Body>

            <Modal.Footer>
              <Button bsStyle="primary" onClick={this.closeModal}>Close</Button>
              <Button bsStyle="success" onClick={this.closeModal}>Submit</Button>
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
