import React from 'react';
import { Link } from "react-router-dom";
import './information.css';
import { book } from '../../Data/data'

export default class Information extends React.Component {
  render() {
    return (
      <div id="info-top" className="information">
          <Link className="back-link" to="/">home</Link>
          <h2>jump to section</h2>
          <div id="jump-section">
            {book.contents.pre.map((elem, index, array) => {
              return <><a href={"#" + elem.short_title}>{elem.short_title}</a><br/></>
            })}
          </div>
          {book.contents.pre.map((elem, index, array) => {
            return (
              <section id={elem.short_title}>
                {elem.content}
                <br/>
                <a href="#info-top">back to top</a>
              </section>
            )})}
      </div>
    );
  }
}
