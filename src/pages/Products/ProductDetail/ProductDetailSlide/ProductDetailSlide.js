import React from 'react';
import { Link } from 'react-router-dom';
import './ProductDetailSlide.scss';

class ProductDetailSlide extends React.Component {
  render() {
    const { detailImgs } = this.props;
    return (
      <div className="ProductDetailSlide">
        <div className="productMainSlide">
          <div className="currentImage">
            <ul className="productImageList">
              {detailImgs.map((img, i) => {
                return (
                  <li className="productImage" key={i}>
                    <Link to="#n">
                      <img alt="제품 사진" src={img.img_url} />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <button className="btnControl btnPrev">
            <i className="fas fa-chevron-left" />
            <span className="blind">이전</span>
          </button>
          <button className="btnControl btnNext">
            <i className="fas fa-chevron-right" />
            <span className="blind">다음</span>
          </button>
        </div>
        <div className="productSubSlide">
          <ul className="carousel">
            {detailImgs.map((img, i) => {
              return (
                <li key={i}>
                  <Link to="#n">
                    <img alt="제품 사진" src={img.img_url} />
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="currentImages"></div>
          <button href="#n" className="btnControl btnPrev">
            <i className="fas fa-chevron-left" />
            <span className="blind">이전</span>
          </button>
          <button href="#n" className="btnControl btnNext">
            <i className="fas fa-chevron-right" />
          </button>
        </div>
      </div>
    );
  }
}

export default ProductDetailSlide;
