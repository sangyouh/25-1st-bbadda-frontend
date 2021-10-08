const JOIN_LIST = {
  first: [
    {
      id: 1,
      className: 'firstInput',
      placeHolder: '아이디 (6~15자 영문 소문자.숫자)',
      type: 'text',
      name: 'id',
      single: true,
    },
    {
      id: 2,
      className: '',
      placeHolder: '비밀번호 ( 8~12자 영문, 숫자, 특수문자 중 최소 2가지 조합',
      type: 'password',
      name: 'pw',
      single: true,
    },
    {
      id: 3,
      className: '',
      placeHolder: '비밀번호 확인',
      type: 'password',
      name: 'checkPw',
      single: true,
    },
  ],
  sec: [
    {
      className: 'name',
      placeHolder: '이름(실명입력)',
      type: 'text',
      name: 'name',
    },
    {
      className: 'button1',
      value: 'false',
      type: 'radio',
      name: 'foreign',
      radio: true,
    },
    {
      className: 'button2',
      value: 'true',
      type: 'radio',
      name: 'foreign',
      radio: true,
    },
  ],
  third: [
    {
      className: 'year',
      placeHolder: '생년(4자)',
      type: 'text',
      name: 'year',
    },
    {
      className: 'month',
      placeHolder: '월',
      type: 'text',
      name: 'month',
    },
    {
      className: 'date',
      placeHolder: '일',
      type: 'text',
      name: 'date',
    },
    {
      className: 'button1',
      value: 'true',
      type: 'radio',
      name: 'gender',
      radio: true,
    },
    {
      className: 'button2',
      value: 'false',
      type: 'radio',
      name: 'gender',
      radio: true,
    },
  ],
  fou: [
    {
      className: 'listInput',
      placeHolder: 'E-mail',
      type: 'email',
      name: 'month',
      single: true,
    },
    {
      className: 'listInput',
      placeHolder: '전화번호',
      type: 'tel',
      name: 'phoneNum',
      single: true,
    },
  ],
};

export default JOIN_LIST;
