import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './DropdownMenu.scss';

export class DropdownMenu extends Component {
  constructor() {
    super();
    this.dropdown = React.createRef();
    this.state = {
      clickedLeft: false,
      clickedRight: false,
      isOutOne: false,
      nameId1: 0,
      nameId2: 0,
    };
  }

  isClicked = e => {
    e.preventDefault();
    this.setState(
      { clickedLeft: !this.state.clickedLeft, clickedRight: false },
      () => {
        document.addEventListener('click', this.closeBar);
      }
    );
  };

  isClicked2 = e => {
    e.preventDefault();
    this.setState(
      { clickedRight: !this.state.clickedRight, clickedLeft: false },
      () => {
        document.addEventListener('click', this.closeBar);
      }
    );
  };

  closeBar = e => {
    if (!this.dropdown || !this.dropdown.contains(e.target)) {
      this.setState({ clickedLeft: false, clickedRight: false }, () => {
        document.body.removeEventListener('click', this.closeBar);
      });
    }
  };

  goToOutCategoryOne = () => {
    this.props.history.push(`/productsList?name=아우터`);
    this.setState({
      nameId1: 1,
      isOutOne: true,
    });
  };
  goToOutCategoryTwo = () => {
    this.props.history.push(`/productsList?name=상의`);
    this.setState({
      nameId1: 2,
      isOutOne: false,
    });
  };
  goToInCategoryOne = () => {
    this.props.history.push(`/productsList?name=숏패딩`);
    this.setState({
      nameId2: 1,
    });
  };
  goToInCategoryTwo = () => {
    this.props.history.push(`/productsList?name=후리스`);
    this.setState({
      nameId2: 2,
    });
  };
  goToInCategoryOne1 = () => {
    this.props.history.push(`/productsList?name=티셔츠`);
    this.setState({
      nameId2: 3,
    });
  };
  goToInCategoryTwo2 = () => {
    this.props.history.push(`/productsList?name=맨투맨`);
    this.setState({
      nameId2: 4,
    });
  };
  goToAll = () => {
    this.props.history.push(`/productsList?name=APPAREL`);
    this.setState({
      nameId1: 0,
    });
  };

  render() {
    const { clickedLeft, clickedRight } = this.state;
    const nameObj = {
      0: '전체보기',
      1: '아우터',
      2: '상의',
    };
    const subObj = {
      0: '전체보기',
      1: '숏패딩',
      2: '후리스',
      3: '티셔츠',
      4: '맨투맨',
    };

    return (
      <div className="dropdownMenu">
        <div
          ref={el => {
            this.dropdown = el;
          }}
        >
          <span className="categoryList">{nameObj[this.state.nameId1]}</span>
          <button onClick={this.isClicked}>
            <i class={`fas fa-angle-double-${clickedLeft ? 'up' : 'down'}`}></i>
          </button>
          {clickedLeft && !clickedRight ? (
            <span className="arrow">
              <i class="fas fa-chevron-right"></i>
            </span>
          ) : null}
          {clickedLeft ? (
            <div className="menuLeft">
              <ul>
                <li className="dropdownList">
                  <button className="linkBlur" onClick={this.goToAll}>
                    {nameObj[0]}
                  </button>
                </li>
                <li className="dropdownList">
                  <button
                    className="linkBlur"
                    onClick={this.goToOutCategoryOne}
                  >
                    {nameObj[1]}
                  </button>
                </li>
                <li className="dropdownList">
                  <button
                    className="linkBlur"
                    onClick={this.goToOutCategoryTwo}
                  >
                    {nameObj[2]}
                  </button>
                </li>
              </ul>
            </div>
          ) : null}

          <span className="categoryList">{subObj[this.state.nameId2]}</span>
          <button onClick={this.isClicked2}>
            <i
              class={`fas fa-angle-double-${clickedRight ? 'up' : 'down'}`}
            ></i>
          </button>
          {clickedRight ? (
            <ul className="menuRight">
              <li className="dropdownList"></li>
              <li className="dropdownList">
                <button
                  className="linkBlur"
                  onClick={
                    this.state.isOutOne
                      ? this.goToInCategoryOne
                      : this.goToInCategoryOne1
                  }
                >
                  {this.state.isOutOne ? subObj[1] : subObj[3]}
                </button>
              </li>
              <li className="dropdownList">
                <button
                  className="linkBlur"
                  onClick={
                    this.state.isOutOne
                      ? this.goToInCategoryTwo
                      : this.goToInCategoryTwo2
                  }
                >
                  {this.state.isOutOne ? subObj[2] : subObj[4]}
                </button>
              </li>
            </ul>
          ) : null}
        </div>
      </div>
    );
  }
}

export default withRouter(DropdownMenu);
