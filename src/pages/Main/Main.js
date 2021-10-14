/*global Kakao*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Carousel from './Carousel/Carousel';
import './Main.scss';
import IMAGES_DATA from './Carousel/Image_Data';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      itemList: [],
    };
  }

  componentDidMount() {
    fetch('/data/Main/itemList.json')
      .then(result => result.json())
      .then(data => {
        this.setState({ itemList: data });
      });
  }

  render() {
    return (
      <>
        <main className="MainWrapper">
          <Carousel images={IMAGES_DATA} />
          <div className="newArrival">
            <div className="wrapper">
              <div className="header">NEW ARRIVAL</div>
              <div className="content">
                <div className="newArrivalBanner">
                  <Link to="#">
                    <img
                      alt="Banner"
                      src="https://static.mlb-korea.com/images/display/category/MTP/A01/A01/contents/10113_6809_111_KOR_20211005143759.jpg"
                    />
                  </Link>
                </div>
                <div className="newArrivalList">
                  <ul className="itemsList">
                    {this.state.itemList.map(({ id, link, name, price }) => {
                      return (
                        <li key={id}>
                          <div className="item">
                            <Link to={link}>
                              <div className="itemImg">
                                <img
                                  alt="itemImg"
                                  src="https://static.mlb-korea.com/images/goods/thnail/m/20210903/3ACBB0216-07CGS-46668835721737915.png/dims/resize/414x414"
                                />
                              </div>
                              <div className="itemName">{name}</div>
                              <div className="itemPrice">{price}</div>
                            </Link>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="ranking">
            <div className="wrapper">
              <div className="header">RANKING</div>
              <div className="content">
                <div className="items">
                  <ul className="itemsList">
                    {this.state.itemList.map(({ id, link, name, price }) => {
                      return (
                        <li key={id}>
                          <div className="item">
                            <Link to={link}>
                              <div className="itemImg">
                                <img
                                  alt="itemImg"
                                  src="https://static.mlb-korea.com/images/goods/thnail/m/20210903/3ACBB0216-07CGS-46668835721737915.png/dims/resize/414x414"
                                />
                              </div>
                              <div className="itemName">{name}</div>
                              <div className="itemPrice">{price}</div>
                            </Link>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default Main;
