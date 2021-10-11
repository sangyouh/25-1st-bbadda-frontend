import React, { Component } from 'react';
import Carousel from './Carousel/Carousel';
import './Main.scss';

import IMAGES_DATA from './Carousel/Image_Data';

class Main extends Component {
  render() {
    return (
      <>
        <Carousel images={IMAGES_DATA} />
      </>
    );
  }
}

export default Main;
