import React, { Component } from 'react';
import './SingleProduct.scss';
import { Link } from 'react-router-dom';

export class SingleProduct extends Component {
  render() {
    const { prodName, prodPrice, imgURL, id } = this.props;
    return (
      <div className="SingleProduct">
        <div className="product-container">
          <Link to="/product/productdetail">
            <img src={`/images/ballcap${id}.jpg`} alt={`${prodName}`} />
          </Link>
          <h2>{prodName}</h2>
          <p>{prodPrice} KRW</p>
        </div>
      </div>
    );
  }
}

export default SingleProduct;
