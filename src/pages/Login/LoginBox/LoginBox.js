import React, { Component } from 'react';
import MemberForm from './LoginForm/MemberForm/MemberForm';
import Button from '../../../Components/Button/Button';
import BUTTON_LIST from '../../../data/ButtonData';
import './LoginBox.scss';

class LoginBox extends Component {
  render() {
    return (
      <div className="LoginBox">
        <div className="loginBoxDiv">
          <Button href={'#'} data={BUTTON_LIST.signInType.Member} />
          <Button href={'#'} data={BUTTON_LIST.signInType.NonMember} />
        </div>
        <div className="forms">
          <MemberForm />
        </div>
      </div>
    );
  }
}

export default LoginBox;
