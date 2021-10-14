import React, { Component } from 'react';
import './CheckBox.scss';

class CheckBox extends Component {
  render() {
    const { name, text, onClick } = this.props;
    return (
      <label className="radioLabel">
        <input
          className="orderCheck"
          type="checkbox"
          name={name}
          onClick={onClick}
        />
        {text}
      </label>
    );
  }
}

export default CheckBox;
