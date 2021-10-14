import React, { Component } from 'react';
import Wrap from '../Wrap/Wrap';
import List from '../List/List';
import Button from '../Button/Button';
import ORDER_LIST from '../../data/OrderListData';
import BUTTON_LIST from '../../data/ButtonData';
import './SideBar.scss';

class SideBar extends Component {
  render() {
    const { onClick } = this.props;
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
              <span className="info">59,000원</span>
            </div>
            <div className="infoList">
              <span className="infoTitle">할인적용금액</span>
              <span className="discountInfo">-0원</span>
            </div>
            <div className="infoList">
              <span className="infoTitle">배송비</span>
              <span className="info">무료</span>
            </div>
          </div>
          <div className="priceInfo">
            <div className="infoList">
              <span className="infoTitle">총 주문금액</span>
              <span className="totalPrice">59,000원</span>
            </div>
            <div className="mileageInfo">
              <span>적립예상 마일리지</span>
              <span className="savedMileage">590원</span>
            </div>
          </div>
          <div className="checkPayAgree">
            <List data={ORDER_LIST.payAgree} onClick={onClick} />
          </div>
          <div className="orderCheckBtn">
            <Button data={BUTTON_LIST.order.Order} />
          </div>
        </Wrap>
      </div>
    );
  }
}

export default SideBar;
