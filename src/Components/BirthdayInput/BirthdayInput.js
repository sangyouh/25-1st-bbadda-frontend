import React, { Component } from 'react';
import './BirthdayInput.scss';

class BirthdayInput extends Component {
  render() {
    const { onChange } = this.props;
    return (
      <>
        <input
          className="year"
          type="number"
          name="year"
          placeholder="생년(4자)"
          onChange={onChange}
        />

        <input
          className="month"
          type="number"
          name="month"
          placeholder="월"
          onChange={onChange}
        />

        <input
          className="date"
          type="number"
          name="date"
          placeholder="일"
          onChange={onChange}
        />
      </>
    );
  }
}

export default BirthdayInput;
