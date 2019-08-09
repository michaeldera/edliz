import React from 'react'
import './readerscreen.css'
import {Chapters} from '../../Data/data'

interface ReaderScreenProps {
    style: {
        fontSize: string
    }
    content: Chapters
}

const ReaderScreen: React.FC<ReaderScreenProps> = ({style, content}) => {
    return (
        <div className="screen">
            <div className="article" style={style}>
                {content.subsections
                    ? content.subsections.map((section: any) => {
                          return <section key={section.short_title}>{section.content}</section>
                      })
                    : content.content}
            </div>
        </div>
    )
}

export default ReaderScreen
