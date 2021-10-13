import React, { Component } from 'react';
import MemberForm from './LoginForm/MemberForm/MemberForm';
import Button from '../../../Components/Button/Button';
import BUTTON_LIST from '../../../data/ButtonData';
import './LoginBox.scss';

class LoginBox extends Component {
  constructor() {
    super();
    this.state = {
      isClick: false, // 아직 미구현
    };
  }

  // changeLoginType = () => {
  //   const
  //   this.setState({})
  // }

  render() {
    const { isClick } = this.state;

    return (
      <div className="LoginBox">
        <ul className="loginBoxUl">
          <Button href={'#'} data={BUTTON_LIST.signInType.Member} onClick />
          <Button href={'#'} data={BUTTON_LIST.signInType.NonMember} onClick />
        </ul>
        <div className="forms">
          <MemberForm />
        </div>
      </div>
    );
  }
}

export default LoginBox;
