export function handleValidation(fields){
  let errors = {};
  let isFormValid = true;

  if(typeof fields.username !== "undefined"){
     if(!fields.username.match(/^[a-zA-Z]+$/)){
        isFormValid = false;
        errors.username = "* User name should contain only letters";
     }
  }

  if(!fields.username){
     isFormValid = false;
     errors.username = "* User name cannot be empty";
  }

  if(fields.password.length < 2){
     isFormValid = false;
     errors.password = "* Password must contain at least 2 characters";
  }

  if(!fields.password){
     isFormValid = false;
     errors.password = "* Password cannot be empty";
  }

  if(fields.password != fields.confirmedPassword){
    isFormValid = false;
    errors.confirmedPassword = "* Passwords must match";
  }

  if(!fields.confirmedPassword){
     isFormValid = false;
     errors.confirmedPassword = "* Password confirmation cannot be empty";
  }

  if(typeof fields.email !== "undefined"){
     let lastAtPos = fields.email.lastIndexOf('@');
     let lastDotPos = fields.email.lastIndexOf('.');

     if (!(lastAtPos < lastDotPos
              && lastAtPos > 0
              && fields.email.indexOf('@@') == -1
              && lastDotPos > 2
              && (fields.email.length - lastDotPos) > 2)) {
        isFormValid = false;
        errors.email = "* Email is not valid";
      }
  }

  if(!fields.gender){
     isFormValid = false;
     errors.gender = "* Gender shuld be selected";
  }

  return {isFormValid, errors};
}
