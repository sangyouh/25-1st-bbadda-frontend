import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from '../../../../../Components/Button/Button';
import BUTTON_LIST from '../../../../../data/ButtonData';

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
    } = this.props.info;

    const { history } = this.props;

    e.preventDefault();
    fetch('http://10.58.0.118:8000/users/signup', {
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
    })
      .then(alert('회원가입이 완료되었습니다!'))
      .then(history.push('/main'));
  };
  render() {
    const { handleSubmit } = this;
    return (
      <>
        <Button href={'#'} data={BUTTON_LIST.signUp} onClick={handleSubmit} />
      </>
    );
  }
}

export default withRouter(JoinButton);
