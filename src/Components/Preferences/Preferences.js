import React from 'react';
import close from './chevron-down.svg';
import './preferences.css'
import Overlay  from '../../Views/Overlay/Overlay';

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
    const {preferences, mode} = this.props
    const bottom = (preferences === "open") ? "0" : "-290px";
    const  overlayVisibility = (preferences === "open")?  "visible" : "hidden";
    return (
      <>
        <div className="preferences" style={{ bottom: bottom }} >
          <button
            className="close-btn"
            onClick={this.handlePreferences}><img src={close}alt="close" />
          </button>
          <label
            htmlFor="font-size-input"
            className="font-size-label"
          >
            font-size
          </label>
          <input
            name="font-size-input"
            className="font-size-input"
            type="range" min="8"
            max="30" placeholder={11}
            onChange={this.handleFontSizeChange}
          />
          <div className="preference-control">
            <button className="btn-mode"
                    onClick={this.handleMode}
            >
              {(mode === "day") ? "night mode" : "day mode"}
            </button>
          </div>
        </div>
        <Overlay visibility={overlayVisibility} dismiss={this.handlePreferences}/>
      </>
    );
  }
}
