import React, { Component } from 'react';
import './navigation.css'
import './tabs.css'
import NavigationItem from '../../Views/NavigationItem/NavigationItem';
import Searchbar from '../../Views/Searchbar/Searchbar';

class Navigation extends Component {
    constructor(props){
        super(props);
        this.state = {tab: this.props.content.chapters, searchDisplay: "none", content: this.props.content.chapters};
        this.switchTab = this.switchTab.bind(this);
        this.search = this.search.bind(this);
        this.toggleSearch = this.toggleSearch.bind(this);
    }

    switchTab(tab){
        if (tab === "pre"){
            this.setState({ 
                tab: this.props.content.pre,
                content: this.props.content.pre,
            })
        }  else {
            this.setState({
                tab: this.props.content.chapters, 
                content: this.props.content.chapters
            });
        }
    }

    toggleSearch(){
        console.log("called")
        this.setState({ searchDisplay: (this.state.searchDisplay === "none") ? "block" : "none" });
    }
    
    search(searchquery){
        let query = searchquery.toLowerCase();
        let foo = this.state.tab.filter(( item, index, array) => {
            if(item.long_title.toLowerCase().search(query) === -1  && item.content.toString().toLowerCase().search(query) === -1){
                return false;
            }
            else return true;
        });
        this.setState({content: foo});
    }
    
    render() {
        return (
            <nav className={this.props.status} >
                <div>
                <section>
                    <div className="tabs">
                        <button className="tab-button" onClick={() => this.switchTab("chapters")}>Chapters</button>
                        <button className="tab-button" onClick={() => this.switchTab("chapters")}>Bookmarks</button>
                        <button className="tab-button" onClick={() => this.switchTab("pre")}>Index</button>
                    </div>
                    <Searchbar display={this.state.searchDisplay} search={this.search}/>
                    <div className="tab-content">
                        { this.state.content.map( (section ,  index ) => (
                            <NavigationItem key={index} section={section} chapter={index} />
                        ))}
                     </div>      
                </section>            
                </div>
            </nav>

        );
    }
}

export default Navigation;