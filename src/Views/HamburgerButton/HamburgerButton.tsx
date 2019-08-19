import React from 'react'
import './hamburgerbutton.css'
import styled from 'styled-components'

interface HamburgerProps {
    IsActive?: boolean
    onClick: () => void
}

const Button = styled.button`
    position: fixed;
    top: 0;
    left: 0;
    border: none;
    z-index: 99999;
    padding: 16px;
    margin: 0;
    box-sizing: 'border-box';
    background-color: #fff;
    width: 50px;
    height: 50px;
    outline: none;
    border-radius: 50%;
`
const HamburgerButton: React.FC<HamburgerProps> = ({onClick, IsActive}) => {
    return (
        <Button onClick={onClick} style={{borderRadius: IsActive ? 0 : '50%'}} className="hamburger-button">
            <svg fill="#6c63ff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                {IsActive ? (
                    <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                ) : (
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                )}
            </svg>
        </Button>
    )
}

export default HamburgerButton
