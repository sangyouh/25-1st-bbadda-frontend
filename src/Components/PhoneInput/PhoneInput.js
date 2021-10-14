import React, { Component } from 'react';
import './PhoneInput.scss';

class PhoneInput extends Component {
  render() {
    const { onChange } = this.props;
    return (
      <>
        <input
          className="firstNum"
          type="number"
          name="firstNum"
          onChange={onChange}
          defaultValue="010"
        />
        <span className={'hyphen'}>-</span>
        <input
          className="mobileNum"
          type="number"
          name="secondNum"
          onChange={onChange}
        />
        <span className={'hyphen'}>-</span>
        <input
          className="mobileNum"
          type="number"
          name="thirdNum"
          onChange={onChange}
        />
      </>
    );
  }
}

export default PhoneInput;
