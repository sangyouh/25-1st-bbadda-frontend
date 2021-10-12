import React, { Component } from 'react';
import OrderForm from './OrderForm/OrderForm';
import OrderItemInfo from './OrderItemInfo/OrderItemInfo';
import Location from '../../Components/Location/Location';
import Wrap from '../../Components/Wrap/Wrap';
import Table from '../../Components/Table/Table';
import TableContent from '../../Components/Table/TableContent';
import './Order.scss';
import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input';
import List from '../../Components/List/List';
import ORDER_LIST from '../../data/OrderListData';

class Order extends Component {
  constructor() {
    super();
    this.state = {
      sameInfo: false,
    };
  }
  handleToggle = e => {
    const { sameInfo } = this.state;
    this.setState({ sameInfo: !sameInfo });
  };
  render() {
    const { handleToggle } = this;
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
              <TableContent tableHead={'주문하시는분'}>
                <List data={ORDER_LIST.order} onClick={handleToggle} />

                {/* <Button /> */}
              </TableContent>
              <TableContent tableHead={'휴대전화번호'}>
                <Input className={'mobileNumFirst'} />
                <span className="hyphen">-</span>
                <Input className={'mobileNum'} />
                <span className="hyphen">-</span>
                <Input className={'mobileNum'} />
              </TableContent>
              <TableContent tableHead={'이메일 주소'}></TableContent>
            </Table>
          </Wrap>
        </div>
      </div>
    );
  }
}

export default Order;
