import React, { Component } from 'react';
import './searchbar.css'


class Searchbar extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.props.search(e.target.value);
        console.log(e.target.value);
    }
    
    render() {
        return (
            <div className="searchbar" style={{display: this.props.display}}>
                <input className="search-input" type="text" placeholder="search" onChange={this.handleChange}/>
            </div>
        );
    }
}

export default Searchbar;