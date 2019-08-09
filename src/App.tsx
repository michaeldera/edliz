import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import './App.css'
import Reader from './Components/Reader/Reader'
import Home from './Components/Home/Home'
import Settings from './Components/Settings/Settings'
import Information from './Components/Information/Information'
import {inject, observer} from 'mobx-react'
import {IEdlizStore} from './stores/EdlizStore'

export interface IMobxStore {
    EdlizStore?: IEdlizStore
}

const App: React.FC = () => {
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

export default inject('EdlizStore')(observer(App))
