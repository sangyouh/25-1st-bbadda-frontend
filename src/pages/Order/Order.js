import React, { Component } from 'react';
import OrderForm from './OrderForm/OrderForm';
import OrderItemInfo from './OrderItemInfo/OrderItemInfo';
import Location from '../../Components/Location/Location';
import Wrap from '../../Components/Wrap/Wrap';
import Table from '../../Components/Table/Table';
import TableContent from '../../Components/Table/TableContent';
import NumberInput from '../../Components/BirthdayInput/BirthdayInput';
import Input from '../../Components/Input/Input';
import CheckBox from '../../Components/CheckBox/CheckBox';
import List from '../../Components/List/List';
import SideBar from '../../Components/SideBar/SideBar';
import ORDER_LIST from '../../data/OrderListData';
import MOBILE_NUM from '../../data/MobileNumList';
import './Order.scss';
import PhoneInput from '../../Components/PhoneInput/PhoneInput';

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
      point: '1,000,000',
      adress: '',
      orderer: '',
      receiver: '',
      email: '',
      firstNum: '010',
      secondNum: '',
      thirdNum: '',
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

  // checkUserInfo = e => {
  //   const { userInfo, userData } = this.state;
  //   this.setState({ userInfo: !userInfo }, () => {
  //     userInfo
  //       ? this.setState({ order: userData.name })
  //       : this.setState({ order: '' });
  //   });
  // };

  // componentDidMount() {
  //   fetch('http://10.58.0.165:8000/orders/order?code=abv123', {
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

  render() {
    // const mobile_number = `${firstNum}-${secondNum}-${thirdNum}`;
    const { handleInput, handleCheck } = this;
    const {
      point,
      quantity,
      price,
      value,
      product,
      Img,
      type,
      request,
      receiver_mobile_number,
      receiver_name,
      address,
      email,
      name,
      firstNum,
      secondNum,
      thirdNum,
      payAgree,
      userInfo,
    } = this.state;

    console.log('mobile', firstNum);
    console.log('mobile2', secondNum);
    console.log('mobile3', thirdNum);
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
                  <PhoneInput onChange={handleInput} />
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
                  <Input
                    className="halfInput"
                    name="receiver"
                    onChange={handleInput}
                  />
                  <CheckBox
                    name="userInfo"
                    onClick={handleCheck}
                    text="주문 정보와 동일"
                  />
                </TableContent>
                <TableContent tableHead={'휴대전화번호'}>
                  <PhoneInput onChange={handleInput} />
                </TableContent>
                <TableContent tableHead={'배송지주소'}>
                  <Input className="basicInput" name="address" />
                </TableContent>
              </Table>
            </Wrap>
          </div>
          <SideBar
            name={name}
            // mobile_number={mobile_number}
            email={email}
            address={address}
            receiver_name={receiver_name}
            receiver_mobile_number={receiver_mobile_number}
            request={request}
            type={type}
            value={value}
            quantity={quantity}
            onClick={handleCheck}
            payAgree={payAgree}
          />
        </div>
      </div>
    );
  }
}

export default Order;
