import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter} from 'react-router-dom'
import {Provider} from 'mobx-react'
import App from './App'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import EdlizStore from './stores/EdlizStore'

const Root = (
    <Provider EdlizStore={EdlizStore}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
)

ReactDOM.render(Root, document.getElementById('root'))
registerServiceWorker()
