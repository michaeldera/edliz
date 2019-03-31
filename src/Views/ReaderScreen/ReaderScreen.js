import React, {Component} from 'react'
import Navigation from '../../Components/Navigation/Navigation'
import './readerscreen.css'

export default class ReaderScreen extends Component {
    render() {
        const {content, navigation, toggle, title, chapter} = this.props
        return (
            <div>
                <Navigation content={content} chapter={chapter} navigation={navigation} toggle={toggle} title={title} />
            </div>
        )
    }
}
