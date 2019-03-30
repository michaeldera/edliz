import React, {Component} from 'react'

export default class Overlay extends Component {
    render() {
        const {visibility, dismiss} = this.props
        const overlayStyle = {
            backgroundColor: '#21D4FD',
            backgroundImage: 'linear-gradient(19deg, #21D4FD 0%, #B721FF 100%)',
            opacity: '0.1',
            height: '100%',
            left: '0',
            position: 'fixed',
            top: '0',
            visibility,
            width: '100%',
            zIndex: '998',
        }
        return <div style={overlayStyle} onClick={dismiss} />
    }
}
