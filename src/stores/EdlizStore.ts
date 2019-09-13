import {observable, action, decorate} from 'mobx'
import {book, IBooks} from '../Data/data'
import {setAddressBarColor, setItem, getItem} from '../helpers'

const nightModeAddressBarColor = '#32303e'
const defaultAddressBarColor = '#0093e9'

type modeType = 'day' | 'night'
const modeFromLS = getItem('mode')

const fontSizeFromLS = getItem('font-size')

export interface IEdlizStore {
    fontSize: number
    navigation: string
    mode: string
    books: IBooks
    preferences: string
    togglePreferences(preferences: string): void
    toggleMode(mode: string): void
    fontSizeChange(fontSize: number): void
    toggleNavigationPanel(navigation: string): void
}

export class EdlizStore implements IEdlizStore {
    fontSize = fontSizeFromLS ? Number(fontSizeFromLS) : 11
    navigation = 'closed'
    mode = modeFromLS ? modeFromLS : 'day'
    preferences = 'closed'
    books = book

    // function toggles the Preference Panel. First it checks if the Navigation Panel is open (and closes it if it is). After that it toggles the state of the Preference panel.
    togglePreferences = (preferences: 'open' | 'closed') => {
        if (this.navigation === 'open') {
            this.navigation = 'closed'
        }
        this.preferences = preferences === 'open' ? 'closed' : 'open'
    }

    // function toggles the Navigation Panel. First it checks if the Preferences Panel is open (and closes it if it is). After that it toggles the state of the  Navigation panel.
    toggleNavigationPanel = (navigation: 'open' | 'closed') => {
        if (this.preferences === 'open') {
            this.preferences = 'closed'
        }
        this.navigation = navigation === 'open' ? 'closed' : 'open'
    }

    toggleMode = (mode: modeType) => {
        this.mode = mode === 'night' ? 'day' : 'night'
        setItem('mode', this.mode)

        setAddressBarColor(this.mode === 'night' ? nightModeAddressBarColor : defaultAddressBarColor)
    }

    fontSizeChange = (fontSize: number) => {
        this.fontSize = fontSize
        setItem('font-size', this.fontSize.toString())
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
    fontSizeChange: action,
})

const store = new EdlizStore()
export default store
