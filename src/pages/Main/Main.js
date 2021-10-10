/*global Kakao*/
import React, { Component } from 'react';
import './Main.scss';

class Main extends Component {
  componentDidMount() {
    Kakao.init('b1327feb427e9e06e46e01f7f3d0beee');
  }

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

  render() {
    const { logoutWithKakao } = this;
    return (
      <div>
        <h1> 성공이에오</h1>
        <button onClick={logoutWithKakao}>X</button>
      </div>
    );
  }
}

export default Main;
