import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './navigationitem.css'


export default class NavigationItem extends Component {
    render() {
        const section = this.props.section;
        return (
            <div className="content-item">
                <NavLink to={"/chapter/" + this.props.chapter.toString()}>
                    <span className="content-item-title">{section.short_title}</span>
                    <span className="content-preview">{section.long_title}</span>
                </NavLink>
            </div>
        );
    }
}
