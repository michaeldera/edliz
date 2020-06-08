import React from 'react';
import {Contents} from '../data/data'
import { getTheme, Text } from '@fluentui/react';

interface IArticleProps {
    content: Contents
    chapter: number
}

const theme = getTheme();

export const Article = ({ content, chapter }: IArticleProps) => {
    const selectedChapter = content.chapters[chapter]
    const subsections = selectedChapter.subsections!

    const style: React.CSSProperties = {
        display: 'block', 
        padding:'6vw', 
        maxWidth: 800, 
        margin: '60px auto', 
        backgroundColor: theme.semanticColors.bodyBackground,
        textAlign: 'left',
        boxShadow: '0 3.2px 7.2px 0 rgba(0, 0, 0, .132), 0 0.6px 1.8px 0 rgba(0, 0, 0, .108)',
    }

    return (
        <article style={style}>
             <Text variant="xxLargePlus" block>{selectedChapter.short_title}<br/>{selectedChapter.long_title}</Text>
            {subsections
                ? subsections.map((section: any) => { return <section key={section.short_title}>{section.content}</section> })
                : content.chapters[chapter].content}
        </article>
    )
}