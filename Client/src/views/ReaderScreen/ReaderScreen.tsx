import React from 'react';
import {Contents} from '../../data/data'
import styled from 'styled-components'
import { getTheme } from '@fluentui/react';

interface ReaderScreenProps {
    fontSize: number
    content: Contents
    chapter: number
    mode: string
}


const ChapterTitle = styled.div`
    font-size: 45px;
    letter-spacing: 0.65px;
    line-height: 54px;
`
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
                    <ChapterTitle>{selectedChapter.short_title}:</ChapterTitle>
                    <ChapterTitle>{selectedChapter.long_title}</ChapterTitle>
                    {subsections
                        ? subsections.map((section: any) => {
                              return <section key={section.short_title}>{section.content}</section>
                          })
                        : content.chapters[chapter].content}
        </article>
    )
}

export default ReaderScreen
