import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import { Home, Reader, Settings, Information, Bookmarks } from './views'

export const App: React.FC = () => {
    return (
        <div className="App">
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/chapters/:chapterNumber" component={Reader} />
                    <Route path="/information" component={Information} />
                    <Route path="/bookmarks" component={Bookmarks} />
                    <Route path="/settings" component={Settings} />
                </Switch>
            </HashRouter>
        </div>
    )
}


