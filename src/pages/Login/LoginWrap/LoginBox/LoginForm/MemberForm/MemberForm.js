import React, { Component } from 'react';
import LoginButton from './LoginButton';
import LoginInput from './LoginInput';
import './MemberForm.scss';
import SignUp from './SignUp';

class MemberForm extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
      isValid: false,
    };
  }

  handleInput = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  // checkIdValid = () => {

  // }

  // checkPwValid = () => {

  // }

  // handleSubmit = e => {
  //   c;
  // };

  render() {
    const { id, pw } = this.state;
    return (
      <form className="memberForm">
        <LoginInput onChange={this.handleInput} />
        <p>
          <label>
            <input type="checkbox" name="xxx" value="yyy" checked /> 아이디 저장
          </label>
        </p>
        <p>{/* 오류 안내 문장 */}</p>
        <LoginButton id={id} pw={pw} />
        <SignUp />
      </form>
    );
  }
}

export default MemberForm;
