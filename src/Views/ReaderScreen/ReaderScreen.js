import React, { Component } from 'react';
import './readerscreen.css'

class ReaderScreen extends Component {
    constructor(props){
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll(e){
        console.log("handling a scroll event");
    }
    render() {
        return (
            <div className="screen">
                <div className="article" style={this.props.style} onScroll={(e) => this.handleScroll}>
                    {this.props.content}
                </div>
            </div>
        );
    }
}

export default ReaderScreen;