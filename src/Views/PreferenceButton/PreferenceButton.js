import React, { Component } from 'react';
import settings from './../../Assets/Icons/settings.svg';
import './preferencebtn.css'

class PreferenceButton extends Component {
    render(){
        return(
            <div>
                <button className="nav-btn" onClick={this.props.toggle()}>
                    <img src={settings} alt="Navigate"/>
                </button>
            </div>    
        );
}}

export default PreferenceButton;