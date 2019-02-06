import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './navigation.css'
import NavigationItem from '../../Views/NavigationItem/NavigationItem';
import Overlay  from '../../Views/Overlay/Overlay';

class Navigation extends Component {

    handleNavigation = () => {
      const {navigation, toggle} = this.props
      toggle(navigation)
    }

    render() {
      const {navigation, content} = this.props
      const  overlayVisibility = (navigation === "open")?  "visible" : "hidden";
        return (
            <>
            <nav className={navigation} >
                    <div className="nav-header">
                        <h2 className="nav-heading">Essential Drugs and Medicines List in Zimbabwe</h2>
                        <Link className="nav-header-btn" to="/">Home</Link>
                        <Link className="nav-header-btn" to="/information">Information</Link>
                        <Link className="nav-header-btn" to="/settings">Settings</Link>
                    </div>
                    <div className="tab-content">
                        { content.chapters.map( (section ,  index ) => (
                            <NavigationItem clicked={this.handleNavigation} key={index} section={section} chapter={index + 1} />
                        ))}
                     </div>
            </nav>
            <Overlay visibility={overlayVisibility} dismiss={this.handleNavigation}/>
            </>
        );
    }
}

export default Navigation;
