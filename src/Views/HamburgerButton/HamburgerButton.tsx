import React from 'react'
import './hamburgerbutton.css'

interface HamburgerProps {
    IsActive?: boolean
    onClick: () => void
}
const HamburgerButton: React.FC<HamburgerProps> = ({onClick, IsActive}) => {
    return (
        <button onClick={onClick} style={{borderRadius: IsActive ? 0 : '50%'}} className="hamburger-button">
            <svg fill="#6c63ff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                {IsActive ? (
                    <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                ) : (
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                )}
            </svg>
        </button>
    )
}

export default HamburgerButton
