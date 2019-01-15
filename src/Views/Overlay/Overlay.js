import React, { Component } from 'react';
import './overlay.css'

export default class Overlay extends Component {
    render() {
        return (
            <div className="overlay" style={{ visibility : this.props.visibility}} onClick={this.props.dismiss}>
             </div>   
        );
    }
}

