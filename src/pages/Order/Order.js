import React, { Component } from 'react';
import OrderForm from './OrderForm/OrderForm';
import OrderItemInfo from './OrderItemInfo/OrderItemInfo';
import Location from '../../Components/Location/Location';
import Wrap from '../../Components/Wrap/Wrap';
import Table from '../../Components/Table/Table';
import TableContent from '../../Components/Table/TableContent';
import Input from '../../Components/Input/Input';
import List from '../../Components/List/List';
import SideBar from '../../Components/SideBar/SideBar';
import ORDER_LIST from '../../data/OrderListData';
import MOBILE_NUM from '../../data/MobileNumList';
import './Order.scss';

class Order extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: false,
      ordererInfo: false,
      payAgree: false,
    };
  }
  checkUserInfo = e => {
    const { userInfo } = this.state;
    this.setState({ userInfo: !userInfo });
  };

  checkOrdererInfo = e => {
    const { ordererInfo } = this.state;
    this.setState({ ordererInfo: !ordererInfo });
  };

  checkPayAgreeInfo = e => {
    const { payAgree } = this.state;
    this.setState({ payAgree: !payAgree });
  };

  handleChange = e => {};
  render() {
    const { checkUserInfo, checkOrdererInfo, checkPayAgreeInfo } = this;
    console.log('userInfo', this.state.userInfo);
    console.log('ordererInfo', this.state.ordererInfo);
    console.log('payAgree', this.state.payAgree);
    return (
      <div className="Order">
        <Location page={'주문결제'} />
        <OrderForm />

        <div className="orderInfo">
          <div>
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
                tableClassName={'OrderTable'}
                colClassName={'JoinBasicCol'}
              >
                <TableContent
                  tableHead={'주문하시는분'}
                  trClassName={'orderTr'}
                >
                  <List data={ORDER_LIST.orderer} onClick={checkUserInfo} />
                </TableContent>
                <TableContent
                  tableHead={'휴대전화번호'}
                  trClassName={'orderTr'}
                >
                  <List data={MOBILE_NUM} />
                </TableContent>
                <TableContent tableHead={'이메일 주소'} trClassName={'orderTr'}>
                  <Input className="halfInput" />
                </TableContent>
              </Table>
            </Wrap>
            <Wrap
              className={'orderWriteArea'}
              titleClassName={'orderInfoTitle'}
              title={'배송지 정보'}
            >
              <Table
                tableClassName={'OrderTable'}
                colClassName={'JoinBasicCol'}
              >
                <TableContent tableHead={'받는분'}>
                  <List data={ORDER_LIST.receiver} onClick={checkOrdererInfo} />
                </TableContent>
                <TableContent tableHead={'휴대전화번호'}>
                  <List data={MOBILE_NUM} />
                </TableContent>
                <TableContent tableHead={'배송지주소'}>
                  <Input className="halfInput" />
                </TableContent>
              </Table>
            </Wrap>
          </div>
          <SideBar onClick={checkPayAgreeInfo} />
        </div>
      </div>
    );
  }
}

export default Order;
