import React, { Component } from 'react';
import Location from '../../Components/Location/Location';
import OrderForm from './OrderForm/OrderForm';
import OrderItemInfo from './OrderItemInfo/OrderItemInfo';
import Wrap from '../../Components/Wrap/Wrap';
import Table from '../../Components/Table/Table';
import TableContent from '../../Components/Table/TableContent';
import Input from '../../Components/Input/Input';
import PhoneInput from '../../Components/PhoneInput/PhoneInput';
import CheckBox from '../../Components/CheckBox/CheckBox';
import SideBar from '../../Components/SideBar/SideBar';
import './Order.scss';

class Order extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: false,
      ordererInfo: false,
      payAgree: false,
      userData: {},
      address: '',
      orderer: '',
      receiver_name: '',
      userFirstNum: '010',
      userSecondNum: '',
      userThirdNum: '',
      receiverFirstNum: '010',
      receiverSecondNum: '',
      receiverThirdNum: '',
    };
  }

  handleInput = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleCheck = e => {
    const propertyName = e.target.name;
    this.setState({ [propertyName]: !this.state[propertyName] });
  };

  componentDidMount() {
    if (sessionStorage.AccessToken) {
      fetch('http://10.58.0.118:8000/orders/order', {
        method: 'GET',
        headers: {
          Authorization: sessionStorage.getItem('AccessToken'),
        },
      })
        .then(res => res.json())
        .then(({ User: userData }) => {
          this.setState({
            userData,
          });
        });
    } else if (localStorage.AccessToken) {
      fetch('http://10.58.0.165:8000/orders/order', {
        method: 'GET',
        headers: {
          Authorization: localStorage.getItem('AccessToken'),
        },
      })
        .then(res => res.json())
        .then(({ User: userData }) => {
          this.setState({
            userData,
          });
        });
    }
  }

  render() {
    const { handleInput, handleCheck } = this;
    const {
      payAgree,
      orderer,
      request,
      receiver_name,
      address,
      userFirstNum,
      userSecondNum,
      userThirdNum,
      receiverFirstNum,
      receiverSecondNum,
      receiverThirdNum,
    } = this.state;

    const {
      name,
      mobile_number,
      email,
      product,
      price,
      Img,
      quantity,
      value,
      type,
      allprice,
      point,
    } = this.state.userData;

    const user_mobile_number = `${userFirstNum}-${userSecondNum}-${userThirdNum}`;

    const receiver_mobile_number = `${receiverFirstNum}-${receiverSecondNum}-${receiverThirdNum}`;

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
              <OrderItemInfo
                quantity={quantity}
                price={price}
                allprice={allprice}
                value={value}
                product={product}
                Img={Img}
              />
            </Wrap>
            <Wrap
              className={'orderWriteArea'}
              titleClassName={'orderInfoTitle'}
              title="구매정보"
            >
              <Table
                tableClassName={'OrderTable'}
                colClassName={'JoinBasicCol'}
              >
                <TableContent tableHead={'포인트'} trClassName={'orderTr'}>
                  <input
                    className="halfInput"
                    name="point"
                    value={point}
                    disabled
                  />
                </TableContent>
                <TableContent tableHead={'결제금액'} trClassName={'orderTr'}>
                  <input className="halfInput" value={allprice} disabled />
                </TableContent>
                <TableContent tableHead={'남은 포인트'} trClassName={'orderTr'}>
                  <input className="halfInput" value={point - price} disabled />
                </TableContent>
              </Table>
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
                  <Input
                    className="halfInput"
                    name="orderer"
                    onChange={handleInput}
                  ></Input>
                  <CheckBox
                    name="userInfo"
                    onClick={handleCheck}
                    text="회원 정보와 동일"
                  />
                </TableContent>
                <TableContent
                  tableHead={'휴대전화번호'}
                  trClassName={'orderTr'}
                >
                  <PhoneInput
                    onChange={handleInput}
                    firstInputName="userFirstNum"
                    secondInputName="userSecondNum"
                    thirdInputName="userThirdNum"
                  />
                </TableContent>
                <TableContent tableHead={'이메일 주소'} trClassName={'orderTr'}>
                  <Input
                    className="halfInput"
                    name="email"
                    onChange={handleInput}
                  />
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
                  <Input
                    className="halfInput"
                    name="receiver_name"
                    onChange={handleInput}
                  />
                  <CheckBox
                    name="userInfo"
                    onClick={handleCheck}
                    text="주문 정보와 동일"
                  />
                </TableContent>
                <TableContent tableHead={'휴대전화번호'}>
                  <PhoneInput
                    onChange={handleInput}
                    firstInputName="receiverFirstNum"
                    secondInputName="receiverSecondNum"
                    thirdInputName="receiverThirdNum"
                  />
                </TableContent>
                <TableContent tableHead={'배송지주소'}>
                  <Input
                    className="basicInput"
                    name="address"
                    onChange={handleInput}
                  />
                </TableContent>
                <TableContent tableHead={'배송요청사항'}>
                  <Input
                    className="basicInput"
                    name="request"
                    onChange={handleInput}
                  />
                </TableContent>
              </Table>
            </Wrap>
          </div>
          <SideBar
            name={orderer}
            mobile_number={user_mobile_number}
            email={email}
            address={address}
            receiver_name={receiver_name}
            receiver_mobile_number={receiver_mobile_number}
            request={request}
            type={type}
            value={value}
            quantity={quantity}
            price={price}
            allprice={allprice}
            payAgree={payAgree}
            onClick={handleCheck}
          />
        </div>
      </div>
    );
  }
}

export default Order;
