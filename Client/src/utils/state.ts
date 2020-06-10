import { atom } from 'recoil';

export const navigationPanelIsOpenState = atom({ key: 'navigationPanelIsOpenState', default: false });
export const fontSizeState = atom({ key: 'fontSizeState', default: 12 });
export const isNightModeState = atom({ key: 'isNightModeState', default: false });
export const bookmarksState = atom({ key: 'bookmarksState', default: []})