import React, { Component } from 'react';
import './DropdownMenu.scss';

export class DropdownMenu extends Component {
  constructor() {
    super();
    this.state = {
      isClicked: false,
      isClicked2: false,
    };
    this.isClicked = this.isClicked.bind(this);
    this.isClicked2 = this.isClicked2.bind(this);

    // this.closeBar = this.closeBar.bind(this);
  }

  // closeBar() {
  //   this.setState({ isClicked: false }, () => {
  //     document.removeEventListener('click', this.closeBar);
  //   });
  // }

  isClicked(e) {
    e.preventDefault();
    this.setState({ isClicked: true }, () => {
      document.addEventListener('click', this.closeBar);
    });
  }

  // closeBar() {
  //   this.setState({ isClicked: false }, () => {
  //     document.removeEventListener('click', this.closeBar);
  //   });
  // }
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
          <ul className="menu">
            <li>
              <button className="borderlessButton"> 전체보기</button>{' '}
            </li>
            <li>
              {' '}
              <button className="borderlessButton"> CATEGORY ONE</button>{' '}
            </li>
            <li>
              {' '}
              <button className="borderlessButton"> CATEGORY TWO</button>{' '}
            </li>
          </ul>
        ) : null}
        <span>CATEGORY ONE</span>
        <button onClick={this.isClicked2}>
          <i class="far fa-caret-square-down"></i>
        </button>
        {isClicked2 ? (
          <ul className="menu">
            <li> 전체보기 </li>
            <li> CATEGORY ONE </li>
            <li> CATEGORY TWO </li>
          </ul>
        ) : null}
      </div>
    );
  }
}

export default DropdownMenu;
