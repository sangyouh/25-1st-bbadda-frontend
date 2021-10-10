const BUTTON_LIST = {
  signIn: {
    Basic: {
      classNameA: 'nativeLoginTag',
      classNameB: 'basicSpan',
      content: '로그인',
    },
    Naver: {
      classNameA: 'naverLoginTag',
      classNameB: 'naverLogo',
      content: '네이버 아이디 로그인',
    },
    Kakao: {
      classNameA: 'kakaoLoginTag',
      classNameB: 'kakaoLogo',
      content: '카카오 로그인',
    },
  },
  signUp: {
    classNameA: 'joinBtn',
    classNameB: 'nativeLoginTag',
    content: '회원가입',
  },
};

export default BUTTON_LIST;
