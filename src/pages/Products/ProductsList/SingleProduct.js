import React, { Component } from 'react';
import './SingleProduct.scss';
import { withRouter } from 'react-router-dom';

export class SingleProduct extends Component {
  goToPage = () => {
    this.props.history.push(`/product/productdetail/${this.props.productId}`);
  };
  render() {
    const { productName, productPrice, imgURL } = this.props;
    return (
      <div className="SingleProduct">
        <div className="product-container">
          <button onClick={this.goToPage}>
            <img
              src={imgURL.image_url1}
              alt={`${productName}`}
              onMouseOver={e => (e.currentTarget.src = imgURL.image_url2)}
              onMouseOut={e => (e.currentTarget.src = imgURL.image_url1)}
            />
          </button>
          <h2>{productName}</h2>
          <p>{productPrice} KRW</p>
        </div>
      </div>
    );
  }
}

export default withRouter(SingleProduct);
