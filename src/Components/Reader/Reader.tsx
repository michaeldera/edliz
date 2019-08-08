import React from 'react';
import Navigation from '../Navigation/Navigation';
import PreferenceButton from '../../Views/PreferenceButton/PreferenceButton';
import ReaderScreen from '../../Views/ReaderScreen/ReaderScreen';
import Preferences from '../Preferences/Preferences';
import { book } from '../../Data/data';
import { inject, observer } from 'mobx-react';
import HamburgerButton from '../../Views/HamburgerButton/HamburgerButton';
import { IMobxStore } from '../../App';

interface ReaderProps extends IMobxStore {
    chapter: number;
}
//
const Reader: React.FC<ReaderProps> = ({ EdlizStore, chapter }) => {
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
    } = EdlizStore!;
    return (
        <div className={mode}>
            <HamburgerButton
                IsActive={navigation === 'open' ? true : false}
                onClick={() => toggleNavigationPanel(navigation)}
            />
            <Navigation
                content={books.contents}
                navigation={navigation}
                current={book.contents.chapters[chapter]}
                toggleNavigationPanel={toggleNavigationPanel}
            />
            <Preferences
                preferences={preferences}
                mode={mode}
                fontSize={fontSize}
                fontSizeChange={fontSizeChange}
                toggleMode={toggleMode}
                togglePreferences={togglePreferences}
            />
            <ReaderScreen style={{ fontSize: fontSize + 'pt' }} content={book.contents.chapters[chapter]} />
            <PreferenceButton mode={mode} preferences={preferences} togglePreferences={togglePreferences} />
        </div>
    );
};
export default inject('EdlizStore')(observer(Reader));
