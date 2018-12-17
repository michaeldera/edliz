import React from 'react';
import Header from '../../Views/Header/Header';
import Navigation from '../Navigation/Navigation';
import PreferenceButton from '../../Views/PreferenceButton/PreferenceButton';
import ReaderScreen from '../../Views/ReaderScreen/ReaderScreen';
import Preferences from '../Preferences/Preferences';
import { bookContents } from '../../Data/data'

export default class Reader extends React.Component{
    constructor(props){
        super(props);
        let content =  bookContents().contents.chapters[props.match.params.chapterNumber - 1];
        this.state = { fontSize: 11, book: bookContents(), navigation: "closed", mode:"day", preferences: "closed" , content: content };
        this.handleFontSizeChange = this.handleFontSizeChange.bind(this);
        this.toggleNavigationPane = this.toggleNavigationPane.bind(this);
        this.togglePreferences = this.togglePreferences.bind(this);
        this.toggleMode = this.toggleMode.bind(this);

    }

    togglePreferences() {
        if (this.state.navigation === "open") {
            this.toggleNavigationPane()
        }
        this.setState({ preferences: (this.state.preferences === "open") ? "closed" : "open" });
    }

    toggleNavigationPane() {
        if (this.state.preferences === "open") {
          this.togglePreferences();
        }
        this.setState({ navigation: (this.state.navigation === "open") ? "closed" : "open" });    
      }
  
    toggleMode(){
        this.setState({ mode: (this.state.mode === "night") ? "day" : "night" });
    }
    
    handleFontSizeChange(e){
        console.log(e.target.value);
        this.setState({ fontSize: e.target.value});
    }

    render () {
        return(
            <div className={this.state.mode}>
                <Navigation content={this.state.book.contents} status={this.state.navigation} toggle={() => this.toggleNavigationPane} />
                <Header title={this.state.content.short_title} toggle={() => this.toggleNavigationPane} />   
                <Preferences status={this.state.preferences} mode={this.state.mode} fontSize={11} handleFontSizeChange={(e) => this.handleFontSizeChange}  toggleMode={()=>this.toggleMode}  toggle={() => this.togglePreferences} />
                <ReaderScreen style={{fontSize: this.state.fontSize + 'pt'}} content={this.state.content}/>   
                <PreferenceButton toggle={() => this.togglePreferences} />
            </div>
        )
    }
}