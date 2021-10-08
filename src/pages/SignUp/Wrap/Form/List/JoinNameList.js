import React, { Component } from 'react';
import './JoinCommonList.scss';

class JoinNameList extends Component {
  render() {
    const { onChange, onClick } = this.props;
    return (
      <li>
        <input
          className="name"
          placeholder="이름(실명입력)"
          onChange={onChange}
          name="name"
        />
        <input
          className="button1"
          type="radio"
          name="foreign"
          value="false"
          onChange={onClick}
          // checked={'foreign' === false}
        />
        <label className="radioLabel">내국인</label>
        <input
          className="button2"
          type="radio"
          name="foreign"
          value="true"
          onChange={onClick}
          // checked={'foreign' === true}
        />
        <label className="radioLabel">외국인</label>
      </li>
    );
  }
}

export default JoinNameList;
