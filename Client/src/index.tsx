import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.css'
import { App } from './App'
import {HashRouter} from 'react-router-dom'
//import registerServiceWorker from './registerServiceWorker'
import { Fabric, loadTheme, initializeIcons } from 'office-ui-fabric-react';

loadTheme({});
initializeIcons();

const Root = (
        <Fabric>
            <HashRouter>
                <App />
            </HashRouter>
        </Fabric>

)

ReactDOM.render(Root, document.getElementById('root'))
//registerServiceWorker()
