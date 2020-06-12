import { atom } from 'recoil';
import { book } from '../data/data';

export const navigationPanelIsOpenState = atom({ key: 'navigationPanelIsOpenState', default: false });
export const fontSizeState = atom({ key: 'fontSizeState', default: 12 });
export const isNightModeState = atom({ key: 'isNightModeState', default: false });
export const bookmarksState = atom({ key: 'bookmarksState', default: [] });
export const currentChapterState = atom({ key: 'currentChapterState', default: book.contents.chapters[0] }); 