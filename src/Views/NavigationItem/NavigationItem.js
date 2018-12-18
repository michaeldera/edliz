import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './navigationitem.css'


export default class NavigationItem extends Component {
    render() {
        const section = this.props.section;
        return (
            <div className="nav-item">
                <NavLink to={"/chapters/" + this.props.chapter.toString()}>
                    <span className="nav-short-title">{section.short_title}</span>
                    <span className="nav-long-title">{section.long_title}</span>
                </NavLink>
            </div>
        );
    }
}
