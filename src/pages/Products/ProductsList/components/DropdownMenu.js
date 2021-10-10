import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DropdownMenu.scss';

export class DropdownMenu extends Component {
  constructor() {
    super();
    this.dropdown = React.createRef();
    this.state = {
      clicked: false,
      clicked2: false,
    };
  }

  isClicked = e => {
    e.preventDefault();
    this.setState({ clicked: true });
  };

  isClicked2 = e => {
    e.preventDefault();
    this.setState({ clicked2: true });
  };

  closeBar = e => {
    if (!this.dropdown.contains(e.target)) {
      this.setState({ clicked: false });
    }
  };
  // document.body => click

  //event bubling =>

  // if(click event menu1 안에 포함되있다면) RETURN => DOM.contain, ref
  // closeBar

  // isClicked2 = e => {
  //   e.preventDefault();
  //   this.setState({ clicked2: true }, () => {
  //     document.addEventListener('click', this.closeBar);
  //   });
  // };

  // closeBar = event => {
  //   if (!this.dropdown.contains(event.target)) {
  //     this.setState({ clicked: false }, () => {
  //       document.body.removeEventListener('click', this.closeBar);
  //     });
  //   }
  // };

  // closeBar = () => {
  //   // if
  //   this.setState({ clicked: false, clicked2: false }, () => {
  //     document.body.removeEventListener('click', this.closeBar);
  //   });
  // };

  close = () => {
    this.setState({ clicked: false });
  };

  render() {
    const { clicked, clicked2 } = this.state;

    return (
      <div className="dropdownMenu" onClick={this.closeBar}>
        <span className="categoryList">볼캡</span>
        <button onClick={this.isClicked}>
          <i class="far fa-caret-square-down"></i>
        </button>
        <div
          ref={el => {
            this.dropdown = el;
          }}
        >
          {clicked ? (
            <div className="menuLeft">
              <ul>
                <li className="dropdownList">
                  <Link className="linkBlur" to="#n">
                    전체보기
                  </Link>
                </li>
                <li className="dropdownList">
                  <Link className="linkBlur" to="#n">
                    CATEGORY ONE
                  </Link>
                </li>
                <li className="dropdownList">
                  <Link className="linkBlur" to="#n">
                    CATEGORY TWO
                  </Link>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
        <span className="categoryList">CATEGORY ONE</span>
        <button onClick={this.isClicked2}>
          <i class="far fa-caret-square-down"></i>
        </button>
        {clicked2 ? (
          <ul className="menuRight">
            <li className="dropdownList">
              <Link className="linkBlur" to="#n">
                전체보기
              </Link>
            </li>
            <li className="dropdownList">
              <Link className="linkBlur" to="#n">
                CATEGORY UNO
              </Link>
            </li>
            <li className="dropdownList">
              <Link className="linkBlur" to="#n">
                CATEGORY DOS
              </Link>
            </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default DropdownMenu;
