import React from 'react';
import Header from '../../Views/Header/Header';
import Navigation from '../Navigation/Navigation';
import NavigationPanel from '../NavigationPanel/NavigationPanel'
import PreferenceButton from '../../Views/PreferenceButton/PreferenceButton';
import ReaderScreen from '../../Views/ReaderScreen/ReaderScreen';
import Preferences from '../Preferences/Preferences';
import MainMenu from '../MainMenu/MainMenu'
import { book } from '../../Data/data'
import { inject, observer } from "mobx-react";
import { toJS } from 'mobx';

class Reader extends React.Component{

  componentWillMount () {
    const {toggleNavigationPanel, togglePreferences, toggleMode} = this.props.EdlizStore
    toggleNavigationPanel('open')
    togglePreferences('open')
    toggleMode('night')
  }

  render () {
    const {
      toggleNavigationPanel,
      togglePreferences,
      fontSizeChange,
      toggleMode,
      mode,
      books,
      navigation,
      preferences,
      fontSize
    } = toJS(this.props.EdlizStore)
    console.log(mode)
    return(
      <div className={mode}>
        <MainMenu
          toggle={toggleNavigationPanel}
          navigation={navigation}
          reader
        />
        <NavigationPanel
          content={books.contents}
          navigation={navigation}
          toggle={toggleNavigationPanel}
        />
        <Preferences
          preferences={preferences}
          mode={mode}
          fontSize={fontSize}
          fontSizeChange={fontSizeChange}
          toggleMode={toggleMode}
          toggle={togglePreferences}
        />
        <ReaderScreen
          style={{fontSize: fontSize + 'pt'}}
          chapter={book.contents.chapters[this.props.chapter]}
          content={books.contents}
          navigation={navigation}
          toggle={toggleNavigationPanel}
          title={books.contents.chapters[this.props.chapter].short_title}
        />
        <PreferenceButton
          preferences={preferences}
          toggle={togglePreferences}
        />
      </div>
    )
  }
}
export default inject('EdlizStore')(observer(Reader))
