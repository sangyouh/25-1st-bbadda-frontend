import React, { Component } from 'react';
import './LoginButton.scss';

class LoginButton extends Component {
  handleSubmit = e => {
    const { id, pw } = this.props;
    e.preventDefault();
    fetch('http://10.58.6.202:8000/users/signin/', {
      method: 'POST',
      body: JSON.stringify({
        account: id,
        password: pw,
      }),
    });
  };

  render() {
    console.log('id는', this.props);
    return (
      <div className="loginButton">
        <a href="#" className="nativeLoginTag" onClick={this.handleSubmit}>
          로그인
        </a>
        <a className="naverLoginTag">
          <span className="naverLogo">네이버 아이디 로그인</span>
        </a>
        <a className="kakaoLoginTag">
          <span className="kakaoLogo">카카오 로그인</span>
        </a>
      </div>
    );
  }
}

export default LoginButton;
