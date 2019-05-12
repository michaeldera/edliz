import React from 'react'
import {Link} from 'react-router-dom'
import './MainMenu.css'

export default class MainMenu extends React.Component {
    render () {
        return (
            <div className= "header">
                 <div className="menu-list">
                    <Link to="/">Home</Link>
                    <Link to="/chapters/1">Start Reading</Link>
                    <Link to="/information">About this Project</Link>
                 </div>
            </div>
        )
    }
}