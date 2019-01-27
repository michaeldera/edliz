import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'mobx-react'
import EdlizStore from './stores/EdlizStore'

const Root = (
    <Provider EdlizStore={EdlizStore}>
        <App/>
    </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
