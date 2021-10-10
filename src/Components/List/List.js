import React, { Component } from 'react';
import Input from '../Input/Input';
import './List.scss';
class List extends Component {
  render() {
    const { data, onChange, onClick } = this.props;

    const list = data.map(input =>
      input.radio ? (
        <li className="inputLi">
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
        </li>
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
      ) : (
        <li className="inputLi">
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
        </li>
      )
    );

    // const list2 =

    return <>{list}</>;
  }
}

export default List;
