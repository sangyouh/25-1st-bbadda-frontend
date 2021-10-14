import React, { Component } from 'react';
import './SingleProduct.scss';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

export class SingleProduct extends Component {
  // goToPage = () => {
  //   this.props.history.push(`/product/productdetail/1`);
  // };
  render() {
    const { productName, productPrice, imgURL, id } = this.props;
    return (
      <div className="SingleProduct">
        <div className="product-container">
          <Link
            to="/product/productdetail/1"
            // onClick={this.goToPage}
          >
            {/* <img
              src={`/images/doggo${id}.jpg`}
              alt={`${productName}`}
              onMouseOver={e =>
                (e.currentTarget.src = `/images/mouseover${id}.jpg`)
              }
              onMouseOut={e => (e.currentTarget.src = `/images/doggo${id}.jpg`)}
            /> */}
            <img src={imgURL} />
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

export default withRouter(SingleProduct);
