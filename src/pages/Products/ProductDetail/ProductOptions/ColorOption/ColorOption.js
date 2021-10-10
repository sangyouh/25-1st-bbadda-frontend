import React from 'react';
import { Link } from 'react-router-dom';
import './ColorOption.scss';

class ColorOption extends React.Component {
  render() {
    return (
      <div className="ColorOption optionBox">
        <span className="optionTtl">다른색상/팀</span>
        <ul className="colorList">
          <li className="color">
            <Link to="#n">
              <img alt="컬러1" src="/images/productDetail/cap01.jpeg" />
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default ColorOption;
