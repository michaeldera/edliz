import * as React from 'react';
import './header.css';

export default class Header extends React.Component <any, any> {
  public render() {
    return (
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
    );
  }
}
