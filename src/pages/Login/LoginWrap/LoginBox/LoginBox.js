import React, { Component } from 'react';
import LoginForm from './LoginForm/LoginForm';
import './LoginBox.scss';

class LoginBox extends Component {
  constructor() {
    super();
    this.state = {
      isClick: false, // 아직 미구현
    };
  }

  render() {
    const { isClick } = this.state;
    return (
      <div className="loginBox">
        <ul>
          <li className={isClick && 'on'}>
            <a href="javascript:;" onClick>
              회원
            </a>
          </li>
          <li className={isClick && 'on'}>
            <a href="javascript:;">비회원 (주문조회)</a>
          </li>
        </ul>
        <LoginForm />
      </div>
    );
  }
}

export default LoginBox;
