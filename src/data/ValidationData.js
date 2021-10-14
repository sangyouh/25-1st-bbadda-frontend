const VALID = {
  letterCheck: {
    checkNum: /[0-9]/,
    checkEngA: /[A-Z]/,
    checkEnga: /[a-z]/,
    // checkEngAll: /[a-zA-Z]/,
    checkSpc: /[~!@#$%^&*()_+|<>?:{}]/,
    checkKor: /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/,
  },
  message: {
    minLength: '자리 이상',
    maxLength: '자리 이하',
    withNum: '숫자 포함',
    withNoNum: '숫자 미포함',
    withEngA: '영문 대문자 포함',
    withNoEngA: '영문 대문자 미포함',
    withEnga: '영문 소문자 포함',
    withNoEnga: '영문 소문자 미포함',
    withSpc: '특수문자 포함',
    withNoSpc: '특수문자 미포함',
    withKor: '한글 포함',
    withNoKor: '한글 미포함',
  },
};
