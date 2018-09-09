import React from 'react';
import Error from './error.js';

const Input = (props) => {
    return(
      <div className="form-group">
        <label htmlFor={props.name} className="form-label">{props.title}</label>
        <input
          className="form-control"
          id={props.name}
          name={props.name}
          type={props.type}
          value={props.value}
          onChange={props.handleChange}
          placeholder={props.placeholder}/>
          <Error errorText={props.errorText}/>
      </div>
    )
}

export default Input;
