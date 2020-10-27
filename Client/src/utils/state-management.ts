import { atom } from 'recoil';
import { book, IChapter } from '../data/data';
import { BOOKMARKS_STORE } from './config';

let bookmarks: IChapter[] = [];

const initialiseState = async () => {
    const _bookmarks = localStorage.getItem(BOOKMARKS_STORE);
    bookmarks = _bookmarks ? JSON.parse(_bookmarks) : bookmarks;
}
initialiseState();

export const navigationPanelIsOpenState = atom({ key: 'navigationPanelIsOpenState', default: false });
export const fontSizeState = atom({ key: 'fontSizeState', default: 12 });
export const isNightModeState = atom({ key: 'isNightModeState', default: false });
export const bookmarksState = atom({ key: 'bookmarksState', default: bookmarks });
export const currentChapterState = atom({ key: 'currentChapterState', default: book.contents.chapters[0] });
export const bookState = atom({ key: 'bookState', default: book });

