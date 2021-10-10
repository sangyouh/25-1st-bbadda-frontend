import React, { Component } from 'react';

class Table extends Component {
  render() {
    const { children } = this.props;
    return (
      <table>
        <colgroup></colgroup>
        <tbody>{children}</tbody>
      </table>
    );
  }
}

export default Table;
