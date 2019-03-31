import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './navigationitem.css'

export default class NavigationItem extends Component {
    render() {
        const {section, clicked, chapter} = this.props
        return (
            <NavLink
                onClick={clicked}
                className="nav-item"
                to={`/chapters/${chapter.toString()}`}
                activeClassName="nav-active"
            >
                <span className="nav-short-title">{section.short_title}</span>
                <span className="nav-long-title">{section.long_title}</span>
            </NavLink>
        )
    }
}
