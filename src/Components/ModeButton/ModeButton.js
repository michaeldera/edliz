import React from 'react'

const modeButtonStyle = {
    borderRadius: '50vh',
    backgroundColor: '#eee',
    color: '#0648fd',
    border: '1px solid #0648fd',
    lineHeight: '0.8rem',
    fontSize: '0.7rem',
    fontFamily: 'Muli',
    margin: '26px',
    width: '5rem',
    padding: '4px 10px',
    textAlign: 'center',
}

class ModeButton extends React.PureComponent {
    render() {
        return (
            <div className="btn">
                <button type="button" style={modeButtonStyle} onClick={this.props.toggle}>
                    {this.props.mode === 'day' ? 'NIGHT' : 'DAY'}
                </button>
            </div>
        )
    }
}

export  default ModeButton
