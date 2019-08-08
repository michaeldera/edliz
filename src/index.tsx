import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'mobx-react';
import EdlizStore from './stores/EdlizStore';

const Root = (
    <Provider EdlizStore={EdlizStore}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
registerServiceWorker();
