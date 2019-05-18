import React from 'react'
import {Link} from 'react-router-dom'
import './MainMenu.css'
import HamburgerButton from '../../Views/HamburgerButton/HamburgerButton';

export default class MainMenu extends React.Component {
    constructor(props){
        super(props);
        this.state = { visible: false };
        this.toggleNavigation = this.toggleNavigation.bind(this);
    }

    toggleNavigation = () => {
        this.setState((state) => ({
            visible: !state.visible
        }));
    }

    render () {
        return (
            <header className={this.state.visible? "nav-on": "nav-off"}>  
                <HamburgerButton action={this.toggleNavigation}/>
                 <div className="main-nav">
                    <Link to="/">Home</Link>
                    <Link to="/chapters/1">Start Reading</Link>
                    <Link to="/information">About this Project</Link>
                 </div>
            </header>
        )
    }
}