import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Reader from './Components/Reader/Reader';
import Home from './Components/Home/Home';
import Settings from './Components/Settings/Settings';


export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/chapters/:chapterNumber" children={RenderReader} />
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
