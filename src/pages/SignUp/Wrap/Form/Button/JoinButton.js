import React, { Component } from 'react';
import Button from '../../../../../Components/Button/Button';
import BUTTON_LIST from '../../../../../data/ButtonData';
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
  };
  render() {
    const { handleSubmit } = this;
    return (
      <>
        <Button
          href={'/main'}
          data={BUTTON_LIST.signUp}
          onClick={handleSubmit}
        />
      </>
    );
  }
}

export default JoinButton;
