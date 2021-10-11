import React, { Component } from 'react';
import './Table.scss';

class Table extends Component {
  render() {
    const { children, tableClassName, colClassName } = this.props;
    return (
      <table className={tableClassName}>
        <colgroup>
          <col className={colClassName} />
        </colgroup>
        <tbody>{children}</tbody>
      </table>
    );
  }
}

export default Table;
