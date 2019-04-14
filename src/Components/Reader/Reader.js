import React from 'react'
import {inject, observer} from 'mobx-react'
import {toJS} from 'mobx'
import NavigationPanel from '../NavigationPanel/NavigationPanel'
import PreferenceButton from '../../Views/PreferenceButton/PreferenceButton'
import ScrollTopDown from "../ScrollTopDown/ScrollTopDown"
import ReaderScreen from '../../Views/ReaderScreen/ReaderScreen'
import Preferences from '../Preferences/Preferences'
import MainMenu from '../MainMenu/MainMenu'
import {book} from '../../Data/data'

class Reader extends React.Component {
    componentWillMount() {
        const {EdlizStore: {toggleNavigationPanel, togglePreferences}} = this.props
        toggleNavigationPanel('open')
        togglePreferences('open')
    }

    render() {
        const {EdlizStore, chapter} = this.props
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
        } = toJS(EdlizStore)
        return (
            <div className={mode}>
                <MainMenu toggle={toggleNavigationPanel} navigation={navigation} reader />
                <NavigationPanel content={books.contents} navigation={navigation} toggle={toggleNavigationPanel} />
                <Preferences
                    preferences={preferences}
                    mode={mode}
                    fontSize={fontSize}
                    fontSizeChange={fontSizeChange}
                    toggleMode={toggleMode}
                    toggle={togglePreferences}
                />
                <ReaderScreen
                    style={{fontSize: `${fontSize}pt`}}
                    chapter={book.contents.chapters[chapter]}
                    content={books.contents}
                    navigation={navigation}
                    toggle={toggleNavigationPanel}
                    title={books.contents.chapters[chapter].short_title}
                />
                <ScrollTopDown preferences={preferences} toggle={togglePreferences} />
                <PreferenceButton preferences={preferences} toggle={togglePreferences} />
            </div>
        )
    }
}
export default inject('EdlizStore')(observer(Reader))
