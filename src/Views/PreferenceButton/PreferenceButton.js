import React, { Component } from 'react';
import icon from './cog.svg';
import './preferencebtn.css'

class PreferenceButton extends React.PureComponent {
  handleNavigation = () => {
    const {preferences, toggle} = this.props
    toggle(preferences)
  }
  render() {
    return(
      <div>
        <button className="btn-preferences" onClick={this.handleNavigation}>
          <img src={icon} alt="Navigate"/>
        </button>
      </div>
    );
  }}

export default PreferenceButton;
