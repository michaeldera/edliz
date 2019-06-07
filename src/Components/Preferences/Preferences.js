import React from 'react';
import './preferences.css'
import Overlay from '../../Views/Overlay/Overlay';

export default class Preferences extends React.Component {
  constructor(props){
    super(props);
    this.panel = React.createRef();
    this.state ={isDragging : false, yPosition : null, bottom: 0};
  }
  handlePreferences = () => {
    const { preferences, toggle } = this.props
    toggle(preferences)
  }

  handleMode = () => {
    const { mode, toggleMode } = this.props;
    toggleMode(mode);
  }

  handleFontSizeChange = event => {
    this.props.fontSizeChange(event.target.value)
  }

  onTouchStart = event => {
    console.log("Touch Started");
    let offsetBottom = this.panel.current.offsetBottom;
    this.setState({
      yPosition : offsetBottom,
      isDragging: true
    })
    event.stopPropagation();
    event.preventDefault()
  }

  onTouchMove = event  => {
    if(!this.state.isDragging) return;
    this.setState({
      bottom : event.pageY - this.state.yPosition 
    });
    event.stopPropagation();
    event.preventDefault();
  }

  onTouchEnd = event => {
    this.setState({
      isDragging: false
    });
    if(this.state.bottom > -150 ){
      this.setState({
        bottom: 0
      });
    }
    event.stopPropagation();
    event.preventDefault();
  }

  render(){
      const {preferences, mode, fontSize} =this.props;
      const bottom = (preferences === "open") ? this.state.bottom : "-300px";
      const  overlayVisibility = (preferences === "open")?  "visible" : "hidden";
      return (
          <React.Fragment>
              <div ref="panel" className="preferences" style={{ bottom: bottom }}>
                  <DrawerButton action={this.handlePreferences} onDragAction={this.onTouchStart} onTouchMove={this.onTouchMove} onTouchEnd={this.onTouchEnd}/>                         
                  <label htmlFor="font-size-input" className="font-size-label">FONT SIZE</label>
                  <section className="p-section">                      
                      <p className="preview-text" style={{fontSize: fontSize + 'pt'}}>Preview Reading Text</p>
                      <input name="font-size-input" className="font-size-input" type="range" min="10" max="20" value={fontSize} onChange={this.handleFontSizeChange} />
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
          margin: "1rem auto 2.8rem auto",
          width: "2.6rem"
      };
      return <div onClick={this.props.action} onTouchStart={this.props.dragAction} style={drawerButtonStyle}></div>;
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
          fontFamily: "'Muli' sans-serif",
          margin:"26px",
          width:"5rem",
          padding: "4px 10px",
          outline: "none"
      };

      return (
           <button style={modeButtonStyle} onClick={this.props.toggle}>
              {(this.props.mode === "day") ? "NIGHT" : "DAY"}
           </button>
      )
  }
}
