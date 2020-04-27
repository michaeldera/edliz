import React from 'react'
import {Link} from 'react-router-dom'
import './navigation.css'
import NavigationItem from '../../views/NavigationItem/NavigationItem'
import {IEdlizStore} from '../../stores/EdlizStore'
import {Chapters, Contents} from '../../data/data'
import { Panel } from '@fluentui/react'

interface NavigationProps extends Pick<IEdlizStore, 'navigation' | 'toggleNavigationPanel'> {
    current: Chapters
    content: Contents
    mode: string
}


const Navigation: React.FC<NavigationProps> = ({navigation, toggleNavigationPanel, content, current, mode}) => {
    const handleNavigation = () => {
        toggleNavigationPanel(navigation)
    }

    return (
        <Panel headerText="Navigation" isOpen={navigation === 'open'} onDismiss={handleNavigation} closeButtonAriaLabel="Close">
                <header>
                    <Link className="home-link" to="/" onClick={handleNavigation}>
                        Home
                    </Link>
                    <small className="nav-meta">currently reading:</small>
                    <h2 className="nav-heading">{current.long_title}</h2>
                </header>
                    {content.chapters.map((section: Chapters, index: number) => (
                        <NavigationItem clicked={handleNavigation} key={index} section={section} chapter={index + 1} mode={mode}/>
                    ))}
        </Panel>
    )
}

export default Navigation
