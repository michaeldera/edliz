import React from 'react';
import Header from '../../Views/Header/Header';
import Navigation from '../Navigation/Navigation';
import PreferenceButton from '../../Views/PreferenceButton/PreferenceButton';
import Preferences from '../Preferences/Preferences';

export default class Reader extends React.Component{
    
    constructor(props){
        super(props);
    }

    render () {
        return(
            <>
                <Navigation content={this.state.book.contents} navigate={this.navigateToSection} status={this.state.navigation} toggle={() => this.toggleNavigation} />
                <Header title={this.state.activeContent.short_title} toggle={() => this.toggleNavigation} />   
                <Preferences status={this.state.preferences} mode={this.state.mode} fontSize={this.state.fontSize} handleFontSizeChange={(e) => this.handleFontSizeChange}  toggleMode={()=>this.toggleMode}  toggle={() => this.togglePreferences} />
                <PreferenceButton toggle={() => this.togglePreferences} />
            </>
        )
    }
}