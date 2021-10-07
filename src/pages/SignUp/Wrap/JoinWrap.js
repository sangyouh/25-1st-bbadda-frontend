import React, { Component } from 'react';
import JoinButton from './Form/Button/JoinButton';
import JoinForm from './Form/JoinForm';
import './JoinWrap.scss';

class JoinWrap extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
      checkPw: '',
      name: '',
      email: '',
      phoneNum: '',
      gender: null,
      foreign: null,
      year: '',
      month: '',
      date: '',
    };
  }

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleRadio = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value === 'true' ? true : false });
  };

  render() {
    const { handleInput, handleRadio } = this;
    const {
      id,
      pw,
      name,
      email,
      phoneNum,
      gender,
      foreign,
      year,
      month,
      date,
    } = this.state;
    const info = { id, pw, name, email, phoneNum, gender, foreign };
    const birthday = year + '-' + month + '-' + date;
    console.log('input', this.state);

    return (
      <div className="joinWrap">
        <div className="topInfo">F&F 통합회원 가입</div>
        <JoinForm onChange={handleInput} onClick={handleRadio} />
        <JoinButton
          birthday={birthday}
          info={info}
          id={id}
          pw={pw}
          name={name}
          email={email}
          phoneNum={phoneNum}
          gender={gender}
          foreign={foreign}
        />
        <section className="joinInfo">
          <div>
            F&F membership은 회원님의 소중한 개인정보를 안전하게 관리하고
            있습니다.
          </div>
          <div className="buttomInfo">
            2017년 8월 18일부터 시행되는 정보통신망 이용 촉진 및 어쩌고 저쩌고
            <br />
            집에 가고 싶은데 이건 해야겠는데 하기는 싫고 할건 많고 머리는
            <br />
            아프고 허리도 아프고 이 편지는 영국에서 최초로 시작되어 일년에 한
            바퀴 돌면서 받는 사람에게 행운을 주었고
            <br />
            지금은 당신에게로 옮겨진 이 편지는 4일 안에 당신 곁을 떠나야 합니다.
            이 편지를 포함해서 7통을 행운이 필요한 사람에게 보내 주셔야 합니다.
          </div>
        </section>
      </div>
    );
  }
}

export default JoinWrap;
