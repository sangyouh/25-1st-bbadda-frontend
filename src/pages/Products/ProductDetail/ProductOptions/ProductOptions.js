import React from 'react';
import './ProductOptions.scss';

class ProductOptions extends React.Component {
  render() {
    return (
      <div className="ProductOptions">
        <ul class="productImages">
          <li>
            <img alt="모자1" src="/images/productDetail/cap01.jpeg" />
          </li>
        </ul>
        <button href="#n" className="btnControl btnPrev">
          Prev
        </button>
        <button href="#n" className="btnControl btnNext">
          Next
        </button>
      </div>
    );
  }
}

export default ProductOptions;
