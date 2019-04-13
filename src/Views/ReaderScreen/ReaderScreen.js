import React, { Component } from 'react';
import './readerscreen.css'

export default class ReaderScreen extends Component {
    render() {
        return (
            <div className="screen">
                <div className="article" style={this.props.style}>
                    {(this.props.content.subsections)? this.props.content.subsections.map( section =>  {
                        return <section key={section.short_title}>{section.content}</section>
                    }) : this.props.content.content }
                </div>
            </div>
        );
    }
}