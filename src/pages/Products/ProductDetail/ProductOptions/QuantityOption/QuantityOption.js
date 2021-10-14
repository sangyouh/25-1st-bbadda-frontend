import React from 'react';
import './QuantityOption.scss';

class QuantityOption extends React.Component {
  constructor() {
    super();
    this.state = {
      amount: 1,
    };
  }

  quantityValue = e => {
    const { setSelectedSizeQuantity } = this.props;
    this.setState({
      amount: parseInt(e.target.value),
    });
    setSelectedSizeQuantity(this.state.amount);
  };

  checkNumber = e => {
    if (0 <= e.key && e.key <= 9) {
      this.quantityValue(e);
    } else {
      alert('숫자만 입력해주세요');
      this.setState({
        amount: 1,
      });
      return;
    }
  };

  plusCount = e => {
    this.quantityValue(e);
    this.setState({ amount: this.state.amount + 1 });
  };

  minusCount = e => {
    this.quantityValue(e);
    this.setState({ amount: this.state.amount - 1 });
  };

  render() {
    return (
      <div className="QuantityOption optionBox">
        <span className="optionTtl">수량</span>
        <div className="countQuantity">
          <button className="countBtn" type="button" onClick={this.minusCount}>
            -
          </button>
          <input
            className="quantity"
            type="text"
            value={this.state.amount}
            onKeyUp={this.checkNumber}
            onChange={this.quantityValue}
          />
          <button className="countBtn" type="button" onClick={this.plusCount}>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default QuantityOption;
