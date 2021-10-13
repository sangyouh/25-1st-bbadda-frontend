import React from 'react';
import { Link } from 'react-router-dom';
import './ProductDetailInfo.scss';

class ProductDetailInfo extends React.Component {
  render() {
    return (
      <div className="ProductDetailInfo">
        <ul className="detailTab">
          <li>
            <Link to="#detailContents" className="current">
              상품 정보
            </Link>
          </li>
          <li>
            <Link to="#productReview">상품 리뷰</Link>
          </li>
          <li>
            <Link to="#productNotice">상품 고시 정보</Link>
          </li>
        </ul>
        <section id="detailContents" className="detailContents">
          <p>상품 상세 정보들</p>
          <img alt="상세페이지" src="/images/productDetail/cap01.jpeg" />
        </section>
        <section id="productReview" className="productReview">
          <h3>상품 리뷰</h3>
        </section>
        <section id="productNotice" className="productNotice">
          <h3>상품 세부 정보</h3>
        </section>
      </div>
    );
  }
}

export default ProductDetailInfo;
