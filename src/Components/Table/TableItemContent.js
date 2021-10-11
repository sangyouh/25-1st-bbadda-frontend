import React, { Component } from 'react';

class TableItemContent extends Component {
  render() {
    const { info, qty, discount, price, size, product, Img } = this.props;
    return (
      <tr>
        <td className="ItemInfoTd">
          <div className="productInfo">
            <div className="productInfoImg">
              <img
                className="productInfoImgFile"
                alt="상품이미지"
                src=
        //  {Img}
                "https://static.mlb-korea.com/images/goods/thnail/m/20210111/32JB02111-50W-26348707389260177.png/dims/resize/100x100"
              />
            </div>
            <div className="productInfoText">
              <div className="productName">
                <p>
                  {/* {product} */}
                  커브 체인 팔찌 뉴욕양키스
                </p>
                <span className="productPrice">
                  {/* {price} */}
                  10,900원
                </span>
              </div>
              <div className="productOption">
                <span>
                  {/* {size} */}
                  INS/24
                </span>
              </div>
            </div>
          </div>
        </td>
        <td className="ItemInfoTd">{/* {qty} */}1</td>
        <td className="ItemInfoTd">{/* {discount} */}0 원</td>
        <td className="ItemInfoTd">
          <strong className="ItemPrice">
            {/* {price} */}
            10,900원
          </strong>
        </td>
      </tr>
    );
  }
}

export default TableItemContent;
