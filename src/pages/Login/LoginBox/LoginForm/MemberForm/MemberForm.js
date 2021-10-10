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
    const { handleInput } = this;
    const { id, pw } = this.state;
    console.log('state', this.state);
    return (
      <form className="memberForm">
        <ul>
          <List data={LOGIN_LIST.foo} onChange={handleInput} />
        </ul>
        <p>
          <ul>
            <List data={LOGIN_LIST.bar} />
          </ul>
        </p>
        <p>{/* 오류 안내 문장 */}</p>
        <LoginButton id={id} pw={pw} />
        <SignUp />
      </form>
    );
  }
}

export default MemberForm;
