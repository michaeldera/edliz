import React from 'react'
import {observable, action, computed, decorate } from 'mobx'
import { book } from '../Data/data'

class EdlizStore {
  fontSize = 11
  navigation = 'open'
  mode = 'day';
  preference = 'closed'
  books = book

}

decorate(EdlizStore, {
  fontSize: observable,
  navigation: observable,
  mode: observable,
  preference: observable,
  books: observable
})

const store = new EdlizStore()

export default store
