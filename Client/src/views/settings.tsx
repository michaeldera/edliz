import React from 'react';
import { Stack, Text, PrimaryButton, IStackTokens, IStackItemStyles, Dropdown, IDropdownOption, IconButton, DefaultButton, IIconProps, ActionButton } from '@fluentui/react';
import { useRecoilState } from 'recoil';
import { fontSizeState, isNightModeState } from '../utils';
import { useHistory } from 'react-router-dom';

const dropdownFontSizes = [
    { key: '11', text: '11' },
    { key: '12', text: '12' },
    { key: '13', text: '13' },
    { key: '14', text: '14' },
    { key: '15', text: '15' },
    { key: '16', text: '16' },
    { key: '17', text: '17' },
    { key: '18', text: '18' },
    { key: '19', text: '19' },
    { key: '20', text: '20' },
]

export const Settings = () => {
    let history = useHistory();
    const [fontSize, setFontSize] = useRecoilState(fontSizeState);
    const [isNightMode, setIsNightMode] = useRecoilState(isNightModeState);
    const key = fontSize.toString();

    const stackTokens: IStackTokens = {
        childrenGap: 40, 
        padding: '10vw'
    } 

    const sectionStackTokens: IStackTokens = {
        childrenGap: 20,
    } 

    const preferencesStackTokens: IStackTokens = {
        childrenGap: 10, 
    }
    const handleFontSizeChange = (event: React.FormEvent<HTMLDivElement>, item: IDropdownOption | undefined): void => {
        const _fontSize: number = item ? parseInt(item.key.toString()) : fontSize;
        setFontSize(_fontSize);
    };

    const handleFontSizeIncrease = () => {
        setFontSize(fontSize + 1);
    }

    const handleFontSizeDecrease = () => {
        setFontSize(fontSize - 1);
    }

    const controlStackStyle: IStackItemStyles = {
        root: [{
            paddingTop: 15,
        }]
    }

    const toggleTheme = () => {
        setIsNightMode(!isNightMode);
    }

    const handleBackClick = () => {
        history.goBack();
    }

    const themeIcon: IIconProps = { iconName: isNightMode ? 'ClearNight' : 'Sunny' }; 

    return (
        <Stack tokens={stackTokens}>
            <Text variant="xxLarge">Settings</Text>
            <Stack tokens={sectionStackTokens}>
                <Text style={{ marginRight: 15 }} variant="xLarge">Preferences</Text>
                <Stack tokens={preferencesStackTokens}>
                <Stack horizontal styles={controlStackStyle} verticalAlign="center">
                    <Text variant="mediumPlus" style={{ marginRight: 15 }} block>Font Size:</Text>
                    <Dropdown options={dropdownFontSizes} selectedKey={key} onChange={handleFontSizeChange} ariaLabel="Font Size" aria-hidden/>
                    <IconButton iconProps={{ iconName: 'FontDecrease' }} title="Decrease Font Size" ariaLabel="Decrease font size" onClick={handleFontSizeDecrease} disabled={(fontSize <= 11 )} />
                    <IconButton iconProps={{ iconName: 'FontIncrease' }} title="Increase Font Size" ariaLabel="Increase font size" onClick={handleFontSizeIncrease} disabled={(fontSize >= 20)}/>
                </Stack>
                <Stack horizontal styles={controlStackStyle} verticalAlign="center">
                    <Text variant="mediumPlus" style={{ marginRight: 15 }} block>Mode: </Text>
                    <DefaultButton toggle checked={isNightMode} text={isNightMode ? 'Dark Theme' : 'Light Theme'} iconProps={themeIcon} onClick={toggleTheme} disabled />
                    </Stack>
                 </Stack>
            </Stack>
            <Stack>
                <Text variant="xLarge">About</Text>
                <Text variant="medium">This application was built and is maintained by a well meaning developers. The code is opensource and is available to fork, share and improve on GitHub. To see a list of all developers that have contributed to the project read our Readme file on Github</Text>
                <Stack horizontal styles={controlStackStyle}>
                    <PrimaryButton text="View on GitHub" iconProps={{ iconName: "OpenSource" }} href="https://github.com/michaeldera/edliz" />
                </Stack>
            </Stack>
            <Stack>
                <Text variant="xLarge">Used in this Project</Text>
                <Text variant="medium">Illustrations from unDraw (https://undraw.co)</Text>
            </Stack>
            <Stack horizontal styles={controlStackStyle}>
                <ActionButton text="Go back" iconProps={{ iconName: "NavigateBack" }} onClick={handleBackClick} />
            </Stack>
        </Stack>
    )
}

