import { atom } from 'recoil';
import { book, IChapter } from '../data/data';

const bookmarks: IChapter[] = []

export const navigationPanelIsOpenState = atom({ key: 'navigationPanelIsOpenState', default: false });
export const fontSizeState = atom({ key: 'fontSizeState', default: 12 });
export const isNightModeState = atom({ key: 'isNightModeState', default: false });
export const bookmarksState = atom({ key: 'bookmarksState', default: bookmarks });
export const currentChapterState = atom({ key: 'currentChapterState', default: book.contents.chapters[0] }); 