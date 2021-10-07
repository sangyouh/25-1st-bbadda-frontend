import React from 'react';
import { Link } from 'react-router-dom';
import './ColorOption.scss';

class ColorOption extends React.Component {
  render() {
    return (
      <div className="optionBox colorOption">
        <span className="optionTtl">다른색상/팀</span>
        <ul className="colorList">
          <li>
            <Link to="#n">
              <img alt="컬러1" src="/images/productDetail/cap01.jpeg" />
            </Link>
          </li>
          <li>
            <Link to="#n">
              <img alt="컬러2" src="/images/productDetail/cap02.jpeg" />
            </Link>
          </li>
          <li>
            <Link to="#n" className="current">
              <img alt="컬러3" src="/images/productDetail/cap03.jpeg" />
            </Link>
          </li>
          <li>
            <Link to="#n">
              <img alt="컬러4" src="/images/productDetail/cap04.jpeg" />
            </Link>
          </li>
          <li>
            <Link to="#n">
              <img alt="컬러5" src="/images/productDetail/cap05.jpeg" />
            </Link>
          </li>
          <li>
            <Link to="#n">
              <img alt="컬러6" src="/images/productDetail/cap06.jpeg" />
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default ColorOption;
