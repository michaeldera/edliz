import * as React from 'react'
import {NavLink} from 'react-router-dom'
import './navigationitem.css'
import {Chapters} from '../../data/data'
import styled from 'styled-components'

interface NavigationItemProps {
    section: Chapters
    clicked?: () => void
    chapter: number
    mode: string
}

const activeClassName = 'nav-active'
const className = 'nav-item'
const Link = styled(NavLink).attrs({
    activeClassName: 'nav-active',
    className: 'nav-item',
})<{mode: string}>`
    &.${activeClassName} {
        border-bottom: 1px solid #6c63ff;
        padding-left: 7px;
        background: ${({mode}) => (mode === 'day' ? '#eff5fb' : 'inherit')};
        color: #2b44ff;
    }
    &.${className} {
        display: block;
        padding: 10px;
        text-align: left;
        border-bottom: 1px solid rgba(200, 200, 200, 0.2);
        text-decoration: none;
    }
`

const ShortTitle = styled.span.attrs({className: 'nav-short-title'})`
    color: #999;
    display: block;
    font-size: 0.8em;
`
const LongTitle = styled.span.attrs({className: 'nav-long-title'})`
    display: block;
    color: #101010;
    margin: 5px 0;
`
const NavigationItem: React.FC<NavigationItemProps> = ({section, clicked, chapter, mode}) => {
    return (
        <Link onClick={clicked} to={'/chapters/' + chapter.toString()} mode={mode}>
            <ShortTitle>{section.short_title}</ShortTitle>
            <LongTitle>{section.long_title}</LongTitle>
        </Link>
    )
}

export default NavigationItem
