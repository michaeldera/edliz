import React, { Component } from 'react';
import './readerscreen.css'

interface ReaderScreenProps {
}

const ReaderScreen: React.FC = ({style, content}) => {
    return (
        <div className="screen">
            <div className="article" style={style}>
                {(content.subsections) ? content.subsections.map((section: any) =>  {
                    return <section key={section.short_title}>{section.content}</section>
                }) : content.content }
            </div>
        </div>
    );
}


export default ReaderScreen