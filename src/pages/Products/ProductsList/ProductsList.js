import React, { Component } from 'react';
import SingleProduct from './SingleProduct';
import DropdownMenu from './components/DropdownMenu';
import { withRouter } from 'react-router-dom';
import './ProductsList.scss';

export class ProductsList extends Component {
  constructor() {
    super();
    this.state = {
      products: {},
      offset: 0,
      limit: 8,
    };
  }

  componentDidMount() {
    fetch(`http://10.58.0.118:8000/products/menu?name=APPAREL`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          products: data,
        });
      });
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.search !== prevProps.location.search) {
      this.fetchData(this.props.location.search);
    }
  }

  fetchData = queryString => {
    fetch(`http://10.58.0.118:8000/products/menu${queryString}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          products: data,
        });
      });
  };

  newestProduct = () => {
    this.props.history.push(`/productsList?name=APPAREL&sort=-created_at`);
  };
  highestPrice = () => {
    this.props.history.push(`/productsList?name=APPAREL&sort=-price`);
  };
  LowestPrice = () => {
    this.props.history.push(`/productsList?name=APPAREL&sort=price`);
  };
  salesProduct = () => {
    this.props.history.push(
      '/productsList?name=APPAREL&sort=-number_of_selling'
    );
  };

  nextPage = () => {
    this.props.history.push(`/productsList?name=APPAREL&offset=8`);
  };

  prevPage = () => {
    this.props.history.push(`/productsList?name=APPAREL&offset=0`);
  };
  render() {
    const { products } = this.state;

    return (
      <div className="ProductsList">
        <div className="container">
          <DropdownMenu />
          <div>
            <button className="filterButton" onClick={this.highestPrice}>
              높은가격순
            </button>
            <span className="buttonDivider">|</span>
            <button className="filterButton" onClick={this.LowestPrice}>
              낮은가격순
            </button>
            <span className="buttonDivider">|</span>
            <button className="filterButton" onClick={this.newestProduct}>
              최신상품순
            </button>
            <span className="buttonDivider">|</span>
            <button className="filterButton" onClick={this.salesProduct}>
              판매량순
            </button>
          </div>

          <div className="productsListContainer">
            <div className="prods">
              {products.content &&
                products.content.map(item => {
                  const { id, name, price, image_url } = item;
                  return (
                    <SingleProduct
                      key={id}
                      productId={id}
                      productName={name}
                      productPrice={price}
                      imgURL={image_url}
                    />
                  );
                })}
            </div>
          </div>
          <div className="pageNation">
            <button className="pageButton" onClick={this.prevPage}>
              이전페이지
            </button>
            <span className="buttonDivider">|</span>
            <button className="pageButton" onClick={this.nextPage}>
              다음페이지
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ProductsList);
