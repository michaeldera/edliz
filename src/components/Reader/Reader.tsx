import React from 'react'
import Navigation from '../Navigation/Navigation'
import PreferenceButton from '../../views/PreferenceButton/PreferenceButton'
import ReaderScreen from '../../views/ReaderScreen/ReaderScreen'
import Preferences from '../Preferences/Preferences'
import {book} from '../../data/data'
import {inject, observer} from 'mobx-react'
import HamburgerButton from '../../views/HamburgerButton/HamburgerButton'
import {IMobxStore} from '../../App'
import Media from 'react-media'

interface ReaderProps extends IMobxStore {
    chapter: number
}

const Reader: React.FC<ReaderProps> = ({EdlizStore, chapter}) => {
    const {
        toggleNavigationPanel,
        togglePreferences,
        fontSizeChange,
        toggleMode,
        mode,
        books,
        navigation,
        preferences,
        fontSize,
    } = EdlizStore!

    return (
        <div className={mode}>
            <Media
                query="(max-width: 1024px)"
                render={() => (
                    <HamburgerButton
                        IsActive={navigation === 'open' ? true : false}
                        onClick={() => toggleNavigationPanel(navigation)}
                    />
                )}
            />
            <Navigation
                content={books.contents}
                navigation={navigation}
                current={book.contents.chapters[chapter]}
                toggleNavigationPanel={toggleNavigationPanel}
                mode={mode}
            />
            <Preferences
                preferences={preferences}
                mode={mode}
                fontSize={fontSize}
                fontSizeChange={fontSizeChange}
                toggleMode={toggleMode}
                togglePreferences={togglePreferences}
            />
            <ReaderScreen fontSize={fontSize} content={book.contents} chapter={chapter} mode={mode} />
            <PreferenceButton mode={mode} preferences={preferences} togglePreferences={togglePreferences} />
        </div>
    )
}
export default inject('EdlizStore')(observer(Reader))
