import React from 'react'
import {Link} from 'react-router-dom'
import './MainMenu.css'
import HamburgerButton from '../../Views/HamburgerButton/HamburgerButton';

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