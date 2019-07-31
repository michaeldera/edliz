import React from 'react'
import {Link} from 'react-router-dom'
import Media from 'react-media'
import './MainMenu.css'
import home from './home.svg'
import read from './read.svg'
import info from './information.svg'
import HamburgerButton from '../../Views/HamburgerButton/HamburgerButton';

export default class MainMenu extends React.Component<any, any> {
    constructor(props: any){
        super(props);
        this.state = { visible: false };
        this.toggleNavigation = this.toggleNavigation.bind(this);
    }

    toggleNavigation = () => {
        this.setState((state: any) => ({
            visible: !state.visible
        }));
    }

    render () {
        return (
            <header className={this.state.visible? "nav-on": "nav-off"}>  
            <Media query="(max-width: 780px)" render={() => <HamburgerButton action={this.toggleNavigation}/>} />
                 <div className="main-nav">
                    <Link to="/"><img src={home} alt="information icon"/>Home</Link>
                    <Link to="/chapters/1"><img src={read} alt="information icon" />Start Reading</Link>
                    <Link to="/information"><img src={info} alt="information icon" />About this Project</Link>
                 </div>
            </header>
        )
    }
}