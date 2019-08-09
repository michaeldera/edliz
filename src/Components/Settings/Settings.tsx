import React from 'react'
import {Link} from 'react-router-dom'
import './settings.css'

const Settings: React.FC = () => (
    <div className="settings">
        <Link to="/" className="back-link">
            back...
        </Link>
        <h1>Settings</h1>

        <h2>Application Info</h2>
        <h3>Contributors</h3>
        <p>
            This application was built and is maintained by a well meaning developers. The code is opensource and is
            available to fork, share and improve on github. To see a list of all developers that have contributed to the
            project read our readme file on github for an update list.
        </p>
        <a href="https://github.com/michaeldera/edliz" className="btn-more">
            view on github
        </a>
        <h3>Website</h3>
        <p>Still in development. coming soon</p>
    </div>
)

export default Settings
