import React from 'react';
import Header from './Views/Header/Header';
import { BrowserRouter, Route, Link } from "react-router-dom";
import ReaderScreen from './Views/ReaderScreen/ReaderScreen';
import PreferenceButton from './Views/PreferenceButton/PreferenceButton';
import { bookContents } from './Data/data'
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Preferences from './Components/Preferences/Preferences';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fontSize: 11, navigation: "closed", mode:"day", preferences: "closed", book: bookContents(), activeContent: bookContents().contents.chapters[0] }
    this.toggleNavigation = this.toggleNavigation.bind(this);
    this.togglePreferences = this.togglePreferences.bind(this);
    this.navigateToSection = this.navigateToSection.bind(this);
    this.handleFontSizeChange = this.handleFontSizeChange.bind(this);
    this.toggleMode = this.toggleMode.bind(this);
  }

  //toggle the navigation pane between being open or closed
  toggleNavigation() {
    if (this.state.preferences === "open") {
      this.togglePreferences();
    }
    this.setState({ navigation: (this.state.navigation === "open") ? "closed" : "open" });
  }

  navigateToSection(section){
    this.setState({ 
      activeContent : section, 
      navigation:"closed"
    });
  }

  //Handles changes in font size for the reading screen across the application 
  handleFontSizeChange(e){
    this.setState({fontSize: e.target.value});
  }


  //toggle the state of the preferences pane between closed and open
  togglePreferences() {
    if (this.state.navigation === "open") {
      this.toggleNavigation();
    }
    this.setState({ preferences: (this.state.preferences === "open") ? "closed" : "open" });
  }

  toggleMode(){
    this.setState({ mode: (this.state.mode === "night") ? "day" : "night" });
  }

  render() {
    let foo =  <ReaderScreen content={this.state.activeContent.content}/>
    return (
      <div className={"App " + this.state.mode} >
        <Navigation content={this.state.book.contents} navigate={this.navigateToSection} status={this.state.navigation} toggle={() => this.toggleNavigation} />
        <Header title={this.state.activeContent.short_title} toggle={() => this.toggleNavigation} />
        <BrowserRouter>
          <div style={{fontSize: this.state.fontSize + 'pt'}}>
            <Route exact path="/" component={() => {return foo}}/>
            <Route path="/chapter/:chapterNumber" component={readerWithContent}/>
          </div>
        </BrowserRouter>
        <PreferenceButton toggle={() => this.togglePreferences} />
        <Preferences status={this.state.preferences} mode={this.state.mode} fontSize={this.state.fontSize} handleFontSizeChange={(e) => this.handleFontSizeChange}  toggleMode={()=>this.toggleMode}  toggle={() => this.togglePreferences} />
      </div>
    );
  }
}


function readerWithContent({match}) {
  let num = parseInt(match.params.chapterNumber) - 1;
  let bar = bookContents().contents.chapters[num].content;
  console.log(bar);

  return <ReaderScreen  content={bar} />
}