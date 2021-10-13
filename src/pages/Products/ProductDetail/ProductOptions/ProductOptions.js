import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ProductInfos from './ProductInfos/ProductInfos';
import ColorOption from './ColorOption/ColorOption';
import SizeOption from './SizeOption/SizeOption';
import QuantityOption from './QuantityOption/QuantityOption';
import DeliverOption from './DeliverOption/DeliverOption';
import './ProductOptions.scss';

class ProductOptions extends React.Component {
  goToBuy = () => {
    this.props.history.push('/productsList');
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
          <SizeOption size={product.size} />
          <QuantityOption qantity={product.size} />
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

//export default ProductOptions;
export default withRouter(ProductOptions);
