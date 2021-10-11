import React from 'react';
import './Carousel.scss';

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
    return (
      <>
        <div className="container">
          <div className="slide_wrap">
            <div className="slide_box">
              <div
                className="slide_list"
                style={{
                  transform: `translate3d(${
                    this.state.imageCurrentNo * -400
                  }px, 0px, 0px)`,
                }}
              >
                <div className="slide_content slide01">
                  <p>1</p>
                </div>
                <div className="slide_content slide02">
                  <p>2</p>
                </div>
                <div className="slide_content slide03">
                  <p>3</p>
                </div>
                <div className="slide_content slide04">
                  <p>4</p>
                </div>
                <div className="slide_content slide05">
                  <p>5</p>
                </div>
              </div>
            </div>
            <div className="slide_btn_box">
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
            </div>
            <ul className="slide_pagenation" onClick={() => {}}></ul>
          </div>
        </div>
      </>
    );
  }
}
