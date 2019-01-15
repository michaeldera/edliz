import React from 'react';
import close from './chevron-down.svg';
import './preferences.css'
import Overlay  from '../../Views/Overlay/Overlay';

export default class Preferences extends React.Component {
    render() {
        const bottom = (this.props.status === "open") ? "0" : "-290px";
        return (
            <>
                <div className="preferences" style={{ bottom: bottom }} >
                    <button className="close-btn" onClick={this.props.toggle()}><img src={close} alt="close" /></button>
                    <label htmlFor="font-size-input" className="font-size-label">font-size</label>
                    <input name="font-size-input" className="font-size-input" type="range" min="8" max="30" placeholder={11} onChange={this.props.handleFontSizeChange()} />
                    <div className="preference-control">
                        <button className="btn-mode" onClick={this.props.toggleMode()}>{(this.props.mode === "day") ? "night mode" : "day mode"}</button>
                    </div>
                </div>
                <Overlay />
            </>
        );
    }
}
