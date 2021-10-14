import React, { Component } from 'react';
import './RadioInput.scss';

class RadioInput extends Component {
  render() {
    const { firstText, secondText, name, onClick } = this.props;
    return (
      <span className="RadioSpan">
        <label className="radioLabel">
          <input
            className="firstRadioBtn"
            type="radio"
            name={name}
            value="true"
            onClick={onClick}
          />
          {firstText}
        </label>
        <label className="radioLabel">
          <input
            className="secondRadioBtn"
            type="radio"
            name={name}
            value="false"
            onClick={onClick}
          />
          {secondText}
        </label>
      </span>
    );
  }
}

export default RadioInput;
