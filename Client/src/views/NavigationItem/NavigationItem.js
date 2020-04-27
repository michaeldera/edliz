"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
require("./navigationitem.css");
var styled_components_1 = require("styled-components");
var activeClassName = 'nav-active';
var className = 'nav-item';
var Link = styled_components_1.default(react_router_dom_1.NavLink).attrs({
    activeClassName: 'nav-active',
    className: 'nav-item',
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    &.", " {\n        border-bottom: 1px solid #6c63ff;\n        padding-left: 7px;\n        background: ", ";\n        color: #2b44ff;\n    }\n    &.", " {\n        display: block;\n        padding: 10px;\n        text-align: left;\n        border-bottom: 1px solid rgba(200, 200, 200, 0.2);\n        text-decoration: none;\n    }\n"], ["\n    &.", " {\n        border-bottom: 1px solid #6c63ff;\n        padding-left: 7px;\n        background: ", ";\n        color: #2b44ff;\n    }\n    &.", " {\n        display: block;\n        padding: 10px;\n        text-align: left;\n        border-bottom: 1px solid rgba(200, 200, 200, 0.2);\n        text-decoration: none;\n    }\n"])), activeClassName, function (_a) {
    var mode = _a.mode;
    return (mode === 'day' ? '#eff5fb' : 'inherit');
}, className);
var ShortTitle = styled_components_1.default.span.attrs({ className: 'nav-short-title' })(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    color: #999;\n    display: block;\n    font-size: 0.8em;\n"], ["\n    color: #999;\n    display: block;\n    font-size: 0.8em;\n"])));
var LongTitle = styled_components_1.default.span.attrs({ className: 'nav-long-title' })(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display: block;\n    color: #101010;\n    margin: 5px 0;\n"], ["\n    display: block;\n    color: #101010;\n    margin: 5px 0;\n"])));
var NavigationItem = function (_a) {
    var section = _a.section, clicked = _a.clicked, chapter = _a.chapter, mode = _a.mode;
    return (React.createElement(Link, { onClick: clicked, to: '/chapters/' + chapter.toString(), mode: mode },
        React.createElement(ShortTitle, null, section.short_title),
        React.createElement(LongTitle, null, section.long_title)));
};
exports.default = NavigationItem;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=NavigationItem.js.map