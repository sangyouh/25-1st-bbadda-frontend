import React, { Component } from 'react';
import './SingleProduct.scss';
// import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

export class SingleProduct extends Component {
  goToPage = () => {
    this.props.history.push('/product/productdetail');
  };
  render() {
    const { productName, productPrice, imgURL, id } = this.props;
    return (
      <div className="SingleProduct">
        <div className="product-container">
          <Link to="/product/productdetail">
            <img src={`/images/doggo${id}.jpg`} alt={`${productName}`} />
          </Link>
          {/* <button onClick={this.goToPage}>
            <img src={`/images/ballcap${id}.jpg`} alt={`${productName}`} />
          </button> */}
          <h2>{productName}</h2>
          <p>{productPrice} KRW</p>
        </div>
      </div>
    );
  }
}

export default SingleProduct;
