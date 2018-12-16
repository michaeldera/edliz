import React, { Component } from 'react';
import './readerscreen.css'

export default class ReaderScreen extends Component {
    render() {
        return (
            <div className="screen">
                <div className="article" >{this.props.content}</div>
            </div>
        );
    }
}