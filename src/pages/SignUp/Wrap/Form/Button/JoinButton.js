import React, { Component } from 'react';
import './JoinButton.scss';

class JoinButton extends Component {
  handleSubmit = e => {
    const { id, pw, name, email, phoneNum, gender, foreign, birthday } =
      this.props;

    e.preventDefault();
    fetch('http://10.58.6.202:8000/users/signup/', {
      method: 'POST',
      body: JSON.stringify({
        account: id,
        password: pw,
        name: name,
        email: email,
        phone_number: phoneNum,
        gender: gender,
        foreigner: foreign,
        date_of_birth: birthday,
      }),
    });
    // history.pushState('/login');
  };
  render() {
    const { info, birthday } = this.props;
    console.log('info', info);
    console.log('birthday', birthday);
    console.log('submitInfo', (info.birthday = { birthday }));
    return (
      <div className="joinBtn">
        <a href="#" className="nativeLoginTag" onClick={this.handleSubmit}>
          회원가입
        </a>
      </div>
    );
  }
}

export default JoinButton;
