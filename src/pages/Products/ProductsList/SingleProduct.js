import React, { Component } from 'react';
import './SingleProduct.scss';
import { Link } from 'react-router-dom';

export class SingleProduct extends Component {
  render() {
    const { productName, productPrice, imgURL, id } = this.props;
    return (
      <div className="SingleProduct">
        <div className="product-container">
          <Link to="/product/productdetail">
            <img src={`/images/ballcap${id}.jpg`} alt={`${productName}`} />
          </Link>
          <h2>{productName}</h2>
          <p>{productPrice} KRW</p>
        </div>
      </div>
    );
  }
}

export default SingleProduct;
