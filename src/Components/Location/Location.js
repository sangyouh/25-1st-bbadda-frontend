import React, { Component } from 'react';
import './Location.scss';

class Location extends Component {
  render() {
    const { page } = this.props;
    return (
      <div className="Location">
        <h2 className="locationH2">{page}</h2>
        <p className="locationP">
          <span>
            <a className="locationA" href="/main">
              Home
            </a>
          </span>
          <strong className="locationStrong">{page}</strong>
        </p>
      </div>
    );
  }
}

export default Location;
