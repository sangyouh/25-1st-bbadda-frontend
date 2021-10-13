import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import MyPage from './pages/MyPage/MyPage';
import Product from './pages/Products/Product';
import ProductsList from './pages/Products/ProductsList/ProductsList';
import ProductDetail from './pages/Products/ProductDetail/ProductDetail';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/mypage" component={MyPage} />
          <Route exact path="/product" component={Product} />
          <Route exact path="/productsList" component={ProductsList} />
          <Route
            exact
            path="/product/productdetail"
            component={ProductDetail}
          />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
