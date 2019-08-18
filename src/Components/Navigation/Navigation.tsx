import React from 'react'
import {Link} from 'react-router-dom'
import './navigation.css'
import NavigationItem from '~views/NavigationItem/NavigationItem'
import Overlay from '~views/Overlay/Overlay'
import {IEdlizStore} from '~stores/EdlizStore'
import {Chapters, Contents} from '~data/data'
import styled from 'styled-components'

interface NavigationProps extends Pick<IEdlizStore, 'navigation' | 'toggleNavigationPanel'> {
    current: Chapters
    content: Contents
}

const Header = styled.div`
    background-color: #6c63ff;
    color: #ffffff;
    text-align: left;
    padding: 1.2rem 1rem;
    margin-top: 0;
`

const Navigation: React.FC<NavigationProps> = ({navigation, toggleNavigationPanel, content, current}) => {
    const handleNavigation = () => {
        toggleNavigationPanel(navigation)
    }
    const overlayVisibility = navigation === 'open' ? 'visible' : 'hidden'

    return (
        <>
            <nav className={navigation}>
                <Header>
                    <Link className="home-link" to="/" onClick={handleNavigation}>
                        Home
                    </Link>
                    <small className="nav-meta">currently reading:</small>
                    <h2 className="nav-heading">{current.long_title}</h2>
                </Header>
                <div className="tab-content">
                    {content.chapters.map((section: Chapters, index: number) => (
                        <NavigationItem clicked={handleNavigation} key={index} section={section} chapter={index + 1} />
                    ))}
                </div>
            </nav>
            <Overlay visibility={overlayVisibility} dismiss={handleNavigation} />
        </>
    )
}

export default Navigation
