import React, { Component } from 'react';
import menu from './../../Assets/Icons/menu.svg';
import './header.css'

class Header extends Component {
    render() {
        return (
            <header>
                <button className="preferences-btn" onClick={this.props.toggle()}>
                    <img src={menu} alt="menu" />
                </button>
                <button className="title-btn">{this.props.title}</button>
            </header>
        );
    }
}

export default Header;