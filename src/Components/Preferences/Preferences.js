import React from 'react'
import './preferences.css'
import Overlay from '../../Views/Overlay/Overlay'
import ModeButton from '../ModeButton/ModeButton'
import DrawerButton from '../DrawerButton/DrawerButton'

export default class Preferences extends React.PureComponent {
    handlePreferences = () => {
        const {preferences, toggle} = this.props
        toggle(preferences)
    }

    handleMode = () => {
        const {mode, toggleMode} = this.props
        toggleMode(mode)
    }

    handleFontSizeChange = event => {
        this.props.fontSizeChange(event.target.value)
    }

    render() {
        const {preferences, mode, fontSize} = this.props
        const bottom = preferences === 'open' ? '0' : '-300px'
        const overlayVisibility = preferences === 'open' ? 'visible' : 'hidden'
        return (
            <React.Fragment>
                <div className="preferences" style={{bottom}}>
                    <DrawerButton action={this.handlePreferences} />
                    <label htmlFor="font-size-input" className="font-size-label">
                        FONT SIZE
                    </label>
                    <section className="p-section">
                        <input
                            name="font-size-input"
                            id="font-size-input"
                            className="font-size-input"
                            type="range"
                            min="10"
                            max="20"
                            value={fontSize}
                            onChange={this.handleFontSizeChange}
                        />
                        <p className="preview-text" style={{fontSize: `${fontSize}pt`}}>
                            Preview Reading Text
                        </p>
                    </section>
                    <ModeButton toggle={this.handleMode} mode={mode} />
                </div>
                <Overlay visibility={overlayVisibility} dismiss={this.handlePreferences} />
            </React.Fragment>
        )
    }
}


