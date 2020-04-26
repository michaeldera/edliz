import React from 'react'
import {IEdlizStore} from '../../stores/EdlizStore'
import styled from 'styled-components'

interface PreferenceButtonProps extends Pick<IEdlizStore, 'preferences' | 'togglePreferences' | 'mode'> {}

const Button = styled.button`
    position: fixed;
    width: 36px;
    height: 36px;
    bottom: 10px;
    right: 10px;
    border: none;
    padding: 8px;
    border-radius: 50%;
    border: none;
    z-index: 998;
    background-color: #6c63ff;
    &:focus {
        outline: none;
    }
`
const PreferenceButton: React.FC<PreferenceButtonProps> = ({preferences, togglePreferences, mode}) => {
    return (
        <>
            <Button onClick={() => togglePreferences(preferences)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path
                        stroke={mode === 'night' ? '#2a2a2a' : '#fff'}
                        fill="#6c63ff"
                        strokeWidth="1.5px"
                        d="M3.94 6.5L2.22 3.64l1.42-1.42L6.5 3.94c.52-.3 1.1-.54 1.7-.7L9 0h2l.8 3.24c.6.16 1.18.4 1.7.7l2.86-1.72 1.42 1.42-1.72 2.86c.3.52.54 1.1.7 1.7L20 9v2l-3.24.8c-.16.6-.4 1.18-.7 1.7l1.72 2.86-1.42 1.42-2.86-1.72c-.52.3-1.1.54-1.7.7L11 20H9l-.8-3.24c-.6-.16-1.18-.4-1.7-.7l-2.86 1.72-1.42-1.42 1.72-2.86c-.3-.52-.54-1.1-.7-1.7L0 11V9l3.24-.8c.16-.6.4-1.18.7-1.7zM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                    />
                </svg>
            </Button>
        </>
    )
}

export default PreferenceButton
