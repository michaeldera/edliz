import React from 'react';
import Header from '../../Views/Header/Header';
import Navigation from '../Navigation/Navigation';
import PreferenceButton from '../../Views/PreferenceButton/PreferenceButton';
import ReaderScreen from '../../Views/ReaderScreen/ReaderScreen';
import Preferences from '../Preferences/Preferences';
import { book } from '../../Data/data'
import { inject, observer } from "mobx-react";
import EdlizStore from "../../stores/EdlizStore";

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
    } = this.props.EdlizStore
    return(
      <div className={mode}>
        <Navigation
          content={books.contents}
          navigation={navigation}
          toggle={toggleNavigationPanel}
        />
        <Header
          title={books.contents.chapters[this.props.chapter].short_title}
          toggle={toggleNavigationPanel}
          navigation={navigation}
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
          content={book.contents.chapters[this.props.chapter]}
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
