import React from 'react';
import Navigation from '../Navigation/Navigation';
import PreferenceButton from '../../Views/PreferenceButton/PreferenceButton';
import ReaderScreen from '../../Views/ReaderScreen/ReaderScreen';
import Preferences from '../Preferences/Preferences';
import { book } from '../../Data/data'
import { inject, observer } from "mobx-react";
import HamburgerButton from '../../Views/HamburgerButton/HamburgerButton';

interface IReaderProps {
  chapter: number;
  EdlizStore : {
    toggleNavigationPanel : Function;
    togglePreferences :Function;
    fontSizeChange: Function;
    toggleMode:Function;
    mode: 'day' | 'night';
    navigation: 'open' | 'close';
    books : any;
    fontSize: number;
    preferences: "open" | 'closed';
  };

}

class Reader extends React.Component<IReaderProps, {}>{

  componentWillMount () {
    const {toggleNavigationPanel, togglePreferences} = this.props.EdlizStore
    toggleNavigationPanel('open')
    togglePreferences('open')
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
        <HamburgerButton IsActive={ navigation === "open" ? true : false } action={()=> toggleNavigationPanel(navigation)}/>
        <Navigation
          content={books.contents}
          navigation={navigation}
          current={book.contents.chapters[this.props.chapter]}
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
          content={book.contents.chapters[this.props.chapter]}
        />
        <PreferenceButton
          mode={mode}
          preferences={preferences}
          toggle={togglePreferences}
        />
      </div>
    )
  }
}
export default inject('EdlizStore')(observer(Reader))
