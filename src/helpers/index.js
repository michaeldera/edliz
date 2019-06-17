// LocalStorage
export function getItem(key) {
    return window.localStorage.getItem(key);
}

export function setItem(key, value) {
    window.localStorage.setItem(key, value);
}

// Addressbar
export function setAddressBarColor(color) {
    const themeColorMetatag = document.querySelector('meta[name=theme-color]');
    themeColorMetatag.setAttribute('content', color)
}