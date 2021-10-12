import React, { Component } from 'react';
import './SignUp.scss';

class SignUp extends Component {
  render() {
    return (
      <div className="SignUp">
        <a href="#">아이디 찾기</a>
        <a className="middle" href="#">
          비밀번호 찾기
        </a>
        <a href="/join">회원가입</a>
      </div>
    );
  }
}

export default SignUp;
