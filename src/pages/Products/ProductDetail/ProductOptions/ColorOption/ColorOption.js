import React from 'react';
import { Link } from 'react-router-dom';
import './ColorOption.scss';

class ColorOption extends React.Component {
  constructor() {
    super();
    this.state = {
      clicked: true,
      index: 0,
    };
  }
  render() {
    const { color } = this.props;

    return (
      <div className="ColorOption optionBox">
        <span className="optionTtl">다른색상/팀</span>
        <ul className="colorList">
          {color.map((img, i) => {
            return (
              <li className="color" key={i}>
                <Link
                  to="#n"
                  className={
                    this.state.index === i && this.state.clicked
                      ? 'current'
                      : ''
                  }
                  onClick={() => (
                    (this.state.clicked = true), (this.state.index = i)
                  )}
                >
                  <img alt="컬러1" src={img.img_url} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ColorOption;
