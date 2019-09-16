import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import Media from 'react-media'
import home from './home.svg'
import read from './read.svg'
import info from './information.svg'
import HamburgerButton from '../../views/HamburgerButton/HamburgerButton'
import styled, {css} from 'styled-components'

const Header = styled.header`
    display: block;
`

const IconStyling = css`
    display: none;
    @media (max-width: 1024px) {
        display: block;
        margin: 11px 10px auto 0;
        height: 1rem;
        float: left;
    }
`

const HeaderImg = styled.img`
    ${IconStyling}
`

const MainNavigation = styled.div<{showNavigation: boolean}>`
    line-height: 40px;
    text-align: center;
    a {
        margin-right: 14px;
        margin-left: 14px;
        text-decoration: none;
    }
    @media (max-width: 1024px) {
        ${(props) =>
            props.showNavigation
                ? css`
                      display: block;
                  `
                : css`
                      display: none;
                  `}
        position: fixed;
        top: 0;
        margin-left: 14px;
        background: #fff;
        margin-top: 56px;
        border-radius: 6px;
        a {
            color: #333333;
            display: block;
            margin-right: 0;
            margin-left: 0;
            line-height: 40px;
            padding: 10px 30px;
        }
    }
`
const activeClassName = 'active'
const Link = styled(NavLink).attrs({
    activeClassName: 'active',
})`
    &.${activeClassName} {
        color: #2b44ff;
    }
`

const MainMenu: React.FC<{chapter?: number}> = ({chapter}) => {
    const [showNavigation, setShowNavigation] = useState<boolean>(false)
    const toggleNavigation = () => {
        setShowNavigation(!showNavigation)
    }
    return (
        <Header>
            <Media query="(max-width: 780px)" render={() => <HamburgerButton onClick={toggleNavigation} />} />
            <MainNavigation showNavigation={showNavigation}>
                <Link exact to="/">
                    <HeaderImg src={home} alt="information icon" />
                    Home
                </Link>
                <Link exact to={`/chapters/${chapter ? chapter + 1 : 1}`}>
                    <HeaderImg src={read} alt="information icon" />
                    Start Reading
                </Link>
                <Link exact to="/information">
                    <HeaderImg src={info} alt="information icon" />
                    About this Project
                </Link>
            </MainNavigation>
        </Header>
    )
}

export default MainMenu
