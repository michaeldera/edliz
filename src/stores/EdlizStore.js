import {observable, decorate} from 'mobx'
import {book} from '../Data/data'

class EdlizStore {
    fontSize = 11

    navigation = 'closed'

    mode = localStorage.getItem('mode') === 'night' ? 'night' : 'day'

    preferences = 'closed'

    books = book

    togglePreferences = preferences => {
        if (this.navigation === 'open') {
            this.toggleNavigationPanel()
        }
        this.preferences = preferences === 'open' ? 'closed' : 'open'
    }

    toggleNavigationPanel = navigation => {
        if (this.preferences === 'open') {
            this.togglePreferences()
        }
        this.navigation = navigation === 'open' ? 'closed' : 'open'
    }

    toggleMode = mode => {
        this.mode = mode === 'night' ? 'day' : 'night'
        localStorage.setItem('mode', this.mode)
    }

    fontSizeChange = fontSize => {
        this.fontSize = fontSize
    }
}

decorate(EdlizStore, {
    fontSize: observable,
    navigation: observable,
    mode: observable,
    preferences: observable,
    books: observable,
    togglePreferences: observable,
    toggleNavigationPanel: observable,
    toggleMode: observable,
    fontSizeChange: observable,
})

const store = new EdlizStore()

export default store
