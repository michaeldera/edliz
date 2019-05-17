import React from 'react'
import bars from '../../Assets/Icons/menu.svg'

export default class HamburgerButton extends React.Component {
    render(){            
        return (
            <button style={{position:"absolute", border: "none", borderRadius:"50%", padding: 15, background: "transparent", width: 50, height: 50, top: 0, left: 0}} onClick={this.props.action} className="btn-toggle-nav">
                <img src={bars} alt="bars"/>
            </button>
        )
    }
}