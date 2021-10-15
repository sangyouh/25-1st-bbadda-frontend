import React, { Component } from 'react';
import './PhoneInput.scss';

class PhoneInput extends Component {
  render() {
    const { firstInputName, secondInputName, thirdInputName, onChange } =
      this.props;
    return (
      <>
        <input
          className="firstNum"
          type="number"
          name={firstInputName}
          onChange={onChange}
          defaultValue="010"
        />
        <span className={'hyphen'}>-</span>
        <input
          className="mobileNum"
          type="number"
          name={secondInputName}
          onChange={onChange}
        />
        <span className={'hyphen'}>-</span>
        <input
          className="mobileNum"
          type="number"
          name={thirdInputName}
          onChange={onChange}
        />
      </>
    );
  }
}

export default PhoneInput;
