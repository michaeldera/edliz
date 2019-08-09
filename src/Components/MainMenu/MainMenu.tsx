import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import Media from 'react-media'
import home from './home.svg'
import read from './read.svg'
import info from './information.svg'
import HamburgerButton from '../../Views/HamburgerButton/HamburgerButton'
import styled, {css} from 'styled-components'

const Header = styled.header`
    display: block;
`

const MainNavigation = styled.div<{showNavigation: boolean}>`
    line-height: 40px;
    text-align: center;

    a {
        margin-right: 14px;
        margin-left: 14px;
        text-decoration: none;
    }

    a > img {
        display: none;
    }

    @media (max-width: 780px) {
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

        a > img {
            display: block;
            margin: 11px 10px auto 0;
            height: 1rem;
            float: left;
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

const MainMenu: React.FC = () => {
    const [showNavigation, setShowNavigation] = useState<boolean>(false)
    const toggleNavigation = () => {
        setShowNavigation(!showNavigation)
    }
    return (
        <Header>
            <Media query="(max-width: 780px)" render={() => <HamburgerButton onClick={toggleNavigation} />} />
            <MainNavigation showNavigation={showNavigation}>
                <Link exact to="/">
                    <img src={home} alt="information icon" />
                    Home
                </Link>
                <Link exact to="/chapters/:chapterNumber">
                    <img src={read} alt="information icon" />
                    Start Reading
                </Link>
                <Link exact to="/information">
                    <img src={info} alt="information icon" />
                    About this Project
                </Link>
            </MainNavigation>
        </Header>
    )
}

export default MainMenu
