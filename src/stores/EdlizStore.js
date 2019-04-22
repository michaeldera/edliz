import React from 'react'
import {observable, action, decorate } from 'mobx'
import { book } from '../Data/data'

class EdlizStore {
  fontSize = 11
  navigation = 'closed'
  mode = 'day';
  preferences = 'closed'
  books = book

  togglePreferences = (preferences) => {
    if (this.navigation === 'open') {
      this.toggleNavigationPanel()
    }
    this.preferences = preferences === 'open' ? 'closed' : 'open'
  }

  toggleNavigationPanel = navigation =>{
    if (this.preferences === "open") {
      this.togglePreferences();
    }
    this.navigation = navigation === 'open' ? 'closed' : 'open'
  }

  toggleMode = mode => {
    this.mode = mode === "night" ? "day" : "night"
  }

  fontSizeChange = fontSize =>{
    this.fontSize = fontSize
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
