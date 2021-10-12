import React, { Component } from 'react';
import Location from '../../Components/Location/Location';
import JoinWrap from './Wrap/JoinWrap';
import './Join.scss';

class Join extends Component {
  render() {
    return (
      <div className="Join">
        <Location page="회원가입" />
        <JoinWrap />
      </div>
    );
  }
}

export default Join;
