const ORDER_LIST = {
  orderer: [
    {
      id: 1,
      className: 'halfInput',
      type: 'text',
      name: 'order',
    },
    {
      id: 2,
      className: 'orderCheck',
      type: 'checkbox',
      radioName: '회원 정보와 동일',
      radio: true,
    },
  ],
  receiver: [
    { id: 1, className: 'halfInput', type: 'text', name: 'receiver' },
    {
      id: 2,
      className: 'orderCheck',
      type: 'checkbox',
      radioName: '주문자 정보와 동일',
      radio: true,
    },
  ],
  payAgree: [
    {
      type: 'checkbox',
      className: 'check',
      radioName:
        '주문하실 상품, 가격, 배송정보, 할인정보 등을 확인하였으며, 구매에 동의하시겠습니까?(전자상거래법 제 8조 제2항)',
      radio: true,
    },
  ],
};

export default ORDER_LIST;
