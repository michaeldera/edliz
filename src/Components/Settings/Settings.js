import React from 'react';
import { Link } from "react-router-dom";
import './settings.css';


/*        <h2>save on device</h2>
        <p>to download a copy of this guide on your device use this link</p>
        <a href="#" className="btn-more">save on device</a>*/  
export default class Settings extends React.Component {
  
  render() {
    return (
      <div className="settings">
        <Link to="/" className="back-link">back...</Link>
        <h1>settings</h1>

        <h2>application Info</h2>
        <h3>contributors</h3>
        <p>this application was built and is maintained by a well meaning developers. The code is opensource and is available to fork, share and improve on github. to see a list of all developers that have contributed to the project read our readme file on github for an update list.</p>
        <a href="https://github.com/michaeldera/edliz" className="btn-more">view on github</a>
        <h3>website</h3>
        <p>still in development. coming soon</p>
      </div>
    );
  }
}