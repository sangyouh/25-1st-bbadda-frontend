import React, { Component } from 'react';
import './PhoneInput.scss';

class PhoneInput extends Component {
  render() {
    const {
      firstInputName,
      secondInputName,
      thirdInputName,
      onChange,
      valueA,
      valueB,
      valueC,
    } = this.props;
    return (
      <>
        <input
          className="firstNum"
          type="number"
          name={firstInputName}
          onChange={onChange}
          defaultValue="010"
          value={valueA}
        />
        <span className={'hyphen'}>-</span>
        <input
          className="mobileNum"
          type="number"
          name={secondInputName}
          onChange={onChange}
          value={valueB}
        />
        <span className={'hyphen'}>-</span>
        <input
          className="mobileNum"
          type="number"
          name={thirdInputName}
          onChange={onChange}
          value={valueC}
        />
      </>
    );
  }
}

export default PhoneInput;
