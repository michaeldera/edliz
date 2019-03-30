import React from 'react'
import {Link} from 'react-router-dom'
import './MainMenu.css'
import menu from '../../Assets/Icons/navigation.svg'

export default class MainMenu extends React.Component {
    handleNavigation = () => {
        const {navigation, toggle} = this.props
        toggle(navigation)
    }

    render() {
        const {reader} = this.props
        return (
            <div className='header'>
                {reader && (
                    <button type="button" className="btn-toggle-nav" onClick={this.handleNavigation}>
                        <img src={menu} alt="menu" />
                    </button>
                )}
                <div className="menu-list">
                    <Link to="/">Home</Link>
                    <Link to="/chapters/1">Start Reading</Link>
                    <Link to="/information">About this Project</Link>
                </div>
            </div>
        )
    }
}
