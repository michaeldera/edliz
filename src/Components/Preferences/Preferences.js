import React from 'react';
import './preferences.css'
import Overlay from '../../Views/Overlay/Overlay';

export default class Preferences extends React.PureComponent {

  handlePreferences = () => {
    const { preferences, toggle } = this.props
    toggle(preferences)
  }

  handleMode = () => {
    const { mode, toggleMode } = this.props
    toggleMode(mode)
  }

  handleFontSizeChange = event => {
    this.props.fontSizeChange(event.target.value)
  }

  render(){
      const {preferences, mode, fontSize} =this.props;
      const bottom = (preferences === "open") ? "0" : "-300px";
      const  overlayVisibility = (preferences === "open")?  "visible" : "hidden";
      return (
          <React.Fragment>
              <div className="preferences" style={{ bottom: bottom }}>
                  <DrawerButton action={this.handlePreferences}/>                         
                  <label htmlFor="font-size-input" className="font-size-label">FONT SIZE</label>
                  <section className="p-section">
                      <input name="font-size-input" className="font-size-input" type="range" min="10" max="20" value={fontSize} onChange={this.handleFontSizeChange} />
                      <p className="preview-text" style={{fontSize: fontSize + 'pt'}}>Preview Reading Text</p>
                  </section>
                  <ModeButton toggle={this.handleMode} mode={mode}/>
              </div>
              <Overlay visibility={overlayVisibility} dismiss={this.handlePreferences}/>
          </React.Fragment>
      );
  }
}

class DrawerButton extends React.PureComponent {
  render(){
      let drawerButtonStyle = {
          backgroundColor: "#6c63ff",
          borderRadius: "4px",
          display: "block", 
          height:"6px",
          margin: "0.6rem auto 2.8rem auto",
          width: "2.6rem"
      };
      return <div onClick={this.props.action} style={drawerButtonStyle}></div>;
  }
}

class ModeButton extends React.PureComponent {
  render(){
      let modeButtonStyle = {
          borderRadius: "50vh",
          backgroundColor:"#eee",
          color:"#6c63ff",
          border: "1px solid #6c63ff",
          lineHeight:  "0.8rem",
          fontSize: "0.7rem",
          fontFamily: "'Sarabun' sans-serif",
          margin:"26px",
          width:"5rem",
          padding: "4px 10px"
      };

      return (
           <button style={modeButtonStyle} onClick={this.props.toggle}>
              {(this.props.mode === "day") ? "NIGHT" : "DAY"}
           </button>
      )
  }
}
