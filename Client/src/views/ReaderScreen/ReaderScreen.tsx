import React from 'react'
import './readerscreen.css'
import {Contents} from '../../data/data'
import styled from 'styled-components'

interface ReaderScreenProps {
    fontSize: number
    content: Contents
    chapter: number
    mode: string
}


const Article = styled.article<{fontSize: number}>`
    display: block;
    font-size: ${(props) => props.fontSize};
    padding: 15px;
    max-width: 800px;
    margin: auto;
`

const ChapterTitle = styled.div`
    font-size: 45px;
    letter-spacing: 0.65px;
    line-height: 54px;
`

const Screen = styled.div.attrs({className: 'screen'})`
    position: absolute;
    top: 0;
    bottom: 50px;
    width: 100vw;
    box-sizing: border-box;
    right: 0;
    left: 0;
    padding: 0em;
    text-align: left;
    height: calc(100vh);
    overflow-y: scroll;
    }
`
const ReaderScreen: React.FC<ReaderScreenProps> = ({fontSize, content, chapter, mode}) => {
    const selectedChapter = content.chapters[chapter]
    const subsections = selectedChapter.subsections!

    return (
        <Screen>
                <Article fontSize={fontSize}>
                    <ChapterTitle>{selectedChapter.short_title}:</ChapterTitle>
                    <ChapterTitle>{selectedChapter.long_title}</ChapterTitle>
                    {subsections
                        ? subsections.map((section: any) => {
                              return <section key={section.short_title}>{section.content}</section>
                          })
                        : content.chapters[chapter].content}
                </Article>
        </Screen>
    )
}

export default ReaderScreen
