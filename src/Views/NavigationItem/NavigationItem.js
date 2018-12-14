import React, { Component } from 'react';
import chevron from './../../Assets/Icons/chevron.svg';
import './navigationitem.css'


class NavigationItem extends Component {
    constructor(props){
        super(props);
        this.handleBehaviour = this.handleBehaviour.bind(this);
        this.state = { class : "compact"}
    }

    handleBehaviour(section){
        if(this.props.section.subsections){
            this.setState({ class:  (this.state.class  === "compact")? "collapse" : "compact"})
        } else {
            this.props.navigate(section);
        }
    }
    render() {
        const section = this.props.section;
        return (
            <div className={this.state.class}>
                <div key={section.short_title} className="content-item" onClick={() => this.handleBehaviour(section)}>
                    {(section.subsections)?
                        <span className="chevron"><img src={chevron} alt="icon"/></span>    
                        : null
                    }
                    <span className="content-item-title">{section.short_title}</span>
                    <span className="content-preview">{section.long_title}</span>
                </div>
                {(section.subsections) ?
                    section.subsections.map(section => (
                        <div key={section.long_title} className="sub-section" style={{background: "rgba(220, 220, 255, 0.15)"}}>
                            <NavigationItem section={section} navigate={this.props.navigate}/>
                        </div>    
                    )) : null
                }
            </div>
        );
    }
}

export default NavigationItem;