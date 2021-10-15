import React, { Component } from 'react';
import LoginButton from './LoginButton';
import SignUp from './SignUp';
import List from '../../../../../Components/List/List';

import LOGIN_LIST from '../../../../../data/LoginInputList';
import './MemberForm.scss';
import CheckBox from '../../../../../Components/CheckBox/CheckBox';

class MemberForm extends Component {
  constructor() {
    super();
    this.state = {
      account: '',
      password: '',
      isValid: false,
      autoLogin: false,
      errorMessage: '',
    };
  }

  handleInput = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
      isValid: this.validateAccount(),
    });
  };

  validateAccount = () => {
    const { account, password } = this.state;
    const idReg = /^[a-z]+[a-z0-9]{5,19}$/g;
    const pwReg = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
    return true;
    // return idReg.test(account) && pwReg.test(password);
  };

  alertMessage = response => {
    const { account, password } = this.state;
    let tempMessage = '';
    if (!account) {
      tempMessage = '아이디를 정확하게 입력해주세요.';
    } else if (!password) {
      tempMessage = '비밀번호를 정확하게 입력해주세요.';
    } else {
      tempMessage = '아이디/비밀번호를 정확히 입력했는지 확인해주세요.';
    }
    this.setState({ errorMessage: tempMessage });
  };

  handleToggle = e => {
    const { autoLogin } = this.state;
    this.setState({ autoLogin: !autoLogin });
  };

  render() {
    const { handleInput, handleToggle } = this;
    const { account, password, isValid, autoLogin, errorMessage } = this.state;

    return (
      <form>
        <ul>
          <List data={LOGIN_LIST.foo} onChange={handleInput} />
        </ul>
        <p className="memberFormP">
          <CheckBox text="로그인 저장" onClick={handleToggle} />
        </p>
        <p className="alertMessage">{errorMessage}</p>
        <LoginButton
          account={account}
          password={password}
          isValid={isValid}
          autoLogin={autoLogin}
          validateAccount={this.validateAccount}
          alertMessage={this.alertMessage}
        />
        <SignUp />
      </form>
    );
  }
}

export default MemberForm;
