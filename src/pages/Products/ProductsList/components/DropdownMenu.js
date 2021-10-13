import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
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
    this.setState({ clicked: !this.state.clicked, clicked2: false }, () => {
      document.addEventListener('click', this.closeBar);
    });
  };

  isClicked2 = e => {
    e.preventDefault();
    this.setState({ clicked2: !this.state.clicked2, clicked: false }, () => {
      document.addEventListener('click', this.closeBar);
    });
  };

  closeBar = e => {
    if (!this.dropdown || !this.dropdown.contains(e.target)) {
      this.setState({ clicked: false, clicked2: false }, () => {
        document.body.removeEventListener('click', this.closeBar);
      });
    }
  };

  goToBallCap = () => {
    this.props.history.push(`/productsList?category=ballcap`);
  };
  goToApparel = () => {
    this.props.history.push(`/productsList?category=apparel`);
  };

  // changeData = () => {
  //   const { productsData } = this.props;
  //   fetch(`/data/productListData.json`)
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({
  //         productsData: data,
  //       });
  //     });
  // };

  render() {
    const { clicked, clicked2 } = this.state;
    const { outCategoryName } = this.props;

    return (
      <div className="dropdownMenu">
        <div
          ref={el => {
            this.dropdown = el;
          }}
        >
          <span className="categoryList">{outCategoryName}</span>
          <button onClick={this.isClicked}>
            <i class={`fas fa-angle-double-${clicked ? 'up' : 'down'}`}></i>
          </button>
          {clicked && !clicked2 ? (
            <span className="arrow">
              <i class="fas fa-chevron-right"></i>
            </span>
          ) : null}
          {clicked ? (
            <div className="menuLeft">
              <ul>
                <li className="dropdownList">
                  <Link className="linkBlur" to="#n">
                    전체보기
                  </Link>
                </li>
                <li className="dropdownList">
                  <button className="linkBlur" onClick={this.goToBallCap}>
                    Ballcap
                  </button>
                </li>
                <li className="dropdownList">
                  <button className="linkBlur" onClick={this.goToApparel}>
                    Apparel
                  </button>
                </li>
              </ul>
            </div>
          ) : null}

          <span className="categoryList">IN CATEGORY ONE</span>
          <button onClick={this.isClicked2}>
            <i class={`fas fa-angle-double-${clicked2 ? 'up' : 'down'}`}></i>
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
                  IN CATEGORY ONE
                </Link>
              </li>
              <li className="dropdownList">
                <Link className="linkBlur" to="#n">
                  IN CATEGORY TWO
                </Link>
              </li>
            </ul>
          ) : null}
        </div>
      </div>
    );
  }
}

export default withRouter(DropdownMenu);
