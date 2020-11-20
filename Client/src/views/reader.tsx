import React, { useEffect } from 'react'
import { book } from '../data/data'
import { useParams } from 'react-router-dom';
import { getTheme, Stack } from '@fluentui/react'
import { Navigation, Header, Article } from '../components';
import { useRecoilState } from 'recoil';
import { currentChapterState } from '../utils';

const theme = getTheme();

export const Reader = () => {
    // @ts-ignore
    const { chapterNumber } = useParams();
    const [chapter, setChapter] = useRecoilState(currentChapterState)

    useEffect(() => {
        setChapter(book.contents.chapters[chapterNumber - 1])
    }, [chapterNumber]);

    const style: React.CSSProperties = {
        backgroundColor: theme.semanticColors.disabledBackground,
        margin: 0,
        overflow: 'scroll'
    }

    return (
        <main style={style}>
            <Navigation/>
            <Stack>
                <Header/>
                <Article chapter={chapter}/>
            </Stack>
        </main>
    )
}

