import React from 'react';
import { Link } from "react-router-dom";
import './information.css';
import { book } from '../../Data/data'

export default class Information extends React.PureComponent {
  render() {
    return (
      <div id="info-top" className="information">
        <Link className="back-link" to="/">home</Link>
        <h2>jump to section</h2>
        <div id="jump-section">
          {book.contents.pre.map((elem, index, array) =>
            <a href={"#" + elem.short_title} key={index}>{elem.short_title}</a>)}
        </div>
        {book.contents.pre.map((elem, index, array) =>
            <section id={elem.short_title} key={index}>
              {elem.content}
              <br/>
              <a href="#info-top">back to top</a>
            </section>
          )}
      </div>
    );
  }
}
