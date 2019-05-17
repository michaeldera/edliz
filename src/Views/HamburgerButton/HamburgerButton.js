import React from 'react'
import bars from '../../Assets/Icons/menu.svg'

export default class HamburgerButton extends React.Component {
    render(){
        return (
            <button style={{position:"absolute", top: 0, left: 0}} className="btn-toggle-nav">
                <img src={bars} alt="bars"/>
            </button>
        )
    }
}