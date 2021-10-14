import React from 'react';
import { Link } from 'react-router-dom';
import './InnerNav.scss';

class InnerNav extends React.Component {
  constructor() {
    super();
    this.state = {
      isMenuHover: false,
    };
  }

  toggleHover = () => {
    this.setState({
      isMenuHover: !this.state.isMenuHover,
    });
  };

  render() {
    const { isMenuHover } = this.state;
    const { id, name, depth, banner } = this.props;

    return (
      <li onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
        <Link to={`/products/menu?name=${name}`}>{name}</Link>
        <div className={`navSubWrap  ${isMenuHover ? 'active' : ''}`}>
          <div className="innerWrap">
            <div className="productLists">
              <ul className="lists">
                {depth.map(item => {
                  const { id, name } = item;
                  return (
                    <li key={id}>
                      <Link to={`/products/menu?name=${name}`}>{name}</Link>
                      <ul>
                        {item.items.map(({ id, name }) => {
                          return (
                            <li key={id}>
                              <Link to={`/products/menu?name=${name}`}>
                                {name}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="banner">
              <img alt={banner[0].name} src={banner[0].bannerLink} />
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default InnerNav;
