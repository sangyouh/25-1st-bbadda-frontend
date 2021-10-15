import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ProductInfos from './ProductInfos/ProductInfos';
import ColorOption from './ColorOption/ColorOption';
import SizeOption from './SizeOption/SizeOption';
import QuantityOption from './QuantityOption/QuantityOption';
import DeliverOption from './DeliverOption/DeliverOption';
import './ProductOptions.scss';

class ProductOptions extends React.Component {
  constructor() {
    super();
    this.state = {
      selected_size_type: '',
      selected_size_value: '',
      selected_quantity: 1,
    };
  }

  goToBuy = () => {
    fetch('http://10.58.0.118:8000/orders/orderitem', {
      method: 'POST',
      headers: {
        Authorization: sessionStorage.getItem('AccessToken'),
      },
      body: JSON.stringify({
        product_code: this.props.product.product_code,
        size_type: this.props.product.size[0].type,
        selected_size_value: this.state.selected_size_value,
        selected_quantity: this.state.selected_quantity,
      }),
    });
    setTimeout(() => {
      this.props.history.push('/order');
    }, 500);
  };

  setSelectedSizeValue = sizeInfo => {
    this.setState({
      selected_size_value: sizeInfo.value,
    });
  };

  setSelectedSizeQuantity = amount => {
    this.setState({
      selected_quantity: amount + 1,
    });
  };

  render() {
    const { product } = this.props;
    return (
      <div className="ProductOptions">
        <div className="productOptionWrap">
          <ProductInfos
            name={product.name}
            productCode={product.product_code}
            productPrice={product.price}
          />
          <ColorOption color={product.img} />
          <SizeOption
            size={product.size}
            setSelectedSizeValue={this.setSelectedSizeValue}
          />
          <QuantityOption
            qantity={product.size}
            setSelectedSizeQuantity={this.setSelectedSizeQuantity}
          />
          <DeliverOption />

          <div className="btnBuy">
            <Link to="#n" className="alarm">
              상품입고알림 신청
            </Link>
            <button className="buyNow" onClick={this.goToBuy}>
              바로구매
            </button>
            <button className="cart">장바구니</button>
          </div>

          <div className="interactions">
            <a href="#productReview" className="gradeReview">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half" />
              <span className="blind">별점</span>
              <span className="countGrade"> (2.5)</span>
            </a>
            <div className="social">
              <Link to="#n" className="share">
                <i className="fas fa-share-alt" />
                <span className="blind">공유하기</span>
              </Link>
              <Link to="#n" className="like">
                <i className="far fa-heart" />
                <span className="blind">좋아요</span>
              </Link>
            </div>
          </div>

          <div className="productExp">도널드 덕 백 프린트 오버핏 티셔츠</div>
        </div>
      </div>
    );
  }
}

export default withRouter(ProductOptions);
