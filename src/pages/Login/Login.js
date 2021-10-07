import React, { Component } from 'react';
import Location from '../../Components/Location/Location';
import LoginWrap from './LoginWrap/LoginWrap';
import './Login.scss';

class Login extends Component {
  render() {
    return (
      <div className="login">
        <Location page="로그인" />
        <LoginWrap />
      </div>
    );
  }
}

export default Login;
