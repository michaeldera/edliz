import React, { Component } from 'react';
import sun from './../../Assets/Icons/sun.svg';
import chevron from './../../Assets/Icons/chevron.svg';
import './preferences.css'


class Preferences extends Component {
    render() {
        const bottom = (this.props.status === "open")? "0": "-290px";
        return (
            <div className="preferences" style={{ bottom : bottom }} >
                <div>
                <div className="preview-frame">
                    <span className="preview-text">Preview Text</span>
                </div>                    
                <label className="font-size-label">Font-size: <span>{this.props.fontSize}pt</span></label>
                <div className="font-control">
                    <input className="font-size-input" type="range" min="8" max="30" placeholder={11} onChange={this.props.handleFontSizeChange()}/>
                </div>
                <div className="preference-control">
                    <button className="preference-btn">
                        <img className="p-btn-icon" src={sun} alt="day" onClick={this.props.toggleMode()} />
                    </button>
                </div>
                <button className="close-btn" onClick={this.props.toggle()}>
                    <img  className="close-preferences" src={chevron} alt="close" />
                </button>
                </div>
            </div>
        );
    }
}

export default Preferences;