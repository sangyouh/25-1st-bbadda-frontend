import React, { Component } from 'react';
import Location from '../Login/Location/../../../Components/Location/Location';
import './Order.scss';

class Order extends Component {
  render() {
    return (
      <div className="order">
        <Location page="주문" />
      </div>
    );
  }
}

export default Order;
