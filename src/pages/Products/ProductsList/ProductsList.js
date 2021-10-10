import React, { Component } from 'react';
import SingleProduct from './SingleProduct';
import DropdownMenu from './components/DropdownMenu';
import Nav from '../../../Components/Nav/Nav';
import './ProductsList.scss';
import Drop from './components/Drop';

export class ProductsList extends Component {
  constructor() {
    super();
    this.state = {
      products: { content: [{}] },
    };
  }

  componentDidMount() {
    fetch('./data/productListData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          products: data,
        });
      });
  }
  sortPriceHighest = () => {
    fetch('./data/productListData.json')
      .then(res => res.json())
      .then(data => {
        data.content.sort((first, second) => second.price - first.price);
        this.setState({ products: data });
      });
  };
  sortPriceLowest = () => {
    fetch('./data/productListData.json')
      .then(res => res.json())
      .then(data => {
        data.content.sort((first, second) => first.price - second.price);
        this.setState({ products: data });
      });
  };

  render() {
    const { products } = this.state;
    const { sortPriceHighest, sortPriceLowest } = this;

    return (
      <div className="ProductsList">
        <Nav />
        <div className="container">
          <DropdownMenu />
          <div>
            <button className="filterButton" onClick={sortPriceHighest}>
              높은가격순
            </button>
            <button className="filterButtonBorder" onClick={sortPriceLowest}>
              낮은가격순
            </button>
          </div>

          <div className="productsListContainer">
            <div className="prods">
              {products.content.map(item => {
                const { id, name, price, img } = item;
                return (
                  <SingleProduct
                    key={id}
                    id={id}
                    productName={name}
                    productPrice={price}
                    imgURL={img}
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
