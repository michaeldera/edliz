import * as React from 'react';
import './App.css';
import Header from './components/Header/Header';

export default class App extends React.Component <any, any> {
  public render() {
    return (
      <div className="App">
        <Header/>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}
