import React, { Component } from 'react';

class Input extends Component {
  render() {
    const { className, type, name, value, placeholder, onChange, onClick } =
      this.props;
    return (
      <input
        className={className}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onClick={onClick}
        placeholder={placeholder}
      />
    );
  }
}

export default Input;
