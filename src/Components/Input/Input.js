import React, { Component } from 'react';
import './Input.scss';

class Input extends Component {
  render() {
    const {
      className,
      type,
      name,
      value,
      placeholder,
      errorMessage,
      onChange,
      onClick,
    } = this.props;

    return (
      <>
        <input
          className={className}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onClick={onClick}
          placeholder={placeholder}
        />
        {/* <p className="alertMessage">{errorMessage}</p> */}
      </>
    );
  }
}

export default Input;
