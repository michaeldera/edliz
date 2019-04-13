import React from 'react';
import menu from './../../Assets/Icons/menu.svg';
import './header.css'

class Header extends React.PureComponent {

  handleNavigation = () => {
    const {navigation, toggle} = this.props
    toggle(navigation)
  }

  render() {
    const {title} = this.props
    return (
      <header>
        <button className="btn-toggle-nav" onClick={this.handleNavigation}>
          <img src={menu} alt="menu" />
        </button>
        <button className="title-btn">{title}</button>
      </header>
    );
  }
}

export default Header;
