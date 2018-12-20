import React, { Component } from 'react';
import icon from './cog.svg';
import './preferencebtn.css'

class PreferenceButton extends Component {
    render(){
        return(
            <div>
                <button className="btn-preferences" onClick={this.props.toggle()}>
                    <img src={icon} alt="Navigate"/>
                </button>
            </div>    
        );
}}

export default PreferenceButton;