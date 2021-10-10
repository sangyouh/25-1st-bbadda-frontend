import React, { Component } from 'react';
import './OrderForm.scss';

class OrderForm extends Component {
  render() {
    return (
      <div className="OrderForm">
        <ul className="orderUl">
          <li className="orderLi ListFirst">주문/결제</li>
          <li className="orderLi ListLast">주문완료::after</li>
        </ul>
      </div>
    );
  }
}

export default OrderForm;
