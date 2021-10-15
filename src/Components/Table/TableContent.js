import React, { Component } from 'react';
import './TableContent.scss';

class TableContent extends Component {
  render() {
    const { trClassName, tableHead, children } = this.props;
    return (
      <tr ClassName={trClassName}>
        <th className="basicInfo">
          <label className="thLabel">{tableHead}</label>
        </th>
        <td className="tableContentTd">{children}</td>
      </tr>
    );
  }
}

export default TableContent;
