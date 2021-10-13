import React from 'react';
import './ProductInfos.scss';

class ProductInfos extends React.Component {
  render() {
    const { name, productCode, productPrice } = this.props;
    return (
      <div className="ProductInfos">
        <h2 className="productName">{name}</h2>
        <p className="productCode">{productCode}</p>
        <p className="productPrice">{productPrice}</p>
        <div className="productMileage">
          <p className="mileage">등급별 최대 6% 마일리지</p>
          <p className="mileage">신규가입시 마일리지 1만원</p>
        </div>
      </div>
    );
  }
}

export default ProductInfos;
