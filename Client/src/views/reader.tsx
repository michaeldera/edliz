import React from 'react'
import { book } from '../data/data'
import { useParams } from 'react-router-dom';
import { getTheme, Stack } from '@fluentui/react'
import { Navigation, Header, Article } from '../components';

const theme = getTheme();

export const Reader = () => {
    const { chapterNumber } = useParams();
    const chapter = book.contents.chapters[chapterNumber - 1]

    const style: React.CSSProperties = {
        backgroundColor: theme.semanticColors.disabledBackground,
        margin:0,
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

