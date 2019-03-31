import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import {inject, observer} from 'mobx-react'
import Reader from './Components/Reader/Reader'
import Home from './Components/Home/Home'
import Settings from './Components/Settings/Settings'
import Information from './Components/Information/Information'
import './App.css'

/* eslint-disable */
function RenderReader({match}) {
    return <Reader chapter={match.params.chapterNumber - 1} />
}

class App extends React.Component {
    render() {
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
}

export default inject('EdlizStore')(observer(App))
