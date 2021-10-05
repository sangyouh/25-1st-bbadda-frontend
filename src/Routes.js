import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import MyPage from './pages/MyPage/MyPage';
import Product from './pages/Products/Product';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Main" component={Main} />
          <Route exact path="/MyPage" component={MyPage} />
          <Route exact path="/Product" component={Product} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
