import React, {useState, useEffect} from 'react'
import './preferences.css'
import Overlay from '../../Views/Overlay/Overlay'
import DrawerButton from './DrawerButton'
import ModeButton from './ModeButton'
import {IEdlizStore} from '../../stores/EdlizStore'

interface PreferencesProps extends Omit<IEdlizStore, 'navigation' | 'toggleNavigationPanel' | 'books'> {}

const Preferences: React.FC<PreferencesProps> = ({
    preferences,
    mode,
    fontSize,
    fontSizeChange,
    togglePreferences,
    toggleMode,
}) => {
    const [bottom, setBottom] = useState<string | number>(0)

    useEffect(() => {
        if (preferences !== 'open') setBottom('-300px')
    }, [preferences])

    const handleFontSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        fontSizeChange(Number(event.target.value))
    }

    const overlayVisibility = preferences === 'open' ? 'visible' : 'hidden'
    return (
        <React.Fragment>
            <div className={mode + ' preferences'} style={{bottom: bottom}}>
                <DrawerButton />
                <section className="p-section">
                    <label htmlFor="font-size-input" className="preview-text" style={{fontSize: fontSize + 'pt'}}>
                        Preview Reading Text
                    </label>
                    <input
                        name="font-size-input"
                        className="font-size-input"
                        type="range"
                        min="10"
                        max="20"
                        value={fontSize}
                        onChange={handleFontSizeChange}
                    />
                </section>
                <ModeButton toggle={() => toggleMode(mode)} mode={mode} />
            </div>
            <Overlay visibility={overlayVisibility} dismiss={() => togglePreferences(preferences)} />
        </React.Fragment>
    )
}

export default Preferences
