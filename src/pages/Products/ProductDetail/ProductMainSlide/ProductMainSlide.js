import React from 'react';
import { Link } from 'react-router-dom';
import './ProductMainSlide.scss';

class ProductMainSlide extends React.Component {
  render() {
    return (
      <>
        <div className="productMainSlide">
          <ul className="productImages">
            <li>
              <img alt="모자1" src="/images/productDetail/cap01.jpeg" />
            </li>
          </ul>
          <button href="#n" className="btnControl btnPrev">
            <i className="fas fa-chevron-left"></i>
            <span className="blind">이전</span>
          </button>
          <button href="#n" className="btnControl btnNext">
            <i className="fas fa-chevron-right"></i>
            <span className="blind">다음</span>
          </button>
        </div>
        <div className="productSubSlide">
          <ul className="thumbImages">
            <li>
              <Link to="#n">
                <img alt="모자1" src="/images/productDetail/cap01.jpeg" />
              </Link>
            </li>
            <li>
              <Link to="#n">
                <img alt="모자1" src="/images/productDetail/cap01.jpeg" />
              </Link>
            </li>
            <li>
              <Link to="#n">
                <img alt="모자1" src="/images/productDetail/cap01.jpeg" />
              </Link>
            </li>
            <li>
              <Link to="#n">
                <img alt="모자1" src="/images/productDetail/cap01.jpeg" />
              </Link>
            </li>
            <li>
              <Link to="#n">
                <img alt="모자1" src="/images/productDetail/cap01.jpeg" />
              </Link>
            </li>
          </ul>
          <div className="currentImages"></div>
          <button href="#n" className="btnControl btnPrev">
            <i className="fas fa-chevron-left"></i>
            <span className="blind">이전</span>
          </button>
          <button href="#n" className="btnControl btnNext">
            <i className="fas fa-chevron-right"></i>
            <span className="blind">다음</span>
          </button>
        </div>
      </>
    );
  }
}

export default ProductMainSlide;
