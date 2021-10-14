import React, { Component } from 'react';
import OrderForm from './OrderForm/OrderForm';
import OrderItemInfo from './OrderItemInfo/OrderItemInfo';
import Location from '../../Components/Location/Location';
import Wrap from '../../Components/Wrap/Wrap';
import Table from '../../Components/Table/Table';
import TableContent from '../../Components/Table/TableContent';
import NumberInput from '../../Components/NumberInput/NumberInput';
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
      userData: {
        name: 'kich',
        mobile_num: '01041560647',
        email: 'kich555@kakao.com',
      },
      order: '',
      receiver: '',
    };
  }

  handleInput = e => {
    const { value, name } = e.target;

    this.setState({
      [name]: value,
    });
  };

  checkUserInfo = e => {
    const { userInfo, userData } = this.state;
    this.setState({ userInfo: !userInfo }, () => {
      userInfo
        ? this.setState({ order: userData.name })
        : this.setState({ order: '' });
    });
  };

  checkOrdererInfo = e => {
    const { ordererInfo } = this.state;
    this.setState({ ordererInfo: !ordererInfo });
  };

  checkPayAgreeInfo = e => {
    const { payAgree } = this.state;
    this.setState({ payAgree: !payAgree });
  };

  // componentDidMount() {
  //   fetch('http://10.58.5.165:8000/orders/order', {
  //     method: 'GET',
  //     headers: {
  //       Authorization: localStorage.getItem('AccessToken'),
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(({ User: userData }) => {
  //       this.setState({
  //         userData,
  //       });
  //     });
  // }

  handleChange = e => {};
  render() {
    const { checkUserInfo, checkOrdererInfo, checkPayAgreeInfo, handleInput } =
      this;
    // console.log('token', localStorage.AccessToken);
    console.log('userData', this.state.userData);
    // console.log('userData', typeof this.state.userData.User);
    console.log('userInfo', this.state.userInfo);
    // console.log('ordererInfo', this.state.ordererInfo);
    // console.log('payAgree', this.state.payAgree);
    console.log('order', this.state.order);
    // console.log('receiver', this.state.receiver);
    // console.log('mobile', this.state.userData.mobile_num);
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
                  <List
                    data={ORDER_LIST.orderer}
                    onClick={checkUserInfo}
                    onChange={handleInput}
                  />
                </TableContent>
                <TableContent
                  tableHead={'휴대전화번호'}
                  trClassName={'orderTr'}
                >
                  {/* <List data={MOBILE_NUM} /> */}
                  <NumberInput
                    firstNum="firstNum"
                    secondNum="secondNum"
                    thirdNum="thirdNum"
                    onChange={handleInput}
                    None=""
                  />
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
                  <List
                    data={ORDER_LIST.receiver}
                    onClick={checkOrdererInfo}
                    onChange={handleInput}
                  />
                </TableContent>
                <TableContent tableHead={'휴대전화번호'}>
                  <NumberInput
                    firstNum="firstNum"
                    secondNum="secondNum"
                    thirdNum="thirdNum"
                    onChange={handleInput}
                    None=""
                  />
                </TableContent>
                <TableContent tableHead={'배송지주소'}>
                  <Input className="halfInput" />
                </TableContent>
              </Table>
            </Wrap>
            {/* asdfa */}
          </div>
          <SideBar onClick={checkPayAgreeInfo} />
        </div>
      </div>
    );
  }
}

export default Order;
