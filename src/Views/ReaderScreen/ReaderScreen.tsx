import React from 'react'
import './readerscreen.css'
import {Contents} from '../../Data/data'
import styled from 'styled-components'
import ChapterImg from './chapter.svg'
import NavigationItem from '../NavigationItem/NavigationItem'
import MainMenu from '../../Components/MainMenu/MainMenu'

interface ReaderScreenProps {
    fontSize: number
    content: Contents
    chapter: number
}

const Screen = styled.div``
const ReaderComponent = styled.div`
    display: flex;
    flex-direction: row;
    margin: auto;
    padding: 170px 1em 60px;
    max-width: 1320px;
`
const Article = styled.div<{fontSize: number}>`
    display: block;
    font-size: ${(props) => props.fontSize};
`

const ChapterListComponent = styled.div`
    background: #ffffff;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.25);
    width: 280px;
    height: 729px;
    margin-left: -44px;
    overflow: scroll;
    position: sticky;
`
const ChapterNavigation = styled.div`
    display: flex;
    margin-right: 60px;
`
const ChapterImageComponent = styled.div`
    margin-top: 44px;
    overflow: scroll;
    position: sticky;
`

const ChapterTitle = styled.div`
    font-family: Muli-Light;
    font-size: 45px;
    color: #101010;
    letter-spacing: 0.65px;
    line-height: 54px;
`
const ReaderScreen: React.FC<ReaderScreenProps> = ({fontSize, content, chapter}) => {
    const selectedChapter = content.chapters[chapter]
    const subsections = selectedChapter.subsections!
    return (
        <div className="screen">
            <MainMenu />
            <ReaderComponent>
                <ChapterNavigation>
                    <ChapterImageComponent>
                        <ChapterImg />
                    </ChapterImageComponent>
                    <ChapterListComponent>
                        {content.chapters.map((section, index) => (
                            <NavigationItem key={section.short_title} section={section} chapter={index + 1} />
                        ))}
                    </ChapterListComponent>
                </ChapterNavigation>
                <Article fontSize={fontSize}>
                    <ChapterTitle>{selectedChapter.short_title}:</ChapterTitle>
                    <ChapterTitle>{selectedChapter.long_title}</ChapterTitle>
                    {subsections
                        ? subsections.map((section: any) => {
                              return <section key={section.short_title}>{section.content}</section>
                          })
                        : content.chapters[chapter].content}
                </Article>
            </ReaderComponent>
        </div>
    )
}

export default ReaderScreen
