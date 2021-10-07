import React, { Component } from 'react';
import SingleProduct from './SingleProduct';
import DropdownMenu from './components/DropdownMenu';
import './ProductsList.scss';

export class ProductsList extends Component {
  constructor() {
    super();
    this.state = {
      products: { name: '', content: [{}] },
    };
  }

  componentDidMount() {
    fetch('http://10.58.6.202:8000/menus/menu?id=1')
      .then(res => res.json())
      .then(data => {
        this.setState({
          products: data,
        });
      });
  }
  sortPriceHighest = () => {
    fetch('http://10.58.6.202:8000/menus/menu?id=1')
      .then(res => res.json())
      .then(data => {
        data.content.sort((first, second) => second.price - first.price);
        this.setState({ products: data });
      });
  };
  sortPriceLowest = () => {
    fetch('http://10.58.6.202:8000/menus/menu?id=1')
      .then(res => res.json())
      .then(data => {
        data.content.sort((first, second) => first.price - second.price);
        this.setState({ products: data });
      });
  };
  render() {
    const { products } = this.state;

    return (
      <div className="productsList">
        <div className="container">
          <DropdownMenu />
          <div>
            <button className="filterButton" onClick={this.sortPriceHighest}>
              높은가격순
            </button>
            <button
              className="filterButtonBorder"
              onClick={this.sortPriceLowest}
            >
              낮은가격순
            </button>
          </div>
          <div className="productsListContainer">
            <div className="prods">
              {products.content.map((item, index) => {
                return (
                  <SingleProduct
                    key={index}
                    //id={item.id}
                    prodName={item.name}
                    prodPrice={item.price}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductsList;