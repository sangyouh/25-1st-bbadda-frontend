import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SizeOption.scss';

class SizeOption extends Component {
  constructor() {
    super();
    this.state = {
      clicked: true,
      index: 0,
    };
  }

  render() {
    const { size } = this.props;
    return (
      <div className="SizeOption optionBox">
        <span className="optionTtl">사이즈</span>
        <ul className="sizeList">
          {size &&
            size.map((sizeInfo, i) => {
              return (
                <li className="size" key={i}>
                  <Link
                    to="#n"
                    className={
                      this.state.index === i && this.state.clicked
                        ? 'current'
                        : ''
                    }
                    onClick={() =>
                      this.setState({
                        clicked: true,
                        index: i,
                        value: sizeInfo.value,
                        quantity: sizeInfo.quantity,
                      })
                    }
                  >
                    {sizeInfo.value}
                  </Link>
                </li>
              );
            })}
        </ul>
        <Link to="#n" className="sizeGuide">
          Size Guide
        </Link>
      </div>
    );
  }
}

export default SizeOption;
