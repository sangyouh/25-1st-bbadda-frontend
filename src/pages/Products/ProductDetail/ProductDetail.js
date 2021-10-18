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

  // componentDidMount() {
  //   const productId = this.props.match.params.id;
  //   fetch(`http://10.58.0.118:8000/products/product?id=${productId}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({
  //         product: data.result,
  //       });
  //     });
  // }

  render() {
    const { product } = this.state;
    return (
      <div className="ProductDetail">
        <div className="productVeiw">
          <ProductDetailSlide detailImgs={product.img} />
          <ProductOptions product={product} />
        </div>
        <ProductDetailInfo detailImgs={product.img} />
      </div>
    );
  }
}

export default ProductDetail;
