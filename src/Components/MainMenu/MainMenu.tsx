import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Media from 'react-media'
import './MainMenu.css'
import home from './home.svg'
import read from './read.svg'
import info from './information.svg'
import HamburgerButton from '../../Views/HamburgerButton/HamburgerButton';

const MainMenu: React.FC = () => {

    const [showNavigation, setShowNavigation] = useState<boolean>(false)
    const toggleNavigation = () => {
        setShowNavigation(!showNavigation)
    }
    return (
        <header className={showNavigation? "nav-on": "nav-off"}>  
        <Media query="(max-width: 780px)" render={() => <HamburgerButton onClick={toggleNavigation}/>} />
             <div className="main-nav">
                <Link to="/"><img src={home} alt="information icon"/>Home</Link>
                <Link to="/chapters/1"><img src={read} alt="information icon" />Start Reading</Link>
                <Link to="/information"><img src={info} alt="information icon" />About this Project</Link>
             </div>
        </header>
    )
}

export default MainMenu