import React, { Component } from 'react';
import Input from '../Input/Input';
import './List.scss';
class List extends Component {
  render() {
    const { data, onChange, onClick } = this.props;

    const list = data.map(input =>
      input.radio ? (
        <label className="radioLabel">
          <Input
            key={input.id}
            className={input.className}
            placeholder={input.placeHolder}
            type={input.type}
            name={input.name}
            value={input.value}
            onChange={onChange}
            onClick={onClick}
          />
          {input.radioName}
        </label>
      ) : input.single ? (
        <li className={input.classNameA}>
          <Input
            className={input.classNameB}
            key={input.id}
            placeholder={input.placeHolder}
            type={input.type}
            name={input.name}
            onChange={onChange}
          />
        </li>
      ) : input.number ? (
        <>
          <Input
            className={input.className}
            key={input.id}
            name={input.name}
            onChange={onChange}
          />
          <span className="hyphen">-</span>
        </>
      ) : (
        <Input
          key={input.id}
          className={input.className}
          placeholder={input.placeHolder}
          type={input.type}
          name={input.name}
          onChange={onChange}
          onClick={onClick}
          value={input.value}
        />
      )
    );

    // const list2 =

    return <>{list}</>;
  }
}

export default List;
