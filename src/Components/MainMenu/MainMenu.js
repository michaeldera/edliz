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
            <>
                {reader && (
                    <button type="button" className="btn-toggle-nav" onClick={this.handleNavigation}>
                        <img src={menu} alt="menu" />
                    </button>
                )}
                <ul className="menu-list">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/chapters/1">Start Reading</Link>
                    </li>
                    <li>
                        <Link to="/information">About this Project</Link>
                    </li>
                </ul>
            </>
        )
    }
}
