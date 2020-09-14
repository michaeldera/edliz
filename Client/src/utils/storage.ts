import { DATABASE_VERSION, DATABASE_NAME, BOOKMARKS_STORE } from './config';
import { openDB, DBSchema, IDBPDatabase } from 'idb';
import { IChapter } from '../data/data';


interface IEdlizDB extends DBSchema {
    bookmarks: {
        value: IChapter;
        key: string;
    }
}
const getDatabase = async () => {
    await openDB<IEdlizDB>(DATABASE_NAME, DATABASE_VERSION, {
        upgrade(db) {
            db.createObjectStore(BOOKMARKS_STORE);
        }
    }).then((db) => {
        return db;
    });
}

export const database = await getDatabase();



