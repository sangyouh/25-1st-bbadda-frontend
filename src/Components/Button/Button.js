import React, { Component } from 'react';

class Button extends Component {
  render() {
    const { data, onClick, href } = this.props;
    return (
      <>
        <a href={href} className={data.classNameA} onClick={onClick}>
          <span className={data.classNameB}> {data.content}</span>
        </a>
      </>
    );
  }
}

export default Button;
