import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './navigation.css'
import NavigationItem from '../../Views/NavigationItem/NavigationItem';
import Overlay  from '../../Views/Overlay/Overlay';


class Navigation extends Component<any, {}> {

  handleNavigation = () => {
    const {navigation, toggle} = this.props
    toggle(navigation)
  }

  render() {
    const {navigation, content, current } = this.props
    const  overlayVisibility = (navigation === "open")?  "visible" : "hidden";
    return (
      <>
        <nav className={navigation} >
          <div className="nav-header">
            <Link className="home-link" to="/">Home</Link>
            <small className="nav-meta">currently reading:</small>
            <h2 className="nav-heading">{current.long_title}</h2>
          </div>
          <div className="tab-content">
            { content.chapters.map( (section: any ,  index: any ) => (
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
