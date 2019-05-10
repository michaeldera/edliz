import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import scrollDown from './scroll-arrow-to-down.svg'
import scrollUp from './up-scroll-arrow.svg'
import './ScrollTopDown.css'


class ScrollTopDown extends React.PureComponent {
    scrollToTop = () => {
        scroll.scrollToTop()
    }

    scrollToBottom = () => {
        scroll.scrollToBottom()
    }

    render() {
        return (
            <div className="scroll-up-down">
                <button type="button" className="scroll-up" onClick={this.scrollToTop}>
                    <img src={scrollUp} alt="Navigate" />
                </button>
                <button type="button" className="scroll-down" onClick={this.scrollToBottom}>
                    <img src={scrollDown} alt="Navigate" />
                </button>
            </div>
        )
    }
}

export default ScrollTopDown
