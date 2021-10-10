import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SizeOption.scss';

class SizeOption extends Component {
  render() {
    return (
      <div className="SizeOption optionBox">
        <span className="optionTtl">사이즈</span>
        <ul className="sizeList">
          <li className="size">
            <Link to="#n">size1</Link>
          </li>
        </ul>
        <Link to="#n" className="sizeGuide">
          Size Guide
        </Link>
      </div>
    );
  }
}

export default SizeOption;
