import React, { Component } from 'react';
import './Wrap.scss';

class Wrap extends Component {
  render() {
    const { children, title, className, titleClassName } = this.props;
    return (
      <div className={className}>
        <h3>{title}</h3>
        {children}
      </div>
    );
  }
}

export default Wrap;
