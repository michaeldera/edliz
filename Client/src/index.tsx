import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { HashRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { Fabric, loadTheme, initializeIcons } from 'office-ui-fabric-react';
import { RecoilRoot } from 'recoil';

loadTheme({
    defaultFontStyle: { fontFamily: "'Quicksand', sans-serif", },
});

initializeIcons();

const Root = (
    <RecoilRoot>
        <Fabric>
            <HashRouter>
                <App />
            </HashRouter>
        </Fabric>
    </RecoilRoot>
)

ReactDOM.render(Root, document.getElementById('root'))
registerServiceWorker()
