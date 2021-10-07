import React from 'react';
import { Link } from 'react-router-dom';
import ProductMainSlide from './ProductMainSlide/ProductMainSlide';
import ProductInfos from './ProductOptions/ProductInfos/ProductInfos';
import ColorOption from './ProductOptions/ColorOption/ColorOption';
import SizeOption from './ProductOptions/SizeOption/SizeOption';
import QuantityOption from './ProductOptions/QuantityOption/QuantityOption';
import DeliverOption from './ProductOptions/DeliverOption/DeliverOption';
import './ProductDetail.scss';

class ProductDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      ex: 'ss',
      products: [],
    };
  }

  componentDidMount() {
    fetch('/data/productDetailData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          products: data,
        });
      });
    console.log('컴디마는 됨!');
  }

  render() {
    console.log(this.state);
    return (
      <div className="productDetail">
        <div className="productVeiw">
          <div className="productImgSlideWrap">
            <ProductMainSlide />
          </div>
          {/* 오른 쪽!! */}
          <div className="productOptionWrap">
            <ProductInfos />

            {/* 옵션 선택!! */}
            <div className="selectOptions">
              <ColorOption />
              <SizeOption />
              <QuantityOption />
              <DeliverOption />
            </div>

            <div className="btnBuy">
              <Link to="#n" className="alarm">
                상품입고알림 신청
              </Link>
              <button className="buyNow">바로구매</button>
              <button className="">장바구니</button>
            </div>

            <div className="interactions">
              <a href="#productReview" className="gradeReview">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half"></i>
                <span className="blind">별점</span>
                <span className="countGrade"> (5)</span>
              </a>
              <div className="social">
                <Link to="#n" className="share">
                  <i className="fas fa-share-alt"></i>
                  <span className="blind">공유하기</span>
                </Link>
                <Link to="#n" className="like">
                  <i className="far fa-heart"></i>
                  <span className="blind">좋아요</span>
                </Link>
              </div>
            </div>

            <div className="productExp">도널드 덕 백 프린트 오버핏 티셔츠</div>
          </div>
        </div>

        <div id className="productDetailInfo">
          <ul className="detailMeue">
            <li>
              <a href="#detailContents" className="current">
                상품 정보
              </a>
            </li>
            <li>
              <a href="#productReview">상품 리뷰</a>
            </li>
            <li>
              <a href="#productNotice">상품 고시 정보</a>
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
      </div>
    );
  }
}

export default ProductDetail;
