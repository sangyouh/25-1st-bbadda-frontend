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
    console.log(this.state);
    const { imageCurrentNo } = this.state;
    return (
      <>
        <div className="wapper">
          <div
            className="slide-container"
            style={{
              width: `${IMAGES_DATA.length * 100}vw`,
              transform: `translate3d(${imageCurrentNo * -100}vw, 0vw, 0vw)`,
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
                  <button
                    className={`${imageCurrentNo == id ? 'btnActive' : ''}`}
                    onClick={() => this.onChangeImage(id)}
                  >
                    {id}
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="slideBtn">
            <button
              className="prevBtn"
              onClick={() => {
                this.onChangeImage(imageCurrentNo - 1);
              }}
            >
              <span>
                <i className="fas fa-chevron-left" />
              </span>
              <span className="count">
                <span>{imageCurrentNo + 1}</span>
                <span style={{ margin: '0 5px' }}>/</span>
                <span>{IMAGES_DATA.length}</span>
              </span>
            </button>
            <button
              className="nextBtn"
              onClick={() => {
                this.onChangeImage(imageCurrentNo + 1);
              }}
            >
              <span>
                <i className="fas fa-chevron-right" />
              </span>
              <span className="count">
                <span>{imageCurrentNo + 1}</span>
                <span style={{ margin: '0 5px' }}>/</span>
                <span>{IMAGES_DATA.length}</span>
              </span>
            </button>
          </div>
        </div>
      </>
    );
  }
}
