import React, { Component } from 'react';
import './Location.scss';

class Location extends Component {
  render() {
    return (
      <div className="location">
        <h2>로그인</h2>
        <p>
          <span>
            <a href="/main">Home</a>
          </span>
          <strong>로그인</strong>
        </p>
      </div>
    );
  }
}

export default Location;
