import React, { Component } from 'react';

export default class Overlay extends Component {
    render() {    
        let overlayStyle = {
            background:"rgba(0, 0, 0, 0.1)",
            height: "100%",
            left:"0",
            position: "fixed",
            top:"0",
            visibility: this.props.visibility,
            width: "100%",
            zIndex: "998"
        }
        return <div style={overlayStyle} onClick={this.props.dismiss}></div>;
    }
}

