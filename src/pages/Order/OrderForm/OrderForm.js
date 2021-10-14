import React, { Component } from 'react';
import './OrderForm.scss';

class OrderForm extends Component {
  constructor() {
    super();
    this.state = {
      isOrdering: true,
    };
  }

  render() {
    const { isOrdering } = this.state;
    return (
      <div className="OrderForm">
        <ul className="orderUl">
          <li className="first">주문/결제</li>
          <li className={isOrdering && 'last'}>주문완료</li>
        </ul>
      </div>
    );
  }
}

export default OrderForm;
