import React from 'react'
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
                    {content.chapters.map((section: Chapters, index: number) => (
                        <NavigationItem clicked={handleNavigation} key={index} section={section} chapter={index + 1} mode={mode}/>
                    ))}
        </Panel>
    )
}

export default Navigation
