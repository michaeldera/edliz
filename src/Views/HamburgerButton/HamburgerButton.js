import React from 'react'
import bars from './menu.svg'
import './hamburgerbutton.css'

export default class HamburgerButton extends React.Component {
    render(){            
        return (
            <button onClick={this.props.action} className="hamburger-button">
                <img src={bars} alt="bars"/>
            </button>
        )
    }
}