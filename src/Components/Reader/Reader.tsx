import React, { ReactNode } from 'react';
import Navigation from '../Navigation/Navigation';
import PreferenceButton from '../../Views/PreferenceButton/PreferenceButton';
import ReaderScreen from '../../Views/ReaderScreen/ReaderScreen';
import Preferences from '../Preferences/Preferences';
import { book } from '../../Data/data'
import { inject, observer } from "mobx-react";
import HamburgerButton from '../../Views/HamburgerButton/HamburgerButton';
import { EdlizStore, IEdlizStore } from '../../stores/EdlizStore';

interface ReaderProps {
  EdlizStore: IEdlizStore
}

class Reader extends React.Component<ReaderProps>  {
  render(){
    const {EdlizStore} = this.props
    const { toggleNavigationPanel, togglePreferences, fontSizeChange, toggleMode, mode, books, navigation, preferences, fontSize, chapter } = EdlizStore;
  
    return (
      <div className={mode}>
        <HamburgerButton IsActive={navigation === "open" ? true : false} action={() => toggleNavigationPanel(navigation)} />
        <Navigation
          content={books.contents}
          navigation={navigation}
          current={book.contents.chapters[chapter]}
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
          style={{ fontSize: fontSize + 'pt' }}
          content={book.contents.chapters[chapter]}
        />
        <PreferenceButton
          mode={mode}
          preferences={preferences}
          toggle={togglePreferences}
        />
      </div>
    );
  }
})
export default inject('EdlizStore')(Reader)
