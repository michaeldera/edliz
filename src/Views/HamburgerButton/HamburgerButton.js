import React from 'react'
import bars from './menu.svg'
import './hamburgerbutton.css'

export default class HamburgerButton extends React.Component {
    render(){            
        return (
            <button className="hamburger-button" onClick={this.props.action} className="btn-toggle-nav">
                <img src={bars} alt="bars"/>
            </button>
        )
    }
}