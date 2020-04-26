import React from 'react'
import {IEdlizStore} from '../../stores/EdlizStore'
import { DefaultButton, IIconProps, Panel, Slider } from '@fluentui/react'

interface PreferencesProps extends Omit<IEdlizStore, 'navigation' | 'toggleNavigationPanel' | 'books'> {}


const Preferences: React.FC<PreferencesProps> = ({ preferences, mode, fontSize, fontSizeChange, togglePreferences, toggleMode,
}) => {
    const handleFontSizeChange = (value: number) => {
        fontSizeChange(value);
    }
    const handlePreferences = () => {
        togglePreferences(preferences)
    }

    const night: IIconProps = { iconName: 'ClearNight' };
    const day: IIconProps = { iconName: 'Sunny' };

    return (
        <React.Fragment>
            <Panel headerText="Preferences" isOpen={preferences === 'open'} onDismiss={handlePreferences} closeButtonAriaLabel="Close">
                <section className="p-section">
                    <label htmlFor="font-size-input" className="preview-text" style={{fontSize: fontSize + 'pt'}}>
                        Preview Reading Text
                    </label>
                    <Slider label="Font size" min={10} max={20} value={fontSize} onChange={handleFontSizeChange} showValue={true} />
                </section>

                <DefaultButton toggle checked={mode === 'day'} text={ mode === 'day' ? 'Day Mode' : 'Night Mode'} iconProps={mode === 'day' ? day : night} onClick={() => toggleMode(mode)} />
                </Panel>
        </React.Fragment>
    )
}

export default Preferences
