import React, { Component } from 'react';
import TableItemContent from '../../../Components/Table/TableItemContent';
import './OrderItemInfo.scss';

class OrderItemInfo extends Component {
  render() {
    const { quantity, price, allprice, value, product, Img } = this.props;
    return (
      <table className="OrderTable">
        <colgroup>
          <col />
          <col style={{ width: '110px' }} />
          <col style={{ width: '110px' }} />
          <col style={{ width: '110px' }} />
        </colgroup>
        <thead>
          <tr>
            <th className="ItemInfoTh" scope="col">
              상품정보
            </th>
            <th className="ItemInfoTh" scope="col">
              수량
            </th>
            <th className="ItemInfoTh" scope="col">
              할인/혜택
            </th>
            <th className="ItemInfoTh" scope="col">
              주문금액
            </th>
          </tr>
        </thead>
        <tbody className="ItemInfo">
          <TableItemContent
            quantity={quantity}
            price={price}
            allprice={allprice}
            value={value}
            product={product}
            Img={Img}
          />
        </tbody>
        <tfoot>
          <tr className="ItemInfoFoodTr">
            <td colSpan="4" className="ItemInfoFootTd">
              <strong className="diliveryPrice">배송비</strong>
              <em className="diliveryFree">무료</em>
            </td>
          </tr>
        </tfoot>
      </table>
    );
  }
}

export default OrderItemInfo;
