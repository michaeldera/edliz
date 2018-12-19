import React, { Component } from 'react';
import chevron from './../../Assets/Icons/chevron.svg';
import './preferences.css'


class Preferences extends Component {
    render() {
        const bottom = (this.props.status === "open")? "0": "-290px";
        return (
            <div className="preferences" style={{ bottom : bottom }} >
                <div className="preview-frame">
                    <span className="preview-text">Preview Text</span>
                </div>                    
                <label className="font-size-label">Font-size: <span>{this.props.fontSize}pt</span></label>

                    <input className="font-size-input" type="range" min="8" max="30" placeholder={11} onChange={this.props.handleFontSizeChange()}/>
                <div className="preference-control">
                    <button className="btn-mode" onClick={this.props.toggleMode()}><span className={(this.props.mode === "day" )? "lnr lnr-moon" :  "lnr lnr-sun"}></span></button>
                </div>
                <button className="close-btn" onClick={this.props.toggle()}>
                    <img  className="close-preferences" src={chevron} alt="close" />
                </button>
            </div>
        );
    }
}

export default Preferences;