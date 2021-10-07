/*eslint-disable*/
import React, { Component } from 'react';
import InnerNav from './InnerNav/InnerNav';
import NAV_DATA from './navData';
import './Nav.scss';

class Nav extends Component {
  render() {
    return (
      <div className="header">
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
              <button>
                <a>
                  <i className="fas fa-search" />
                </a>
              </button>
              <button>
                <a>
                  <i className="fas fa-shopping-bag" />
                </a>
              </button>
              <button>
                <a>
                  <i className="far fa-user" />
                </a>
              </button>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
