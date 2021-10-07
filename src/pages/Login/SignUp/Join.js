import React, { Component } from 'react';
import Location from '../Location/Location';
import JoinWrap from './JoinWrap';
import './Join.scss';

class Join extends Component {
  render() {
    return (
      <div className="join">
        <Location />
        <JoinWrap />
      </div>
    );
  }
}

export default Join;
