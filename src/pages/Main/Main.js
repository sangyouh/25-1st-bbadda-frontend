import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Carousel from './Carousel/Carousel';
import './Main.scss';

import IMAGES_DATA from './Carousel/Image_Data';

class Main extends Component {
  render() {
    return (
      <main className="MainWrapper">
        <Carousel images={IMAGES_DATA} />
        <div className="newArrival">
          <div className="wrapper">
            <div className="header">NEW ARRIVAL</div>
            <div className="content">
              <div className="newArrivalBanner">
                <Link to="#">
                  <img src="https://static.mlb-korea.com/images/display/category/MTP/A01/A01/contents/10113_6809_111_KOR_20211005143759.jpg" />
                </Link>
              </div>
              <div className="newArrivalList">
                <ul className="itemsList">
                  <li>
                    {/* 이 부분 fetch와 map 메소드로 구현하자. */}
                    <div className="item">
                      <Link to="#">
                        <div className="itemImg">
                          <img src="https://static.mlb-korea.com/images/goods/thnail/m/20210903/3ACBB0216-07CGS-46668835721737915.png/dims/resize/414x414" />
                        </div>
                        <div className="itemName">펠트 헌팅캡 LA다저스</div>
                        <div className="itemPrice">79,000원</div>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <Link to="#">
                        <div className="itemImg">
                          <img src="https://static.mlb-korea.com/images/goods/thnail/m/20210903/3ACBB0216-07CGS-46668835721737915.png/dims/resize/414x414" />
                        </div>
                        <div className="itemName">펠트 헌팅캡 LA다저스</div>
                        <div className="itemPrice">79,000원</div>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <Link to="#">
                        <div className="itemImg">
                          <img src="https://static.mlb-korea.com/images/goods/thnail/m/20210903/3ACBB0216-07CGS-46668835721737915.png/dims/resize/414x414" />
                        </div>
                        <div className="itemName">펠트 헌팅캡 LA다저스</div>
                        <div className="itemPrice">79,000원</div>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="item">
                      <Link to="#">
                        <div className="itemImg">
                          <img src="https://static.mlb-korea.com/images/goods/thnail/m/20210903/3ACBB0216-07CGS-46668835721737915.png/dims/resize/414x414" />
                        </div>
                        <div className="itemName">펠트 헌팅캡 LA다저스</div>
                        <div className="itemPrice">79,000원</div>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="ranking">
          <div className="wrapper">
            <div></div>
          </div>
        </div>
      </main>
    );
  }
}

export default Main;
