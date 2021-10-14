import React, { Component } from 'react';

class TableItemContent extends Component {
  render() {
    const { quantity, price, value, product, Img } = this.props;
    return (
      <tr>
        <td className="ItemInfoTd">
          <div className="productInfo">
            <div className="productInfoImg">
              <img className="productInfoImgFile" alt="상품이미지" src={Img} />
            </div>
            <div className="productInfoText">
              <div className="productName">
                <p>
                  {product}
                  커브 체인 팔찌 뉴욕양키스
                </p>
                <span className="productPrice">
                  {price}
                  10,900원
                </span>
              </div>
              <div className="productOption">
                <span>
                  {value}
                  INS/24
                </span>
              </div>
            </div>
          </div>
        </td>
        <td className="ItemInfoTd">{quantity}1</td>
        <td className="ItemInfoTd">0 원</td>
        <td className="ItemInfoTd">
          <strong className="ItemPrice">
            {price}
            10,900원
          </strong>
        </td>
      </tr>
    );
  }
}

export default TableItemContent;
