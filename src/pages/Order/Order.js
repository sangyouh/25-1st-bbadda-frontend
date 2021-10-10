import React, { Component } from 'react';
import Location from '../../Components/Location/Location';
import OrderForm from './OrderForm/OrderForm';
import './Order.scss';

class Order extends Component {
  render() {
    return (
      <div className="Order">
        <Location page={'주문결제'} />

        <OrderForm />
      </div>
    );
  }
}

export default Order;
