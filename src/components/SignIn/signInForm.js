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
      user : {
        "email": "",
        "gender": "",
        "ok": true,
        "password": "",
        "userID": 1,
        "username": "",
        "uuid": ""
      }
    };
    this.closeModal = this.closeModal.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleData = this.handleData.bind(this);
  }

  componentWillReceiveProps(nextprops){
    this.setState(nextprops);
  }

  closeModal(e){
    e.preventDefault();
    this.setState({ isSignInModalOpen:  false});
    this.setState({
      existingUser : {
        email: '',
        password: ''
      },
      errors: {},
    })
  }

  handleData(data){
    this.setState({ existingUser : data });
  }

  apiCall(data){
    fetch('http://127.0.0.1:5000/api/getUser', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password
      })
    })
    .then( (response) => {
       return response.json()
    })
    .then( (json) => {
       this.setState({
          user: json
       })
       console.log('parsed json', json)
    })
    .catch( (ex) => {
       console.log('parsing failed', ex)
    })
    console.log(this.state)
  }

  handleFormSubmit(e){
    e.preventDefault();
    let existingUser = this.state.existingUser;
    this.apiCall(existingUser);
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
