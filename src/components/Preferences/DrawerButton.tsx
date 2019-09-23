import React from 'react'
import styled from 'styled-components'
// import EventType from './Preferences'

type EventType = React.TouchEvent<HTMLDivElement>

const Button = styled.div`
    background-color: #6c63ff;
    border-radius: 4px;
    display: block;
    height: 6px;
    margin: 1rem auto 2.8rem auto;
    width: 2.6rem;
`

interface DrawerButtonProps {
    action: () => void
    onDragAction: (event: EventType) => void
}

const DrawerButton: React.FC<DrawerButtonProps> = ({action, onDragAction}) => (
    <Button onClick={action} onTouchStart={onDragAction} />
)

export {DrawerButton}
