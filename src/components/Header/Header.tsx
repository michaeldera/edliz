import * as React from 'react';
import './header.css';

export default class Header extends React.Component <any, any> {
  public render() {
    return (
        <header className="ms-bgColor-themePrimary">
          <h1 className="ms-font-xl ms-fontColor-white">Introduction</h1>
        </header>
    );
  }
}
