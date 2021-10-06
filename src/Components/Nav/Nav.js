import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import InnerNav from './InnerNav/InnerNav';
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
                <li>
                  <a>APPAREL</a>
                  <InnerNav />
                </li>
                <li>
                  <a>CAP</a>
                </li>
                <li>
                  <a>SHOES</a>
                </li>
                <li>
                  <a>BAG</a>
                </li>
                <li>
                  <a>ACC</a>
                </li>
                <li>
                  <a>KIDS</a>
                </li>
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
                  <i class="fas fa-search" />
                </a>
              </button>
              <button>
                <a>
                  <i class="fas fa-shopping-bag" />
                </a>
              </button>
              <button>
                <a>
                  <i class="far fa-user" />
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
