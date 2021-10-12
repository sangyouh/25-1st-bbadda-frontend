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
    const { name, link, cate, depth, banner } = this.props;

    return (
      <li onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
        <Link to={link}>{name}</Link>
        <div className={`navSubWrap  ${isMenuHover ? 'active' : ''}`}>
          <div className="innerWrap">
            <div className="specialProduct">
              <ul className="lists">
                {cate.map(({ id, link, name }) => {
                  return (
                    <li key={id}>
                      <Link to={link}>{name}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="productLists">
              <ul className="lists">
                {depth.map(item => {
                  const { id, link, name } = item;
                  return (
                    <li key={id}>
                      <Link to={link}>{name}</Link>
                      <ul>
                        {item.items.map(({ id, link, name }) => {
                          return (
                            <li key={id}>
                              <Link to={link}>{name}</Link>
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
