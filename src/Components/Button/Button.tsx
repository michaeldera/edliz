import React from 'react'
import {Link} from 'react-router-dom'

import './Button.css'

interface BtnProps {
    type: string
    className?: string
    href?: string
    onClick?: () => void
}
/* eslint-disable */
const Button: React.FC<BtnProps> = ({type, className = '', href, onClick, ...rest}) => {
    const classBtn = className + ' btn'
    switch (type) {
        case 'a':
            // eslint-disable-next-line jsx-a11y/anchor-has-content
            return <a className={classBtn} href={href} {...rest} />

        case 'link':
            return <Link className={classBtn} {...rest} to="" />

        case 'button':
            return <button type="button" onClick={onClick} className={classBtn} {...rest} />

        default:
            console.error(`Invalid Button type passed in props: ${type}`)
            return null
    }
}

export default Button
