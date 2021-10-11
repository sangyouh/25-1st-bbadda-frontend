import React, { Component } from 'react';
import Location from '../../Components/Location/Location';
import Wrap from '../../Components/Wrap/Wrap';
import Table from '../../Components/Table/Table';
import TableContent from '../../Components/Table/TableContent';
import OrderForm from './OrderForm/OrderForm';
import './Order.scss';
import OrderItemInfo from './OrderItemInfo/OrderItemInfo';
import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input';

class Order extends Component {
  render() {
    return (
      <div className="Order">
        <Location page={'주문결제'} />
        <OrderForm />
        <div className="orderInfo">
          <Wrap
            className={'orderWriteArea'}
            titleClassName={'orderInfoTitle'}
            title={'주문상품정보'}
          >
            <OrderItemInfo />
          </Wrap>
          <Wrap
            className={'orderWriteArea'}
            titleClassName={'orderInfoTitle'}
            title={'주문자정보'}
          >
            <Table
              tableClassName={'JoinBasicTable'}
              colClassName={'JoinBasicCol'}
            >
              <TableContent tableHead={'주문하시는분'}>
                <Input />
                {/* <Button /> */}
              </TableContent>
              <TableContent>
                <Input />
                <Input />
                <Input />
              </TableContent>
              <TableContent></TableContent>
            </Table>
          </Wrap>
        </div>
      </div>
    );
  }
}

export default Order;
