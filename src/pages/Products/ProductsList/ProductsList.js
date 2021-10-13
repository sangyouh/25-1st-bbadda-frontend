import React, { Component } from 'react';
import SingleProduct from './SingleProduct';
import DropdownMenu from './components/DropdownMenu';
import { withRouter } from 'react-router-dom';
import './ProductsList.scss';

export class ProductsList extends Component {
  constructor() {
    super();
    this.state = {
      products: { content: [{}] },
    };
  }

  // props
  // fetch
  // lo search
  //
  componentDidMount() {
    //const id = this.props.match.params.id;
    fetch(`http://10.58.7.108:8000/products/menu?id=1`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          products: data,
        });
      });
  }
  // componentWillUpdate() {
  //   this.fetchData(this.queryString);
  // }

  // componentWillUnmount() {
  //   this.fetchData();
  // }

  fetchData = queryString => {
    if (queryString === '?category=ballcap') {
      fetch(`http://10.58.7.108:8000/products/menu?id=2`)
        .then(res => res.json())
        .then(data => {
          this.setState({
            products: data,
          });
        });
    } else if (queryString === '?category=apparel') {
      fetch(`http://10.58.7.108:8000/products/menu?id=3`)
        .then(res => res.json())
        .then(data => {
          this.setState({
            products: data,
          });
        });
    }
  };

  sortPriceHighest = () => {
    fetch('/data/productListData1.json')
      .then(res => res.json())
      .then(data => {
        data.content.sort((first, second) => second.price - first.price);
        this.setState({ products: data });
      });
  };
  sortPriceLowest = () => {
    fetch('/data/productListData1.json')
      .then(res => res.json())
      .then(data => {
        data.content.sort((first, second) => first.price - second.price);
        this.setState({ products: data });
      });
  };

  render() {
    const { products } = this.state;
    const { sortPriceHighest, sortPriceLowest } = this;
    const queryString = this.props.location.search;
    console.log(queryString);
    this.fetchData(queryString);

    return (
      <div className="ProductsList">
        <div className="container">
          <DropdownMenu
            productsData={products}
            outCategoryName={products.name}
            categoryId={products.categoryId}
            fetchData={this.fetchData}
          />
          <div>
            <button className="filterButton" onClick={sortPriceHighest}>
              높은가격순
            </button>
            <span className="buttonDivider">|</span>
            <button className="filterButton" onClick={sortPriceLowest}>
              낮은가격순
            </button>
          </div>

          <div className="productsListContainer">
            <div className="prods">
              {products.content.map(item => {
                const { id, name, price, image_url } = item;
                return (
                  <SingleProduct
                    key={id}
                    id={id}
                    productName={name}
                    productPrice={price}
                    imgURL={image_url}
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

export default withRouter(ProductsList);
