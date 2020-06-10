// LocalStorage
export function getItem(key: string) {
    return window.localStorage.getItem(key)
}

export function setItem(key: string, value: string) {
    window.localStorage.setItem(key, value)
}

// Addressbar
export function setAddressBarColor(color: string) {
    const themeColorMetatag: any = document.querySelector('meta[name=theme-color]')
    themeColorMetatag.setAttribute('content', color)
}
