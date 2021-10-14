import React, { Component } from 'react';
import Wrap from '../Wrap/Wrap';
import List from '../List/List';
import Button from '../Button/Button';
import ORDER_LIST from '../../data/OrderListData';
import BUTTON_LIST from '../../data/ButtonData';
import './SideBar.scss';
import CheckBox from '../CheckBox/CheckBox';
import { withRouter } from 'react-router-dom';

class SideBar extends Component {
  handleSubmit = e => {
    const {
      name,
      mobile_number,
      email,
      address,
      receiver_name,
      receiver_mobile_number,
      request,
      type,
      value,
      quantity,
      payAgree,
      history,
    } = this.props;

    e.preventDefault();
    if (payAgree) {
      fetch('http://10.58.0.165:8000/orders/order', {
        method: 'POST',
        headers: {
          Authorization: localStorage.getItem('AccessToken'),
        },
        body: JSON.stringify({
          name,
          mobile_number,
          email,
          address,
          receiver_name,
          receiver_mobile_number,
          request,
          type,
          value,
          quantity,
        }),
      })
        .then(alert('주문이 완료되었습니다.'))
        .then(history.push('/main'));
    } else {
      alert(
        '주문하실 상품, 가격, 배송정보, 할인정보 등을 확인하였으며, 구매에 동의하시겠습니까? (전자상거래법 제 8조 제2항)(을)를 선택해주세요.'
      );
    }
  };

  // componentWillUnmount() {
  //   fetch('http://10.58.0.165:8000/orders/order', {
  //     method: 'DELETE',
  //   });
  // }

  render() {
    const { allprice, price, discount, onClick, payAgree } = this.props;

    const { handleSubmit } = this;
    return (
      <div className="SideBar">
        <Wrap
          className={'sideBarContent'}
          titleClassName={'sideBarTitle'}
          title={'결제정보'}
        >
          <div className="paymentInfo">
            <div className="infoList">
              <span className="infoTitle">선택상품금액</span>
              <span className="info">{price}원</span>
            </div>
            <div className="infoList">
              <span className="infoTitle">할인적용금액</span>
              <span className="discountInfo">-원</span>
            </div>
            <div className="infoList">
              <span className="infoTitle">배송비</span>
              <span className="info">무료</span>
            </div>
          </div>
          <div className="priceInfo">
            <div className="infoList">
              <span className="infoTitle">총 주문금액</span>
              <span className="totalPrice">{allprice}원</span>
            </div>
            <div className="mileageInfo">
              <span>적립예상 마일리지</span>
              <span className="savedMileage">{allprice * 0.1}원</span>
            </div>
          </div>
          <div className="checkPayAgree">
            <CheckBox
              name="payAgree"
              onClick={onClick}
              text="주문하실 상품, 가격, 배송정보, 할인정보 등을 확인하였으며, 구매에 동의하시겠습니까?(전자상거래법 제 8조 제2항)"
            />
          </div>
          <div className="orderCheckBtn">
            <Button data={BUTTON_LIST.order.Order} onClick={handleSubmit} />
          </div>
        </Wrap>
      </div>
    );
  }
}

export default withRouter(SideBar);
