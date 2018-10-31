import React from 'react';
import '../../styles/style.css';

const Error = (props) => {
  return(
    <p className="errorMessage">
      {props.errorText}
    </p>
  )
}

export default Error;
