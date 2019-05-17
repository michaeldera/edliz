import React from 'react'
import {Link} from 'react-router-dom'
import './MainMenu.css'
import bars from '../../Assets/Icons/menu.svg'

export default class MainMenu extends React.Component {
    render () {
        return (
            <header>    
                <HamburgerButton/>             
                 <nav>
                    <Link to="/">Home</Link>
                    <Link to="/chapters/1">Start Reading</Link>
                    <Link to="/information">About this Project</Link>
                 </nav>
            </header>
        )
    }
}

class HamburgerButton extends React.Component {
    render(){
        return (
            <button style={{position:"absolute", top: 0, left: 0}} className="btn-toggle-nav">
                    <img src={bars} alt="bars"/>
            </button>
        )
    }
}