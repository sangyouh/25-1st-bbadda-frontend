import React, { Component } from 'react';
import Input from '../../../../../Components/Input/Input';

class JoinList extends Component {
  render() {
    const { data, onChange, onClick } = this.props;

    const list = data.map(input =>
      input.radio ? (
        <>
          <Input
            className={input.className}
            placeholder={input.placeHolder}
            type={input.type}
            name={input.name}
            onChange={onChange}
            onClick={onClick}
            value={input.value}
          />
          <label className="radioLabel">내국인</label>
        </>
      ) : input.single ? (
        <li key={input.id} className={input.className}>
          <Input
            placeholder={input.placeHolder}
            type={input.type}
            name={input.name}
            onChange={onChange}
          />
        </li>
      ) : (
        <Input
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

    return <li>{list}</li>;
  }
}

export default JoinList;
