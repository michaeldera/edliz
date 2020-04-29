"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_1 = require("@fluentui/react");
var react_media_1 = require("react-media");
var MainMenu_1 = require("../MainMenu/MainMenu");
var medicine_svg_1 = require("./medicine.svg");
var styled_components_1 = require("styled-components");
var Information_1 = require("../Information/Information");
var HomeComponent = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    box-sizing: border-box;\n    flex-direction: row;\n    padding: 80px;\n    align-items: center;\n    margin-bottom: 30px;\n    min-height: calc(100vh - 140px);\n    @media (min-width: 1025px) {\n        padding: 50px;\n    }\n    @media (max-width: 1024px) {\n        padding: 60px 15px 15px;\n    }\n"], ["\n    display: flex;\n    box-sizing: border-box;\n    flex-direction: row;\n    padding: 80px;\n    align-items: center;\n    margin-bottom: 30px;\n    min-height: calc(100vh - 140px);\n    @media (min-width: 1025px) {\n        padding: 50px;\n    }\n    @media (max-width: 1024px) {\n        padding: 60px 15px 15px;\n    }\n"])));
var Title = styled_components_1.default.h1(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    font-family: Muli, sans-serif;\n    font-weight: 300;\n    font-size: 38px;\n    color: #333333;\n    letter-spacing: 1.08px;\n    line-height: 46px;\n    @media (min-width: 1025px) {\n        margin: 90px 0 30px 0px;\n    }\n    @media (max-width: 1024px) {\n        font-size: 22px;\n        line-height: 26px;\n        margin: 30px auto 24px;\n        text-align: center;\n    }\n"], ["\n    font-family: Muli, sans-serif;\n    font-weight: 300;\n    font-size: 38px;\n    color: #333333;\n    letter-spacing: 1.08px;\n    line-height: 46px;\n    @media (min-width: 1025px) {\n        margin: 90px 0 30px 0px;\n    }\n    @media (max-width: 1024px) {\n        font-size: 22px;\n        line-height: 26px;\n        margin: 30px auto 24px;\n        text-align: center;\n    }\n"])));
var Introduction = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    font-family: 'IBM Plex Serif', serif;\n    max-width: 1040px;\n    font-size: 18px;\n    color: #666666;\n    letter-spacing: 0.26px;\n    line-height: 30px;\n    margin: 40px auto;\n    @media (max-width: 1024px) {\n        font-size: 14px;\n        color: #101010;\n        line-height: 22px;\n        margin: 50px auto 40px;\n        padding: 0 20px;\n        text-align: center;\n    }\n"], ["\n    font-family: 'IBM Plex Serif', serif;\n    max-width: 1040px;\n    font-size: 18px;\n    color: #666666;\n    letter-spacing: 0.26px;\n    line-height: 30px;\n    margin: 40px auto;\n    @media (max-width: 1024px) {\n        font-size: 14px;\n        color: #101010;\n        line-height: 22px;\n        margin: 50px auto 40px;\n        padding: 0 20px;\n        text-align: center;\n    }\n"])));
var MedicineSM = styled_components_1.default.img(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    display: none;\n    @media (max-width: 1024px) {\n        display: block;\n        max-width: 60vw;\n        margin: 40px auto;\n        max-height: 20vh;\n    }\n"], ["\n    display: none;\n    @media (max-width: 1024px) {\n        display: block;\n        max-width: 60vw;\n        margin: 40px auto;\n        max-height: 20vh;\n    }\n"])));
var Medicine = styled_components_1.default.img(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    box-sizing: border-box;\n    padding: 40px;\n    max-width: 40vw;\n    max-height: 40vh;\n    margin-top: 10vh;\n"], ["\n    box-sizing: border-box;\n    padding: 40px;\n    max-width: 40vw;\n    max-height: 40vh;\n    margin-top: 10vh;\n"])));
var Home = function () {
    return (React.createElement(Information_1.MainComponent, null,
        React.createElement(MainMenu_1.default, null),
        React.createElement(HomeComponent, null,
            React.createElement("div", null,
                React.createElement(Title, null,
                    "Essential Drugs & Medicines ",
                    React.createElement("br", null),
                    " List in Zimbabwe"),
                React.createElement(react_media_1.default, { query: "(max-width: 1024px)", render: function () { return React.createElement(MedicineSM, { src: medicine_svg_1.default, alt: "" }); } }),
                React.createElement(Introduction, null, "This 7th essential medicines list and standard treatment guidelines for the most common health conditions in Zimbabwe has been endorsed by the National Medicine & Therapeutics Policy Advisory Committee. It is the product of many years of combined efforts by hundreds of health workers at all levels of the health care system in Zimbabwe."),
                React.createElement(react_1.PrimaryButton, { href: "/#/chapters/1", text: "Start Reading" })),
            React.createElement(react_media_1.default, { query: "(min-width: 1025px)", render: function () { return React.createElement(Medicine, { src: medicine_svg_1.default, alt: "" }); } })),
        React.createElement("small", null, "Maintained on GitHub by well meaning developers")));
};
exports.default = Home;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=Home.js.map