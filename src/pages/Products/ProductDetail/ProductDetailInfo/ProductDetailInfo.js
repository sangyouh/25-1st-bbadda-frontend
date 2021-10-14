import React from 'react';
import { Link } from 'react-router-dom';
import './ProductDetailInfo.scss';

class ProductDetailInfo extends React.Component {
  render() {
    const { detailImgs } = this.props;
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
          {detailImgs.map((img, id) => {
            return (
              <img
                className="detailImg"
                alt="제품 사진"
                src={img.img_url}
                key={id}
              />
            );
          })}
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
