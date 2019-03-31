import React from 'react'
import {Link} from 'react-router-dom'

import './styles.css'
/* eslint-disable */
const RoundedBtn = props => {
    let {type = 'link', className = '', ...rest} = props

    className += ' rounded-btn'

    switch (type) {
        case 'a':
            // eslint-disable-next-line jsx-a11y/anchor-has-content
            return <a className={className} {...rest} />

        case 'link':
            return <Link className={className} {...rest} />

        case 'button':
            return <button type='button' className={className} {...rest} />

        default:
            console.error(`Invalid RoundedBtn type passed in props: ${type}`)
            return null
    }
}

export default RoundedBtn
