import React, { Component } from 'react';

class TableContent extends Component {
  render() {
    const { children } = this.props;
    return (
      <tr className="basicInfo">
        <th>기본정보</th>
        <td>{children}</td>
      </tr>
    );
  }
}

export default TableContent;
