import React, { Component } from 'react';
import './preferences.css'


 export default class Preferences extends Component {
    render() {
        const bottom = (this.props.status === "open")? "0": "-290px";
        return (
            <div className="preferences" style={{ bottom : bottom }} >                
                <label htmlFor="font-size-input" className="font-size-label">font-size</label>
                <input name="font-size-input" className="font-size-input" type="range" min="8" max="30" placeholder={this.props.fontSize} onChange={this.props.handleFontSizeChange()}/>
                <div className="preference-control">
                    <button className="btn-mode" onClick={this.props.toggleMode()}>{(this.props.mode === "day" )? "night mode" :  "day mode"}</button>
                </div>
                <button className="close-btn" onClick={this.props.toggle()}>close</button>
            </div>
        );
    }
}