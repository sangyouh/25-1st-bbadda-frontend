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
            <Table tableClassName={'OrderTable'} colClassName={'JoinBasicCol'}>
              <TableContent trClassName={'orderTr'} tableHead={'주문하시는분'}>
                <Input className={'order'} />
                {/* <Button /> */}
              </TableContent>
              <TableContent trClassName={'orderTr'} tableHead={'휴대전화번호'}>
                <Input />-
                <Input />-
                <Input />
              </TableContent>
              <TableContent
                trClassName={'orderTr'}
                tableHead={'이메일 주소'}
              ></TableContent>
            </Table>
          </Wrap>
        </div>
      </div>
    );
  }
}

export default Order;
