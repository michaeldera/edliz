
import React from 'react'
import {Link} from 'react-router-dom'

interface BtnProps {
    type: string
    className?: string
    href?: string
    onClick?: () => void
}

import './Button.css'
/* eslint-disable */
const Button: React.FC<BtnProps> = ({type='link', className='', href,...rest}) => {

    const classBtn = className + ' btn'

    switch (type) {
        case 'a':
            // eslint-disable-next-line jsx-a11y/anchor-has-content
            return <a className={classBtn} {...rest} />

        case 'link':
            return <Link className={classBtn} {...rest} to=""/>

        case 'button':
            return <button type='button' className={classBtn} {...rest} />

        default:
            console.error(`Invalid Button type passed in props: ${type}`)
            return null
    }
}

export default Button