import React from 'react';
import { Link } from 'react-router-dom';
import './Carousel.scss';
import IMAGES_DATA from './Image_Data';

export default class Carousel extends React.Component {
  constructor() {
    super();
    this.state = {
      imageCurrentNo: 0,
    };
  }

  onChangeImage = index => {
    if (this.props.images.length <= index) index = 0;
    if (index < 0) index = this.props.images.length - 1;

    this.setState({ imageCurrentNo: index });
  };

  render() {
    return (
      <>
        <div className="wapper">
          <div
            className="slide-container"
            style={{
              width: `${IMAGES_DATA.length * 100}vw`,
              transform: `translate3d(${
                this.state.imageCurrentNo * -100
              }vw, 0vw, 0vw)`,
            }}
          >
            {IMAGES_DATA.map(({ id, url }) => {
              return (
                <div className="slide-box">
                  <div
                    key={id}
                    className="img"
                    style={{
                      background: `url(${url}) no-repeat center`,
                      backgroundSize: 'cover',
                    }}
                  />
                </div>
              );
            })}
          </div>
          <ul className="dots">
            {IMAGES_DATA.map(({ id }) => {
              return (
                <li>
                  <button onClick={() => this.onChangeImage(id)}>{id}</button>
                </li>
              );
            })}
          </ul>
          <div className="slideBtn">
            <i class="fas fa-chevron-left"></i>
            <sapn></sapn>
          </div>
        </div>
        <button
          type="button"
          className="slide_btn_prev"
          onClick={() => {
            this.onChangeImage(this.state.imageCurrentNo - 1);
          }}
        >
          Prev
        </button>
        <button
          type="button"
          className="slide_btn_next"
          onClick={() => {
            this.onChangeImage(this.state.imageCurrentNo + 1);
          }}
        >
          Next
        </button>
      </>
    );
  }
}
