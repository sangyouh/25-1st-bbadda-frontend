import React, { Component } from 'react';
import Location from './Location/Location';
import LoginWrap from './LoginWrap/LoginWrap';
import './Login.scss';

class Login extends Component {
  render() {
    return (
      <div className="login">
        <Location />
        <LoginWrap />
      </div>
    );
  }
}

export default Login;
