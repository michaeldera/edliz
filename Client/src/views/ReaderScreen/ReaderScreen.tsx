import React from 'react'
import './readerscreen.css'
import {Contents} from '../../data/data'
import styled from 'styled-components'
import ChapterImg from './chapter.svg'
import NavigationItem from '../../views/NavigationItem/NavigationItem'
import MainMenu from '../../components/MainMenu/MainMenu'
import Media from 'react-media'

interface ReaderScreenProps {
    fontSize: number
    content: Contents
    chapter: number
    mode: string
}

const ReaderComponent = styled.div`
    padding: 170px 1em 60px;
    @media (min-width: 1025px) {
        display: flex;
        flex-direction: row;
        margin: auto;
        max-width: 1320px;
    }
    h1 {
        display: none;
    }
}
`

const Article = styled.div<{fontSize: number}>`
    display: block;
    font-size: ${(props) => props.fontSize};
`

const ChapterListComponent = styled.div<{mode: string}>`
    background: ${({mode}) => (mode === 'day' ? '#ffffff' : '#2a2a2a')};
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.25);
    width: 282px;
    height: 729px;
    margin-left: -44px;
    overflow-y: auto;
    overflow-x: hidden;
    position: sticky;
    top: 50px;
    height: calc(100vh - 80px);
    scrollbar-width: none;
    &:hover {
        scrollbar-width: thin;
    }
`
const ChapterNavigation = styled.div`
    display: flex;
    margin-right: 60px;
`
const ChapterImage = styled.img`
    margin-top: 44px;
    overflow: scroll;
    position: sticky;
    top: 90px;
    width: 179px;
    height: 254px;
`

const ChapterTitle = styled.div`
    font-size: 45px;
    color: #101010;
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
    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.2);
        border-radius: 2px;
        background-color: rgba(0, 0, 0, 0);
    }
    &::-webkit-scrollbar {
        width: 3px;
        background-color: rgba(0, 0, 0, 0.1);
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 3px;
        box-shadow: inset 0 0 11px rgba(0, 0, 0, 0.2);
        background-color: #6c63ff;
    }
`
const ReaderScreen: React.FC<ReaderScreenProps> = ({fontSize, content, chapter, mode}) => {
    const selectedChapter = content.chapters[chapter]
    const subsections = selectedChapter.subsections!

    return (
        <Screen>
            <Media query="(min-width: 1025px)" render={() => <MainMenu chapter={chapter} />} />

            <ReaderComponent>
                <Media
                    query="(min-width: 1025px)"
                    render={() => (
                        <ChapterNavigation>
                            <ChapterImage src={ChapterImg} />
                            <ChapterListComponent mode={mode}>
                                {content.chapters.map((section, index) => (
                                    <NavigationItem
                                        key={section.short_title}
                                        section={section}
                                        chapter={index + 1}
                                        mode={mode}
                                    />
                                ))}
                            </ChapterListComponent>
                        </ChapterNavigation>
                    )}
                />
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
        </Screen>
    )
}

export default ReaderScreen
