import React, {Component} from 'react'
import './NavigationPanel.css'
import NavigationItem from '../../Views/NavigationItem/NavigationItem'
import Overlay from '../../Views/Overlay/Overlay'

class NavigationPanel extends Component {
    handleNavigation = () => {
        const {navigation, toggle} = this.props
        toggle(navigation)
    }

    render() {
        const {navigation, content} = this.props
        const overlayVisibility = navigation === 'open' ? 'visible' : 'hidden'
        return (
            <>
                <nav className={navigation}>
                    <div className="header">
                    </div>
                    <div className="tab-content">
                        {content.chapters.map((section, index) => (
                            <NavigationItem
                                clicked={this.handleNavigation}
                                key={section.short_title}
                                section={section}
                                chapter={index + 1}
                            />
                        ))}
                    </div>
                </nav>
                <Overlay visibility={overlayVisibility} dismiss={this.handleNavigation} />
            </>
        )
    }
}

export default NavigationPanel
