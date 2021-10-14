import React, { Component } from 'react';
import './NumberInput.scss';

class NumberInput extends Component {
  render() {
    const {
      firstNum,
      secondNum,
      thirdNum,
      yearInfo,
      monthInfo,
      dateInfo,
      None,
      onChange,
    } = this.props;
    return (
      <>
        <input
          className="firstNum"
          type="number"
          name={firstNum}
          placeholder={yearInfo}
          onChange={onChange}
          defaultValue={firstNum && '010'}
        />
        <span className={'hyphen' + None}>-</span>
        <input
          className="mobileNum"
          type="number"
          name={secondNum}
          placeholder={monthInfo}
          onChange={onChange}
        />
        <span className={'hyphen' + None}>-</span>
        <input
          className="mobileNum"
          type="number"
          name={thirdNum}
          placeholder={dateInfo}
          onChange={onChange}
        />
      </>
    );
  }
}

export default NumberInput;
