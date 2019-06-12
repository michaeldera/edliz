import React from 'react'
import './hamburgerbutton.css'

export default class HamburgerButton extends React.Component {
    render(){            
        return (
            <button onClick={this.props.action} className="hamburger-button">
                <svg fill="#6c63ff"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                </svg>
            </button>
        )
    }
}