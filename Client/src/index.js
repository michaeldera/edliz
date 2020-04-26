"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
require("./index.css");
var App_1 = require("./App");
var react_router_dom_1 = require("react-router-dom");
var registerServiceWorker_1 = require("./registerServiceWorker");
var mobx_react_1 = require("mobx-react");
var EdlizStore_1 = require("./stores/EdlizStore");
var Root = (React.createElement(mobx_react_1.Provider, { EdlizStore: EdlizStore_1.default },
    React.createElement(react_router_dom_1.HashRouter, null,
        React.createElement(App_1.default, null))));
ReactDOM.render(Root, document.getElementById('root'));
registerServiceWorker_1.default();
//# sourceMappingURL=index.js.map