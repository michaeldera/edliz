import React from 'react'
import {book} from '../data/data'
import { getTheme, Stack } from '@fluentui/react'
import { Navigation, Header, Article } from '../components';


interface IReaderProps {
    chapter: number
}


const theme = getTheme();

export const Reader  = ({chapter }: IReaderProps) => {

    const style: React.CSSProperties = {
        backgroundColor: theme.semanticColors.disabledBackground,
        margin:0,
    }
    return (
        <main style={style}>
            <Navigation/>
            <Stack>
                <Header toggleNavigation={() => { }}/>
                <Article content={book.contents} chapter={chapter}/>
            </Stack>
        </main>
    )
}

