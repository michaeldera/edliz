import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Reader from './Components/Reader/Reader';
import Home from './Components/Home/Home';
import Settings from './Components/Settings/Settings';
import Information from './Components/Information/Information';
import {inject, observer} from 'mobx-react'

@inject('EdlizStore')
@observer
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/chapters/:chapterNumber" children={RenderReader} />
            <Route path="/information" component={Information}/>
            <Route path="/settings" component={Settings}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}


function RenderReader({ match }) {
  return <Reader chapter={match.params.chapterNumber - 1}/>;
}

export default App
