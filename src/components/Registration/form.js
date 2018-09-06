import React, { Component } from 'react';
import Input from '../FormFields/input.js';

class FormContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      newUser: {
        username: '',
        password: '',
        email: '',
        gender: ''
      }
    }

    this.handleFieldChage = this.handleFieldChage.bind(this);
  }

  handleFieldChage(e) {
    let value = e.target.value;
    let name = e.target.name
    this.setState( prevState => {
       return {
          newUser : {
                   ...prevState.newUser, [name]: value
                  }
       }
    }, () => console.log(this.state.newUser)
    )
  }


  render(){
    return (
      <form className="registrationForm">
        <Input type={'text'}
               title= {'User name'}
               name= {'username'}
               value={this.state.newUser.username}
               placeholder = {'Enter your username'}
               handleChange = {this.handleFieldChage} />
         <Input type={'password'}
                title= {'Password'}
                name= {'password'}
                value={this.state.newUser.password}
                placeholder = {'Enter your password'}
                handleChange = {this.handleFieldChage} />
        <Input type={'email'}
               title= {'Email address'}
               name= {'email'}
               value={this.state.newUser.email}
               placeholder = {'Enter your email address'}
               handleChange = {this.handleFieldChage} />
       <Input type={'text'}
              title= {'Gender'}
              name= {'gender'}
              value={this.state.newUser.gender}
              placeholder = {'Enter your gender'}
              handleChange = {this.handleFieldChage} />
      </form>
    )
  }

}

export default FormContainer;
