import React from 'react';
import './ProductInfos.scss';

class ProductInfos extends React.Component {
  render() {
    return (
      <div className="productInfos">
        <h2 className="productName">
          필더 볼캡 뉴욕양키스 필더 볼캡 뉴욕양키스
        </h2>
        <p className="productCode">32CP9111</p>
        <p className="productPrice">39,000원</p>
        <div className="productMileage">
          <p>등급별 최대 6% 마일리지</p>
          <p>신규가입시 마일리지 1만원</p>
        </div>
      </div>
    );
  }
}

export default ProductInfos;
