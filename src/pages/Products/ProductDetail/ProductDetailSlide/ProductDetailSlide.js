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
    if (this.props.detailImgs.length <= index) index = 0;
    if (index < 0) index = this.props.detailImgs.length - 1;

    this.setState({
      currentIndex: index,
    });
  };
  onChangeCurrent = index => {
    this.setState({
      currentIndex: index,
    });
  };

  slideImagePrev = () => {
    console.log('click prev');
  };

  slideImageNext = () => {
    console.log('click next');
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
            onClick={() => {
              this.onChangeImage(currentIndex - 1);
            }}
          >
            <i className="fas fa-chevron-left" />
            <span className="blind">이전</span>
          </button>
          <button
            className="btnControl btnNext"
            onClick={() => {
              this.onChangeImage(currentIndex + 1);
            }}
          >
            <i className="fas fa-chevron-right" />
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
          </ul>
          <div
            className="currentThumbsImage"
            onChangeImage={this.onChangeImage}
          ></div>
          <button
            href="#n"
            className="btnControl btnPrev"
            onClick={() => {
              this.onChangeImage(currentIndex - 1);
            }}
          >
            <i className="fas fa-chevron-left" />
            <span className="blind">이전</span>
          </button>
          <button
            href="#n"
            className="btnControl btnNext"
            onClick={() => {
              this.onChangeImage(currentIndex + 1);
            }}
          >
            <i className="fas fa-chevron-right" />
          </button>
        </div>
      </div>
    );
  }
}

export default ProductDetailSlide;
