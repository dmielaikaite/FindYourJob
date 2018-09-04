import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';

class RegistrationModal extends Component{

  constructor(props){
    super(props);
    this.state = {};
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillReceiveProps(nextprops){
    this.setState(nextprops);
  }

  closeModal = () => {
    this.setState({ isModalOpen : false });
  }

  render(){
    return(
      <div>
        <Modal show={this.state.isModalOpen}>
          Modal
          <Button onClick={this.closeModal}>Close</Button>
        </Modal>
      </div>
    );
  }
}

RegistrationModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired
};

export default RegistrationModal;
