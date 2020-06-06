import React from 'react'
import Navigation from '../Navigation/Navigation'
import ReaderScreen from '../../views/ReaderScreen/ReaderScreen'
import {book} from '../../data/data'
import {inject, observer} from 'mobx-react'
import {IMobxStore} from '../../App'
import { Header } from '../header'
import { getTheme, Stack } from '@fluentui/react'

interface ReaderProps extends IMobxStore {
    chapter: number
}


const theme = getTheme();

const Reader: React.FC<ReaderProps> = ({EdlizStore, chapter}) => {
    const { toggleNavigationPanel, mode, books, navigation, fontSize } = EdlizStore!

    const style: React.CSSProperties = {
        backgroundColor: theme.semanticColors.disabledBackground,
        margin:0,
    }
    return (
        <main style={style} className={mode}>
            <Navigation content={books.contents} navigation={navigation} current={book.contents.chapters[chapter]} toggleNavigationPanel={toggleNavigationPanel}
                mode={mode}
            />
            <Stack>
                <Header  toggleNavigation={() => toggleNavigationPanel(navigation)}/>
                <ReaderScreen fontSize={fontSize} content={book.contents} chapter={chapter} mode={mode} />
            </Stack>
        </main>
    )
}
export default inject('EdlizStore')(observer(Reader))
