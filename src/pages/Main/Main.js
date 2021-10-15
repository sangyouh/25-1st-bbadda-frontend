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
      newItemList: [],
      rankingItemList: [],
    };
  }

  componentDidMount() {
    fetch('http://10.58.0.118:8000/products/menu?sort=-created_at')
      .then(result => result.json())
      .then(data => {
        this.setState({ newItemList: data.content });
      });

    fetch('http://10.58.0.118:8000/products/menu?sort=number_of_selling')
      .then(result => result.json())
      .then(data => {
        this.setState({ rankingItemList: data.content });
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
                      src={`https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2124&q=80`}
                    />
                  </Link>
                </div>
                <div className="newArrivalList">
                  <ul className="itemsList">
                    {this.state.newItemList.map(
                      ({ id, url, image_url, name, price }) => {
                        return (
                          <li key={id}>
                            <div className="item">
                              <Link to={`/product/productdetail/${id}`}>
                                <div className="itemImg">
                                  <img
                                    alt="itemImg"
                                    src={image_url['image_url1']}
                                  />
                                </div>
                                <div className="itemName">{name}</div>
                                <div className="itemPrice">
                                  {parseInt(price)
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                  원
                                </div>
                              </Link>
                            </div>
                          </li>
                        );
                      }
                    )}
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
                    {this.state.rankingItemList.map(
                      ({ id, url, image_url, name, price }, idx) => {
                        return (
                          <li key={id}>
                            <div className="item">
                              <Link to={`/product/productdetail/${id}`}>
                                <div className="itemImg">
                                  <img
                                    alt="itemImg"
                                    src={image_url['image_url1']}
                                  />
                                  <span className="number">{idx + 1}</span>
                                </div>
                                <div className="itemName">{name}</div>
                                <div className="itemPrice">
                                  {parseInt(price)
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                  원
                                </div>
                              </Link>
                            </div>
                          </li>
                        );
                      }
                    )}
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
