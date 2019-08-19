import React from 'react'
import {NavLink} from 'react-router-dom'
import './navigationitem.css'
import {Chapters} from '../../Data/data'

interface NavigationItemProps {
    section: Chapters
    clicked: () => void
    chapter: number
}

const NavigationItem: React.FC<NavigationItemProps> = ({section, clicked, chapter}) => {
    return (
        <NavLink
            onClick={clicked}
            className="nav-item"
            to={'/chapters/' + chapter.toString()}
            activeClassName="nav-active"
        >
            <span className="nav-short-title">{section.short_title}</span>
            <span className="nav-long-title">{section.long_title}</span>
        </NavLink>
    )
}

export default NavigationItem
