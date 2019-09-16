import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import './App.css'
import Reader from './components/Reader/Reader'
import Home from './components/Home/Home'
import Settings from './components/Settings/Settings'
import Information from './components/Information/Information'
import {inject, observer} from 'mobx-react'
import {IEdlizStore} from './stores/EdlizStore'
import {hot} from 'react-hot-loader'

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

export default hot(module)(inject('EdlizStore')(observer(App)))
