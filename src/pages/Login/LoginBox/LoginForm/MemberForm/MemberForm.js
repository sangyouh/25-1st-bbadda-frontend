import React, { Component } from 'react';
import LoginButton from './LoginButton';
import SignUp from './SignUp';
import List from '../../../../../Components/List/List';

import LOGIN_LIST from '../../../../../data/LoginInputList';
import './MemberForm.scss';

class MemberForm extends Component {
  constructor() {
    super();
    this.state = {
      account: '',
      password: '',
      isValid: false,
      autoLogin: false,
    };
  }

  handleInput = e => {
    const { value, name } = e.target;
    const { account, password } = this.state;
    this.setState({
      [name]: value,
      isValid: account.length >= 6 && password.length >= 8,
    });
  };

  handleToggle = e => {
    const { autoLogin } = this.state;
    this.setState({ autoLogin: !autoLogin });
  };

  // checkIdValid = () => {

  // }

  // checkPwValid = () => {

  // }

  // handleSubmit = e => {
  //   c;
  // };

  render() {
    const { handleInput, handleToggle } = this;
    const { account, password, isValid, autoLogin } = this.state;
    console.log('isValid', this.state.isValid);
    console.log('autoLogin', this.state.autoLogin);
    console.log();
    return (
      <form className="MemberForm">
        <ul>
          <List data={LOGIN_LIST.foo} onChange={handleInput} />
        </ul>
        <p>
          <List data={LOGIN_LIST.bar} onClick={handleToggle} />
        </p>
        <p>{/* 오류 안내 문장 */}</p>
        <LoginButton
          account={account}
          password={password}
          isValid={isValid}
          autoLogin={autoLogin}
        />
        <SignUp />
      </form>
    );
  }
}

export default MemberForm;
