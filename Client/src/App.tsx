import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Home, Reader, Settings, Information, Bookmarks } from './views'


export const App: React.FunctionComponent = () => {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/chapters/:chapterNumber" component={Reader} />
                    <Route path="/information" component={Information} />
                    <Route path="/bookmarks" component={Bookmarks} />
                    <Route path="/settings" component={Settings} />
                </Switch>
            </Router>
        </div>
    )
}


