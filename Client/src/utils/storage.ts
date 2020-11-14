import { DATABASE_VERSION, DATABASE_NAME, BOOKMARKS_STORE } from './config';
import { IChapter } from '../data/data';

export const database = () => {
    const _database = localStorage.getItem(DATABASE_NAME);

    return _database ? JSON.parse(_database) : {};
}
