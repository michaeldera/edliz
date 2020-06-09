﻿import React from 'react';
import { Stack, PrimaryButton, getTheme, IconButton } from '@fluentui/react';
import { useRecoilState } from 'recoil';
import { navigationPanelIsOpenState } from '../utils';
import { useHistory } from 'react-router-dom';

const theme = getTheme();


export const Header = () => {
    let history = useHistory();
    const [isOpen, setIsOpen] = useRecoilState(navigationPanelIsOpenState);

    const toggleNavigation = () => {
        setIsOpen(!isOpen);
    }

    const handleSettingsClick = () => {
        history.push('/settings');
    }

    const gotoBookmarks = () => {
        history.push('/bookmarks');
    }

    const style: React.CSSProperties = {
        position: 'fixed',
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        boxSizing: 'border-box', 
        top: 0, 
        left: 0, 
        right: 0,
        padding: 8, 
        width: '100%',
        margin: 0, 
        boxShadow: '0 3.2px 7.2px 0 rgba(0, 0, 0, .132), 0 0.6px 1.8px 0 rgba(0, 0, 0, .108)',
        backgroundColor: theme.semanticColors.bodyBackground,
    }

    return (
        <header style={style}>
            <Stack horizontal>
                <PrimaryButton onClick={toggleNavigation}>Menu</PrimaryButton>
            </Stack>
            <Stack horizontal horizontalAlign="end" grow>
                <IconButton iconProps={{ iconName: 'Share' }} title="Share this Article" ariaLabel="Share this page" disabled />
                <IconButton iconProps={{ iconName: 'AddBookmark' }} title="Add Bookmark" ariaLabel="Bookmark this page" disabled />
                <IconButton iconProps={{ iconName: 'DoubleBookmark' }} title="Go to Bookmarks" ariaLabel="Go to Bookmarks" onClick={gotoBookmarks}/>
                <IconButton iconProps={{ iconName: 'Settings' }} title="Settings" ariaLabel="Settings" onClick={handleSettingsClick}/>
            </Stack>
        </header>
    )
}