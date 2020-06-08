import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import { Home, Reader, Settings, Information } from './views'



export const App: React.FC = () => {
    return (
        <div className="App">
            <HashRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/chapters/:chapterNumber" children={RenderReader} />
                    <Route path="/information" component={Information} />
                    <Route path="/settings" component={Settings} />
                </Switch>
            </HashRouter>
        </div>
    )
}

function RenderReader({match}: {match: any}) {
    return <Reader chapter={match.params.chapterNumber - 1} />
}

