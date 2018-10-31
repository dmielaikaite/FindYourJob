import React, { Component } from 'react';
import Input from '../FormFields/input.js';
import PropTypes from 'prop-types';

class FormContainer extends Component {

  constructor(props){
    super(props)
    this.state={
      existingUser : {
        email: '',
        password: ''
      }
    };
    this.handleFieldChage = this.handleFieldChage.bind(this);
  }

  handleFieldChage(e) {
    let value = e.target.value;
    let name = e.target.name
    this.setState( prevState => {
       return {
          existingUser : {
                   ...prevState.existingUser, [name]: value
                 }
       }
    }, () => this.props.handleData(this.state.existingUser)

    )
  }

  render(){
    return(
      <form role="form" onSubmit={this.props.handleFormSubmit}>
        <Input type={'text'}
               title= {'Email'}
               name= {'email'}
               value={this.state.existingUser.email}
               placeholder = {'Enter your email address'}
               handleChange = {this.handleFieldChage}
               errorText={this.props.errors.email}/>
         <Input type={'password'}
                title= {'Password'}
                name= {'password'}
                value={this.state.existingUser.password}
                placeholder = {'Enter your password'}
                handleChange = {this.handleFieldChage}
                errorText={this.props.errors.password}/>
      </form>
    )
  }
}

FormContainer.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
  errors: PropTypes.object,
  handleData: PropTypes.func.isRequired
}

export default FormContainer;
