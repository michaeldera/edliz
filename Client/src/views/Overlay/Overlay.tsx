import React from 'react'
import styled from 'styled-components'

interface OverlayProps {
    dismiss: () => void
    visibility: string
}

const OverlayContainer = styled.div<{visibility: string}>`
    background-color: #21d4fd;
    background-image: linear-gradient(19deg, #21d4fd 0%, #b721ff 100%);
    opacity: 0.1;
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 998;
    visibility: ${(props) => props.visibility};
`
const Overlay: React.FC<OverlayProps> = ({visibility, dismiss}) => (
    <OverlayContainer visibility={visibility} onClick={dismiss} />
)

export default Overlay
