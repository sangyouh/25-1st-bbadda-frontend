import React, { Component } from 'react';
import './LoginInput.scss';
class LoginInput extends Component {
  render() {
    const { onChange } = this.props;
    return (
      <>
        <input
          className="userInput"
          placeholder="아이디"
          onChange={onChange}
          name="id"
        ></input>
        <input
          className="userInput"
          placeholder="비밀번호"
          onChange={onChange}
          name="pw"
        ></input>
      </>
    );
  }
}

export default LoginInput;
