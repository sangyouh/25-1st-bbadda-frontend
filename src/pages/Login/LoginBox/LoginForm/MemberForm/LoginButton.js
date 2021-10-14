/*global Kakao*/
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from '../../../../../Components/Button/Button';
import BUTTON_LIST from '../../../../../data/ButtonData';
import './LoginButton.scss';
class LoginButton extends Component {
  // componentDidMount() {
  //   Kakao.init('b1327feb427e9e06e46e01f7f3d0beee');
  // }

  // loginWithKakao = () => {
  //   if (!Kakao) {
  //     console.log('Kakao instance does not exist');
  //   }
  //   Kakao.Auth.login({
  //     // persistAccessToken <- 자동 로그인
  //     success: auth => {
  //       console.log('login permitted -> token', Kakao.Auth.getAccessToken());
  //       this.setState({
  //         isLogin: true,
  //       });
  //       this.props.history.push('/main');
  //     },
  //     fail: err => {
  //       console.error(err);
  //     },
  //   });
  // };

  // logoutWithKakao = () => {
  //   if (Kakao.Auth.getAccessToken()) {
  //     console.log(
  //       '카카오 엑세스 토큰이 존재합니다.',
  //       Kakao.Auth.getAccessToken()
  //     );
  //     Kakao.Auth.logout(() => {
  //       Kakao.Auth.getAccessToken();
  //       console.log('로그아웃 되었습니다', Kakao.Auth.getAccessToken());
  //       this.setState({
  //         isLogin: false,
  //       });
  //     });
  //   }
  // };

  handleSubmit = e => {
    const {
      account,
      password,
      isValid,
      autoLogin,
      validateAccount,
      alertMessage,
    } = this.props;
    const { history } = this.props;
    e.preventDefault();
    isValid
      ? fetch('http://10.58.0.165:8000/users/signin', {
          method: 'POST',
          body: JSON.stringify({
            account,
            password,
          }),
        })
          .then(res => res.json())
          .then(res => {
            if (res.access_token) {
              autoLogin
                ? localStorage.setItem('AccessToken', res.access_token)
                : sessionStorage.setItem('AccessToken', res.access_token);
              history.push('/main');
            } else {
              alertMessage();
            }
          })
      : alertMessage();
  };

  render() {
    const { loginWithKakao, handleSubmit, logoutWithKakao } = this;
    return (
      <form className="LoginButton" onSubmit={console.log('test')}>
        <Button
          href={'/main'}
          data={BUTTON_LIST.signIn.Basic}
          onClick={handleSubmit}
        />
        <Button href={'/main'} data={BUTTON_LIST.signIn.Naver} />
        <Button href={'/main'} data={BUTTON_LIST.signIn.Kakao} />
      </form>
    );
  }
}

export default withRouter(LoginButton);
