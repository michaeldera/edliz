
import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './navigationitem.css'


export default class NavigationItem extends Component<any, {}> {
  render() {
    const section = this.props.section;
    return (
      <NavLink
        onClick={this.props.clicked}
        className="nav-item" to={"/chapters/" + this.props.chapter.toString()}
        activeClassName="nav-active"
      >
        <span className="nav-short-title">{section.short_title}</span>
        <span className="nav-long-title">{section.long_title}</span>
      </NavLink>
    );
  }
}
