import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';

class Button extends Component {
  render() {
    const { data, onClick, href } = this.props;
    return (
      <Link href={href} className={data.classNameA} onClick={onClick}>
        <span className={data.classNameB}> {data.content}</span>
      </Link>
    );
  }
}

export default Button;
