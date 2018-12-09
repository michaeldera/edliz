import * as React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Page from './components/Page/Page';

export default class App extends React.Component <any, any> {
  public render() {
    return (
      <div className="App">
        <Header/>
        <Page/>
      </div>
    );
  }
}
