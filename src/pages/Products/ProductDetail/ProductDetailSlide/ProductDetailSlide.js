import React from 'react';
import { Link } from 'react-router-dom';
import './ProductDetailSlide.scss';

class ProductDetailSlide extends React.Component {
  constructor() {
    super();
    this.state = {
      currentIndex: 0,
    };
  }

  onChangeImage = index => {
    this.setState({
      currentIndex: index,
    });
  };

  render() {
    const { detailImgs } = this.props;
    const { currentIndex } = this.state;
    return (
      <div className="ProductDetailSlide">
        <div className="productMainSlide">
          <div className="currentImage">
            <ul
              className="productImageList"
              ref={this.slideImages}
              style={{
                width: `${detailImgs.length * 800}px`,
                transform: `translateX(${currentIndex * -800}px)`,
              }}
            >
              {detailImgs.map((img, id) => {
                return (
                  <li className="productImage" key={id}>
                    <Link to="#n">
                      <img alt="제품 사진" src={img.img_url} />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <button
            className="btnControl btnPrev"
            disabled={currentIndex === 0}
            onClick={() => {
              this.onChangeImage(currentIndex - 1);
            }}
          >
            <i
              className={`fas fa-chevron-left ${
                currentIndex === 0 ? 'inactiveArrow' : ''
              }`}
            />
            <span className="blind">이전</span>
          </button>
          <button
            className="btnControl btnNext"
            disabled={currentIndex === detailImgs.length - 1}
            onClick={() => {
              this.onChangeImage(currentIndex + 1);
            }}
          >
            <i
              className={`fas fa-chevron-right ${
                currentIndex === detailImgs.length - 1 ? 'inactiveArrow' : ''
              }`}
            />
            <span className="blind">다음</span>
          </button>
        </div>
        <div className="slideBtn">
          <ul className="carousel">
            {detailImgs.map((img, id) => {
              return (
                <button key={id} onClick={() => this.onChangeImage(id)}>
                  <img alt="제품 사진" src={img.img_url} />
                </button>
              );
            })}
            <div
              className="thumBox"
              style={{
                left: `${98 + currentIndex * 76}px`,
              }}
            ></div>
            <div
              className="currentThumbsImage"
              onChangeImage={this.onChangeImage}
            ></div>
          </ul>

          <button
            href="#n"
            className="btnControl btnPrev"
            disabled={currentIndex === 0}
            onClick={() => {
              this.onChangeImage(currentIndex - 1);
            }}
          >
            <i
              className={`fas fa-chevron-left ${
                currentIndex === 0 ? 'inactiveArrow' : ''
              }`}
            />
            <span className="blind">이전</span>
          </button>
          <button
            href="#n"
            className="btnControl btnNext"
            disabled={currentIndex === detailImgs.length - 1}
            onClick={() => {
              this.onChangeImage(currentIndex + 1);
            }}
          >
            <i
              className={`fas fa-chevron-right ${
                currentIndex === detailImgs.length - 1 ? 'inactiveArrow' : ''
              }`}
            />
          </button>
        </div>
      </div>
    );
  }
}

export default ProductDetailSlide;
