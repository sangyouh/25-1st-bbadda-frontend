import React, { Component } from 'react';
import './DropdownMenu.scss';
import { Link } from 'react-router-dom';

export class DropdownMenu extends Component {
  constructor() {
    super();
    this.state = {
      isClicked: false,
      isClicked2: false,
    };
    this.isClicked = this.isClicked.bind(this);
    this.isClicked2 = this.isClicked2.bind(this);
  }

  isClicked(e) {
    e.preventDefault();
    this.setState({ isClicked: true });
  }

  isClicked2(e) {
    e.preventDefault();
    this.setState({
      isClicked2: true,
    });
  }
  render() {
    const { isClicked, isClicked2 } = this.state;

    return (
      <div className="dropdownMenu">
        <span className="categoryList">볼캡</span>
        <button onClick={this.isClicked}>
          <i class="far fa-caret-square-down"></i>
        </button>
        {isClicked ? (
          <ul className="menu1">
            <li className="dropdownList">
              <Link className="linkBlur" to="#n">
                {' '}
                전체보기
              </Link>{' '}
            </li>
            <li className="dropdownList">
              {' '}
              <Link className="linkBlur" to="#n">
                {' '}
                CATEGORY ONE
              </Link>{' '}
            </li>
            <li className="dropdownList">
              {' '}
              <Link className="linkBlur" to="#n">
                {' '}
                CATEGORY TWO
              </Link>{' '}
            </li>
          </ul>
        ) : null}
        <span className="categoryList">CATEGORY ONE</span>
        <button onClick={this.isClicked2}>
          <i class="far fa-caret-square-down"></i>
        </button>
        {isClicked2 ? (
          <ul className="menu2">
            <li className="dropdownList">
              <Link className="linkBlur" to="#n">
                {' '}
                전체보기
              </Link>{' '}
            </li>
            <li className="dropdownList">
              {' '}
              <Link className="linkBlur" to="#n">
                {' '}
                CATEGORY UNO
              </Link>{' '}
            </li>
            <li className="dropdownList">
              {' '}
              <Link className="linkBlur" to="#n">
                {' '}
                CATEGORY DOS
              </Link>{' '}
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default DropdownMenu;
