import React from 'react';
import './Carousel.scss';

export default class Carousel extends React.Component {
  constructor() {
    super();
    this.state = {
      currIndex: 0,
    };
  }

  onChangeImage = index => {
    if (this.props.images.length <= index) {
      index = 0;
    } else if (index < 0) {
      index = this.props.images.length - 1;
    }

    this.setState({ currIndex: index });
  };

  render() {
    const { currIndex } = this.state;
    const { images } = this.props;
    return (
      <>
        <div className="MainCarouselWapper">
          <div
            className="slideContainer"
            style={{
              width: `${images.length * 100}vw`,
              transform: `translateX(${currIndex * -100}vw)`,
            }}
          >
            {images.map(({ id, url }) => {
              return (
                <div className="slideBox" key={id}>
                  <div
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
            {images.map(({ id }) => {
              return (
                <li key={id}>
                  <button
                    className={`${currIndex === id ? 'btnActive' : ''}`}
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
                this.onChangeImage(currIndex - 1);
              }}
            >
              <span>
                <i className="fas fa-chevron-left" />
              </span>
              <span className="count">
                <span>{currIndex + 1}</span>
                <span style={{ margin: '0 5px' }}>/</span>
                <span>{images.length}</span>
              </span>
            </button>
            <button
              className="nextBtn"
              onClick={() => {
                this.onChangeImage(currIndex + 1);
              }}
            >
              <span>
                <i className="fas fa-chevron-right" />
              </span>
              <span className="count">
                <span>{currIndex + 1}</span>
                <span style={{ margin: '0 5px' }}>/</span>
                <span>{images.length}</span>
              </span>
            </button>
          </div>
        </div>
      </>
    );
  }
}
