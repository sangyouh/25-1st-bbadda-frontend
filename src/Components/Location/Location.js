import React, { Component } from 'react';
import './Location.scss';

class Location extends Component {
  render() {
    const { page } = this.props;
    return (
      <div className="location">
        <h2>{page}</h2>
        <p>
          <span>
            <a href="/main">Home</a>
          </span>
          <strong>{page}</strong>
        </p>
      </div>
    );
  }
}

export default Location;
