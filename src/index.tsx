import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Fabric>
    <App />
  </Fabric>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
