import React from 'react';
import './QuantityOption.scss';

class QuantityOption extends React.Component {
  render() {
    return (
      <div className="QuantityOption optionBox">
        <span className="optionTtl">수량</span>
        <div className="countQuantity">
          <button className="countBtn" type="button">
            -
          </button>
          <input className="quantity" type="text" />
          <button className="countBtn" type="button">
            +
          </button>
        </div>
      </div>
    );
  }
}

export default QuantityOption;
