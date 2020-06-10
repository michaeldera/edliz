import React from 'react'
import { book, IChapter } from '../data/data'
import { Panel, Text, getTheme } from '@fluentui/react'
import { NavLink } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { navigationPanelIsOpenState } from '../utils';


const theme = getTheme();

interface INavigationItemProps {
    shortTitle: string;
    title: string;
    link: string;
    onClick: any;
}

export const Navigation = () => {
    const items = book.contents.chapters;
    const [isOpen, setIsOpen] = useRecoilState(navigationPanelIsOpenState);

    const handleDismiss = () => {
        setIsOpen(!isOpen);
    }

    return (
        <Panel headerText="Navigation" isOpen={isOpen} onDismiss={handleDismiss} closeButtonAriaLabel="Close">
            {items.map((chapter: IChapter, index: number) => (
                <NavigationItem onClick={handleDismiss} key={index} title={chapter.long_title} shortTitle={chapter.short_title} link={`/chapters/${index + 1}`} />
                    ))}
        </Panel>
    )
}

const NavigationItem = ({ shortTitle, title, link, onClick }: INavigationItemProps) => {
    const style: React.CSSProperties = {
        textDecoration: 'none',
        padding: '10px 0', 
        display: 'block',
        color: theme.semanticColors.bodyText,
        borderBottom: `1px solid ${theme.palette.neutralLight}`,
    }

    const shortTitleStyle: React.CSSProperties = {
        color: theme.palette.neutralTertiary,
    }
    return (
        <NavLink style={style} onClick={onClick} to={link}>
            <Text variant="small" style={shortTitleStyle} block>{shortTitle}</Text>
            <Text variant="mediumPlus" block>{title}</Text>
        </NavLink>
    )
}