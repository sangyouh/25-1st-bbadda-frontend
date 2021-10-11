import React, { Component } from 'react';
import Button from '../../../../../Components/Button/Button';
import BUTTON_LIST from '../../../../../data/ButtonData';
import './JoinButton.scss';

class JoinButton extends Component {
  handleSubmit = e => {
    const {
      account,
      password,
      mobile_number,
      foreigner,
      date_of_birth,
      name,
      email,
      gender,
      foreign,
      birthday,
      id,
      pw,
      phoneNum,
    } = this.props;

    e.preventDefault();
    fetch('http://172.30.1.51:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        account,
        password,
        name,
        email,
        mobile_number,
        gender,
        foreigner,
        date_of_birth,
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
