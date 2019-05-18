import React from 'react'
import bars from './menu.svg'

export default class HamburgerButton extends React.Component {
    render(){            
        return (
            <button style={{position:"fixed", top: 0, left:0, zIndex: 99999, border: "none", padding: 16, margin:0, boxSizing: "border-box", background: "#fff", width: 50, height: 50, top: 0, left: 0}} onClick={this.props.action} className="btn-toggle-nav">
                <img src={bars} alt="bars"/>
            </button>
        )
    }
}