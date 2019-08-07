import React, { Component, CSSProperties } from 'react';
import styled from 'styled-components';

interface OverlayProps {
    dismiss: () => void
    visibility: string
}

const OverlayContainer = styled.div<{visibility: string}>`
    background-color: #21D4FD;
    background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);
    opacity: 0.1;
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 998;
    visibility: ${(props) => props.visibility};
`
const Overlay: React.FC<OverlayProps> = ({visibility, dismiss}) => <OverlayContainer visibility={visibility} onClick={dismiss}/>


export default Overlay 
