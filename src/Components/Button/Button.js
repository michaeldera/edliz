
import React from 'react'
import {Link} from 'react-router-dom'

import './Button.css'
/* eslint-disable */
const Button = props => {
    let {type = 'link', className = '', ...rest} = props

    className += ' btn'

    switch (type) {
        case 'a':
            // eslint-disable-next-line jsx-a11y/anchor-has-content
            return <a className={className} {...rest} />

        case 'link':
            return <Link className={className} {...rest} />

        case 'button':
            return <button type='button' className={className} {...rest} />

        default:
            console.error(`Invalid Button type passed in props: ${type}`)
            return null
    }
}

export default Button