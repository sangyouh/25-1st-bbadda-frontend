import React, { Component } from 'react';
import './SingleProduct.scss';

export class SingleProduct extends Component {
  render() {
    const { prodName, prodPrice, id } = this.props;
    return (
      <div className="SingleProduct">
        <div className="product-container">
          <img src={''} alt={`${prodName}`} />
          <h2>{prodName}</h2>
          <p>{prodPrice} WON</p>
        </div>
      </div>
    );
  }
}

export default SingleProduct;
