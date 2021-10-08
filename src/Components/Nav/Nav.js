/*eslint-disable*/
import React, { Component } from 'react';
import InnerNav from './InnerNav/InnerNav';
import NAV_DATA from './navData';
import './Nav.scss';

class Nav extends Component {
  render() {
    return (
      <header className="header">
        <nav className="nav">
          <div className="navWrap">
            <div className="logoWrap">
              <a className="MLBlogo">
                <h1>MLB</h1>
              </a>
            </div>
            <div className="menuLists">
              <ul className="list">
                {NAV_DATA.map(item => {
                  const { id, name, link, cate, depth, banner } = item;
                  return (
                    <InnerNav
                      key={id}
                      name={name}
                      link={link}
                      cate={cate}
                      depth={depth}
                      banner={banner}
                    />
                  );
                })}
              </ul>
              <ul className="list promote">
                <li>
                  <a>PROMOTION</a>
                </li>
                <li>
                  <a>LIBRARY</a>
                </li>
              </ul>
            </div>
            <div className="icons">
              <button className="iconBox">
                <a>
                  <i className="fas fa-search" />
                </a>
              </button>
              <button className="iconBox">
                <a>
                  <i className="fas fa-shopping-bag" />
                </a>
              </button>
              <button className="iconBox">
                <a>
                  <i className="far fa-user" />
                </a>
                <div className="loginMenu">
                  <ul>
                    <li>
                      <a>로그인</a>
                    </li>
                    <li>
                      <a>회원가입</a>
                    </li>
                    <li>
                      <a>마이페이지</a>
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

export default Nav;
