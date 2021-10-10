import React, { Component } from 'react';
import Location from '../../Components/Location/Location';
import Wrap from '../../Components/Wrap/Wrap';
import './Login.scss';
import LoginBox from './LoginBox/LoginBox';
import MemberBenefit from './MemberBenefit/MemberBenefit';

class Login extends Component {
  render() {
    return (
      <div className="login">
        <Location page="로그인" />
        <div className="loginWrap">
          <LoginBox />
          <Wrap
            title="MLB 회원혜택 (F&F 통합 멤버십)"
            className="memberBenefitList"
          >
            <MemberBenefit />
          </Wrap>
        </div>
      </div>
    );
  }
}

export default Login;
