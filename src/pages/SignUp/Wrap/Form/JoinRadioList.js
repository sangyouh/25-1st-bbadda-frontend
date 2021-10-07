import React, { Component } from 'react';
import './JoinRadioList.scss';

class JoinRadioList extends Component {
  render() {
    const { className, value, type, name } = this.props.input;
    return (
      <>
        <input
          className={className}
          type={type}
          name={name}
          value={value}
          onChange={this.props.onClick}
          // checked={'foreign' === false}
        />
        <label className="radioLabel">남자</label>
      </>
    );
  }
}

export default JoinRadioList;
