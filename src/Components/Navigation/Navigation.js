import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './navigation.css'
import NavigationItem from '../../Views/NavigationItem/NavigationItem';
import Overlay  from '../../Views/Overlay/Overlay';

class Navigation extends Component {
    render() {
        const  overlayVisibility = (this.props.status === "open")?  "visible" : "hidden";
        return (
            <>
            <nav className={this.props.status} >
                    <div className="nav-header">
                        <h2 className="nav-heading">Essential Drugs and Medicines List in Zimbabwe</h2>
                        <Link className="nav-header-btn" to="/">HOME</Link>
                        <Link className="nav-header-btn" to="/information">INFORMATION</Link>
                        <Link className="nav-header-btn" to="/settings">SETTINGS</Link>
                    </div>
                    <div className="tab-content">
                        { this.props.content.chapters.map( (section ,  index ) => (
                            <NavigationItem clicked={this.props.toggle()} key={index} section={section} chapter={index + 1} />
                        ))}
                     </div>           
            </nav>
            <Overlay visibility={overlayVisibility} dismiss={this.props.toggle()}/>
            </>
        );
    }
}

export default Navigation;