import React from 'react';
import { Link } from "react-router-dom";
import './information.css';
import { bookContents } from '../../Data/data'

export default class Information extends React.Component {
  render() {
    return (
      <div className="information">
          <Link  to="/home">home</Link> 

      </div>
    );
  }
}