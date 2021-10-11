/*global Kakao*/
import React, { Component } from 'react';
import Button from '../../../../../Components/Button/Button';
import BUTTON_LIST from '../../../../../data/ButtonData';
import './LoginButton.scss';
class LoginButton extends Component {
  constructor() {
    super();
    this.state = {
      isLogin: false,
    };
  }

  componentDidMount() {
    Kakao.init('b1327feb427e9e06e46e01f7f3d0beee');
  }

  // .then(res => res.json())
  // .then(res => {
  //   if (res.token) {
  //     history.push('/Main-KyungHyun');
  //     localStorage.setItem('kich-token', res.token);
  //   } else {
  //     this.setState({
  //       id: '',
  //       pw: '',
  //       validFailAlert:
  //         '입력한 사용자 이름을 사용하는 계정을 찾을 수 없습니다. 사용자 이름을 확인하고 다시 시도하세요.',
  //     });
  //   }
  // });

  loginWithKakao = () => {
    if (!Kakao) {
      console.log('Kakao instance does not exist');
    }
    Kakao.Auth.login({
      // persistAccessToken <- 자동 로그인
      success: auth => {
        console.log('login permitted -> token', Kakao.Auth.getAccessToken());
        this.setState({
          isLogin: true,
        });
        this.props.history.push('/main');
      },
      fail: err => {
        console.error(err);
      },
    });
  };

  logoutWithKakao = () => {
    if (Kakao.Auth.getAccessToken()) {
      console.log(
        '카카오 엑세스 토큰이 존재합니다.',
        Kakao.Auth.getAccessToken()
      );
      Kakao.Auth.logout(() => {
        Kakao.Auth.getAccessToken();
        console.log('로그아웃 되었습니다', Kakao.Auth.getAccessToken());
        this.setState({
          isLogin: false,
        });
      });
    }
  };

  handleSubmit = e => {
    const { id, pw } = this.props;
    e.preventDefault();
    fetch('http://172.30.1.51:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        account: id,
        password: pw,
      }),
    });
  };

  render() {
    const { loginWithKakao, handleSubmit, logoutWithKakao } = this;
    console.log('id', this.props.id, 'pw', this.props.pw);
    return (
      <div className="loginButton">
        <Button
          href={'/main'}
          data={BUTTON_LIST.signIn.Basic}
          onClick={handleSubmit}
        />
        <Button
          href={'/main'}
          data={BUTTON_LIST.signIn.Naver}
          onClick={handleSubmit}
        />
        <Button
          href={'/main'}
          data={BUTTON_LIST.signIn.Kakao}
          onClick={loginWithKakao}
        />
      </div>
    );
  }
}

export default LoginButton;
