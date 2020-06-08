import React from 'react'
import {Chapters, Contents} from '../data/data'
import { Panel, Text } from '@fluentui/react'
import { NavLink } from 'react-router-dom'



interface INavigationItemProps {
    shortTitle: string;
    title: string;
    link: string;
    onClick: any;
}


export const Navigation = () => {
    const handleNavigation = () => {
        () => {};
    }

    let content: any = [];
    return (
        <Panel headerText="Navigation" isOpen={false} onDismiss={handleNavigation} closeButtonAriaLabel="Close">
                    {content.chapters.map((section: Chapters, index: number) => (
                        <NavigationItem onClick={handleNavigation} key={index} title={"St"} shortTitle="" link=""/>
                    ))}
        </Panel>
    )
}

const NavigationItem = ({ shortTitle, title, link, onClick }: INavigationItemProps) => {

    return (
        <NavLink onClick={onClick} to={link}>
            <Text variant="small">{shortTitle}</Text>
            <Text>{title}</Text>
        </NavLink>
    )
}