import React, { Component } from 'react';

class JoinList extends Component {
  render() {
    const { className, placeHolder, name, type } = this.props.input;
    return (
      <li className={className}>
        <input
          placeholder={placeHolder}
          onChange={this.props.onChange}
          type={type}
          name={name}
        ></input>
      </li>
    );
  }
}

export default JoinList;
