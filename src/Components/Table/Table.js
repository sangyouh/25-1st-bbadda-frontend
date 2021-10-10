import React, { Component } from 'react';

class Table extends Component {
  render() {
    return <tr className="basicInfo">
    <th>기본정보</th>
    <td>
      <ul>
        <List data={JOIN_LIST.first} onChange={onChange} />
        <List
          data={JOIN_LIST.sec}
          onChange={onChange}
          onClick={onClick}
        />
        <List
          data={JOIN_LIST.third}
          onChange={onChange}
          onClick={onClick}
        />
        <List data={JOIN_LIST.fou} onChange={onChange} />
      </ul>
    </td>;
  }
}

export default Table;
