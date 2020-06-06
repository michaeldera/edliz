import React from 'react';
import {Contents} from '../../data/data'
import { getTheme } from '@fluentui/react';

interface ReaderScreenProps {
    fontSize: number
    content: Contents
    chapter: number
    mode: string
}

const theme = getTheme();

const ReaderScreen: React.FC<ReaderScreenProps> = ({fontSize, content, chapter, mode}) => {
    const selectedChapter = content.chapters[chapter]
    const subsections = selectedChapter.subsections!

    const style: React.CSSProperties = {
        display: 'block', 
        fontSize: fontSize, 
        padding:'6vw', 
        maxWidth: 800, 
        margin: '60px auto', 
        backgroundColor: theme.semanticColors.bodyBackground,
        textAlign: 'left',
        boxShadow: '0 3.2px 7.2px 0 rgba(0, 0, 0, .132), 0 0.6px 1.8px 0 rgba(0, 0, 0, .108)',
    }

    return (
        <article style={style}>
                    <h1>{selectedChapter.short_title}: {selectedChapter.long_title}</h1>
                    {subsections
                        ? subsections.map((section: any) => {
                              return <section key={section.short_title}>{section.content}</section>
                          })
                        : content.chapters[chapter].content}
        </article>
    )
}

export default ReaderScreen
