import React from 'react';
import ProductDetailSlide from './ProductDetailSlide/ProductDetailSlide';
import ProductOptions from './ProductOptions/ProductOptions';
import ProductDetailInfo from './ProductDetailInfo/ProductDetailInfo';
import './ProductDetail.scss';

class ProductDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      product: {
        img: [{}],
      },
    };
  }

  componentDidMount() {
    fetch('/data/productDetailData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          product: data.product,
        });
      });
  }

  render() {
    const { product } = this.state;
    console.log('state', product);
    return (
      <div className="ProductDetail">
        <div className="productVeiw">
          <ProductDetailSlide detailImgs={product.img} />
          <ProductOptions product={product} />
        </div>
        <ProductDetailInfo />
      </div>
    );
  }
}

export default ProductDetail;
