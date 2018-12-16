import React, { Component } from 'react';
import './readerscreen.css'

class ReaderScreen extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="screen">
                <div className="article" >{this.props.content}</div>
            </div>
        );
    }
}

export default ReaderScreen;