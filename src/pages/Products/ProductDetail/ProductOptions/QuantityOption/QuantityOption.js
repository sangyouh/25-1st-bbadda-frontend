import React from 'react';
import './QuantityOption.scss';

class QuantityOption extends React.Component {
  render() {
    return (
      <div className="optionBox quantityOption">
        <span className="optionTtl">수량</span>
        <div className="countQuantity">
          <button type="button">-</button>
          <input type="text" />
          <button type="button">+</button>
        </div>
      </div>
    );
  }
}

export default QuantityOption;
