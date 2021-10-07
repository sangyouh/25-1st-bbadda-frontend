import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SizeOption.scss';

class SizeOption extends Component {
  render() {
    return (
      <div className="optionBox sizeOption">
        <span className="optionTtl">사이즈</span>
        <ul className="sizeList">
          <li>
            <Link to="#n">size1</Link>
          </li>
          <li>
            <Link to="#n">size2</Link>
          </li>
          <li>
            <Link to="#n">size3</Link>
          </li>
          <li>
            <Link to="#n" className="soldOut">
              size4
            </Link>
          </li>
          <li>
            <Link to="#n">size5</Link>
          </li>
          <li>
            <Link to="#n">size6</Link>
          </li>
          <li>
            <Link to="#n">size7</Link>
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
