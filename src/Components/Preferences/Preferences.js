import React from 'react';
import './preferences.css';
import Overlay  from '../../Views/Overlay/Overlay';

export default class Preferences extends React.Component {
    render(){
        const bottom = (this.props.status === "open") ? "0" : "-290px";
        const  overlayVisibility = (this.props.status === "open")?  "visible" : "hidden";
        return (
            <>
                <div className="preferences" style={{ bottom: bottom }}>
                    <DrawerButton/>
                    <label htmlFor="font-size-input" className="font-size-label">font-size</label>
                    <input name="font-size-input" className="font-size-input" type="range" min="8" max="30" placeholder={11} onChange={this.props.handleFontSizeChange()} />
                    <div className="preference-control">
                        <button className="btn-mode" onClick={this.props.toggleMode()}>{(this.props.mode === "day") ? "night mode" : "day mode"}</button>
                    </div>
                </div>
                <Overlay visibility={overlayVisibility} dismiss={this.props.toggle()}/>
            </>
        );
    }
}

class DrawerButton extends React.Component {
    render(){
        let drawerButtonStyle = {
            backgroundColor: "rgba( 255, 255, 255, 0.86)",
            borderRadius: "4px",
            display: "block", 
            height:"6px",
            margin: "0.68rem auto 2.8rem auto",
            width: "2.6rem"
        };
        return <div style={drawerButtonStyle}></div>;
    }
}