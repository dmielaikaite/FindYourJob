import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../../actions/user.js';
import { Redirect } from 'react-router-dom'

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
      isUserFetched: false,
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
      isUserFetched: false
    })
  }

  handleData(data){
    this.setState({ existingUser : data });
  }

  handleFormSubmit(e){
    e.preventDefault();
    let existingUser = this.state.existingUser;
    let getUserURL = 'http://127.0.0.1:5000/api/getUser';
    this.props.dispatch(actions.fetchUserData(getUserURL,existingUser));
    this.setState({isUserFetched : true});
  }

  render(){

    if(this.state.isUserFetched){
      return <Redirect to='/private' />;
    }

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
  isSignInModalOpen: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        hasErrored: state.userHasError
    };
};

export default connect(mapStateToProps)(SignInModal);
