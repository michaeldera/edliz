import React from 'react'
import { Stack, PrimaryButton, getTheme, IconButton } from '@fluentui/react'

const theme = getTheme();

interface IHeaderProps {
    toggleNavigation: any;
}

export const Header = ({ toggleNavigation}: IHeaderProps) => {
    const style: React.CSSProperties = {
        position: 'sticky',
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        boxSizing: 'border-box', 
        top: 0, 
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
                <IconButton iconProps={{ iconName: 'Share' }} title="Share this Article" ariaLabel="Share this page" />
                <IconButton iconProps={{ iconName: 'AddBookmark' }} title="Add Bookmark" ariaLabel="Bookmark this page" />
                <IconButton iconProps={{iconName: 'Settings'}} title="Settings" ariaLabel="Settings"/>
            </Stack>
        </header>
    )
}