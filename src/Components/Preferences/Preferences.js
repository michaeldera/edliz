import React from 'react';
import './preferences.css';
import Overlay  from '../../Views/Overlay/Overlay';

export default class Preferences extends React.Component {
    render(){
        const bottom = (this.props.status === "open") ? "0" : "-300px";
        const  overlayVisibility = (this.props.status === "open")?  "visible" : "hidden";
        return (
            <>
                <div className="preferences" style={{ bottom: bottom }}>
                    <DrawerButton action={this.props.toggle()}/>                         
                    <label htmlFor="font-size-input" className="font-size-label">Font Size</label>
                    <section className="p-section">
                        <input name="font-size-input" className="font-size-input" type="range" min="8" max="30" placeholder={11} onChange={this.props.handleFontSizeChange()} />
                    </section>
                    <ModeButton toggle={this.props.toggleMode()} mode={this.props.mode}/>
                </div>
                <Overlay visibility={overlayVisibility} dismiss={this.props.toggle()}/>
            </>
        );
    }
}

class DrawerButton extends React.Component {
    render(){
        let drawerButtonStyle = {
            backgroundColor: "#8ec5fc",
            backgroundImage: "linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%)",
            borderRadius: "4px",
            display: "block", 
            height:"6px",
            margin: "0.6rem auto 2.8rem auto",
            width: "2.6rem"
        };
        return <div onClick={this.props.action} style={drawerButtonStyle}></div>;
    }
}

class ModeButton extends React.Component {
    render(){
        let modeButtonStyle = {
            borderRadius: "50vh",
            color: "#ffffff",
            backgroundColor:"#3894f8",
            border: "none",
            fontSize: "0.8rem",
            fontFamily: "'Sarabun' sans-serif",
            margin:"26px",
            padding: "4px 10px"
        };

        return (
             <button style={modeButtonStyle} onClick={this.props.toggle}>
                {(this.props.mode === "day") ? "night mode" : "day mode"}
             </button>
        )
    }
}