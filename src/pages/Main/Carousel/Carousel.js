import React from 'react';
import './Carousel.scss';

export default class Carousel extends React.Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="slide_wrap">
            <div className="slide_box">
              <div className="slide_list clearfix">
                <div className="slide_content slide01">
                  <p>1</p>
                </div>
                <div className="slide_content slide02">
                  <p>2</p>
                </div>
              </div>
            </div>
            <div className="slide_btn_box">
              <button
                type="button"
                className="slide_btn_prev"
                onClick={() => {}}
              >
                Prev
              </button>
              <button
                type="button"
                className="slide_btn_next"
                onClick={() => {}}
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
