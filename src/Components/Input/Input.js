import React, { Component } from 'react';
import './Input.scss';

class Input extends Component {
  render() {
    const { className, type, name, value, placeholder } = this.props;

    return (
      <input
        className={className}
        type={type}
        name={name}
        value={value}
        onChange={this.props.onChange}
        onClick={this.props.onClick}
        placeholder={placeholder}
      />
    );
  }
}

export default Input;
