import React from 'react'

const drawerButtonStyle = {
    backgroundColor: '#8ec5fc',
    backgroundImage: 'linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%)',
    borderRadius: '4px',
    display: 'block',
    height: '6px',
    margin: '0.6rem auto 2.8rem auto',
    width: '2.6rem',
}

class DrawerButton extends React.PureComponent {
    render() {
        return <div onClick={this.props.action} style={drawerButtonStyle} />
    }
}

export default DrawerButton
