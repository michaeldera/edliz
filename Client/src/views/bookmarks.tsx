import React from 'react';
import { Stack, Text, Image, IStackTokens, IStackItemStyles, DefaultButton,  ActionButton, PrimaryButton } from '@fluentui/react';
import { useRecoilState } from 'recoil';
import { bookmarksState } from '../utils';
import { useHistory } from 'react-router-dom';
import { add_bookmarks } from '../assets';

export const Bookmarks = () => {
    let history = useHistory();
    const [bookmarks, setBookmarks] = useRecoilState(bookmarksState)
  

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

    const bookmarksExist: boolean = bookmarks.length > 0;

    return (
        <Stack tokens={stackTokens}>
            <Text variant="xxLarge">Bookmarks</Text>
            {bookmarksExist ?
                bookmarks.map((bookmark: any) => (<p>Bookmark thing</p>))
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

