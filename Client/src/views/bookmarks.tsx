import React from 'react';
import { Stack, Text, Image, IStackTokens, IStackItemStyles, ActionButton, IconButton, } from '@fluentui/react';
import { useRecoilState } from 'recoil';
import { bookmarksState } from '../utils';
import { useHistory } from 'react-router-dom';
import { add_bookmarks } from '../assets';
import { IChapter, book } from '../data/data';


const chapters = book.contents.chapters;

export const Bookmarks = () => {
    const [bookmarks, setBookmarks] = useRecoilState(bookmarksState)
    let history = useHistory();

    const stackTokens: IStackTokens = {
        childrenGap: 40, 
        padding: '10vw'
    } 

    const graphicStackTokens: IStackTokens = {
        childrenGap: 20,
    }
    const controlStackStyle: IStackItemStyles = {
        root: [{
            paddingTop: 15,
        }]
    }

    const imageStyle: React.CSSProperties = {
        width: 'min(360px, 80%)',
        paddingTop: 15,
        paddingBottom: 15
    }

    const handleBackClick = () => {
        history.goBack();
    }

    const listStackTokens: IStackTokens = {
        childrenGap: 20
    }

    const bookmarksExist: boolean = bookmarks.length > 0;

    return (
        <Stack tokens={stackTokens}>
            <Text variant="xxLarge">Bookmarks</Text>
            {bookmarksExist ?
                <Stack tokens={listStackTokens}>
                    {bookmarks.map((bookmark: IChapter) => (
                        <BookmarkItem chapter={bookmark}/>
                    ))}
                </Stack>
                :
                <Stack tokens={graphicStackTokens}>
                    <Image src={add_bookmarks} alt="Artwork" style={imageStyle} />
                    <Text>No bookmarks have been added yet. When you add them they will appear here.</Text>
                </Stack>
            }
            <Stack horizontal styles={controlStackStyle} verticalAlign="end"  grow>
                <ActionButton text="Go back" iconProps={{ iconName: "NavigateBack" }} onClick={handleBackClick} />
            </Stack>
        </Stack>
    )
}



interface IBookmarkItemProps {
    chapter : IChapter
}

const BookmarkItem = ({ chapter }: IBookmarkItemProps) => {
    const [bookmarks, setBookmarks] = useRecoilState(bookmarksState)
    let history = useHistory();

    const handleBookmarkClick = () => {
        const chapterNumber = chapters.indexOf(chapter) + 1;
        history.push(`/chapters/${chapterNumber}`)
    }

    const handleBookmarkDelete = () => {
        setBookmarks(bookmarks.filter(bookmark => bookmark !== chapter));
    }

    return (
        <Stack horizontal verticalAlign="center">
            <Stack onClick={handleBookmarkClick}>
                <Text variant="smallPlus">{chapter.short_title}</Text>
                <Text>{chapter.long_title}</Text>
            </Stack>
            <Stack grow horizontalAlign="end">
                <IconButton iconProps={{ iconName: "Delete" }} onClick={handleBookmarkDelete} />
            </Stack>
        </Stack>
    )
}
