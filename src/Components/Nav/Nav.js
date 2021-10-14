import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import InnerNav from './InnerNav/InnerNav';
import NAV_DATA from './navData';
import './Nav.scss';

class Nav extends Component {
  render() {
    const hasToken =
      window.sessionStorage.AccessToken || window.localStorage.AccessToken;
    return (
      <header className="NavHeader">
        <nav className="nav">
          <div className="navWrap">
            <div className="logoWrap">
              <Link className="MLBlogo" to="/main">
                <h1>BBADDA</h1>
              </Link>
            </div>
            <div className="menuLists">
              <ul className="list">
                {NAV_DATA.map(({ id, name, link, cate, depth, banner }) => {
                  return (
                    <InnerNav
                      key={id}
                      id={id}
                      name={name}
                      link={link}
                      cate={cate}
                      depth={depth}
                      banner={banner}
                      moveToPage={this.moveToPage}
                    />
                  );
                })}
              </ul>
              <ul className="list promote">
                <li>
                  <Link to="#">PROMOTION</Link>
                </li>
                <li>
                  <Link to="#">LIBRARY</Link>
                </li>
              </ul>
            </div>
            <div className="icons">
              <button className="iconBox">
                <Link to="#">
                  <i className="fas fa-search" />
                </Link>
              </button>
              <button className="iconBox">
                <Link to="#">
                  <i className="fas fa-shopping-bag" />
                </Link>
              </button>
              <button className="iconBox">
                <Link to="#">
                  <i className="far fa-user" />
                </Link>
                <div className="loginMenu">
                  <ul className={hasToken ? 'beSmall' : ''}>
                    <li className={hasToken ? 'inactive' : ''}>
                      <Link to="/signin">로그인</Link>
                    </li>
                    <li className={hasToken ? 'inactive' : ''}>
                      <Link to="/signup">회원가입</Link>
                    </li>
                    <li className={hasToken ? '' : 'inactive'}>
                      <Link
                        to="/main"
                        onClick={() => {
                          window.sessionStorage.removeItem('AccessToken');
                        }}
                      >
                        로그아웃
                      </Link>
                    </li>
                    <li>
                      <Link to="#">마이페이지</Link>
                    </li>
                  </ul>
                </div>
              </button>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default withRouter(Nav);
