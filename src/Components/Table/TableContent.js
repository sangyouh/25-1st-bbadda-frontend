import React, { Component } from 'react';

class TableContent extends Component {
  render() {
    const { trClassName, tableHead, children } = this.props;
    return (
      <tr className={trClassName}>
        <th>
          <label className="thLabel">{tableHead}</label>
        </th>
        <td className="tableContentTd">{children}</td>
      </tr>
    );
  }
}

export default TableContent;
