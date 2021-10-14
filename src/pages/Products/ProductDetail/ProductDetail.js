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
        name: '',
        color: '',
        team: '',
        product_code: '',
        information: '',
        product_detail_info: '',
        img: [{}],
        size: [{}],
      },
    };
  }

  componentDidMount() {
    //fetch('http://172.30.1.51:8000/products/product/32CP57111-50L')
    //fetch('http://172.30.1.51:8000/products/product/${id}');
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
    // console.log('props', this.props);
    // console.log('디테일', this.state);
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
