import React, { Component } from 'react';

class TableItemContent extends Component {
  render() {
    const { quantity, price, allprice, value, product, Img } = this.props;
    return (
      <tr>
        <td className="ItemInfoTd">
          <div className="productInfo">
            <div className="productInfoImg">
              <img className="productInfoImgFile" alt="상품이미지" src={Img} />
            </div>
            <div className="productInfoText">
              <div className="productName">
                <p>{product}</p>
                <span className="productPrice">{price}원</span>
              </div>
              <div className="productOption">
                <span>{value}</span>
              </div>
            </div>
          </div>
        </td>
        <td className="ItemInfoTd">{quantity}</td>
        <td className="ItemInfoTd">0원</td>
        <td className="ItemInfoTd">
          <strong className="ItemPrice">{allprice}원</strong>
        </td>
      </tr>
    );
  }
}

export default TableItemContent;
