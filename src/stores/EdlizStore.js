import {observable, action, decorate } from 'mobx'
import { book } from '../Data/data'

const modeFromLS = window.localStorage.getItem("mode");
const fontSizeFromLS = window.localStorage.getItem("font-size");

class EdlizStore {
  fontSize = fontSizeFromLS ? fontSizeFromLS : 11
  navigation = 'closed'
  mode = modeFromLS ? modeFromLS : 'day';
  preferences = 'closed'
  books = book

    // function toggles the Preference Panel. First it checks if the Navigation Panel is open (and closes it if it is). After that it toggles the state of the Preference panel.
  togglePreferences = (preferences) => {
    if (this.navigation === 'open') {
      this.navigation = 'closed';
    }
    this.preferences = preferences === 'open' ? 'closed' : 'open'
  }


  // function toggles the Navigation Panel. First it checks if the Preferences Panel is open (and closes it if it is). After that it toggles the state of the  Navigation panel.
  toggleNavigationPanel = navigation => {
    if (this.preferences === 'open') {
      this.preferences = 'closed';
    }
    this.navigation = navigation === 'open' ? 'closed' : 'open'
  }

  toggleMode = mode => {
    this.mode = mode === "night" ? "day" : "night"
    window.localStorage.setItem("mode", this.mode);
  }

  fontSizeChange = fontSize =>{
    this.fontSize = fontSize
    window.localStorage.setItem("font-size", this.fontSize);
  }

}

decorate(EdlizStore, {
  fontSize: observable,
  navigation: observable,
  mode: observable,
  preferences: observable,
  books: observable,
  togglePreferences: action,
  toggleNavigationPanel: action,
  toggleMode: action,
  fontSizeChange: action
})

const store = new EdlizStore()

export default store
