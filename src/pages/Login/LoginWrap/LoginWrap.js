import React, { Component } from 'react';
import LoginBox from './LoginBox/LoginBox';
import MemberBenefit from './MemberBenefit/MemberBenefit';
import './LoginWrap.scss';

class LoginWrap extends Component {
  render() {
    return (
      <div className="loginWrap">
        <LoginBox />
        <div className="memberBenefitList">
          <h3>MLB 회원혜택 (F&F 통합 멤버십)</h3>
          <MemberBenefit />
        </div>
      </div>
    );
  }
}

export default LoginWrap;
