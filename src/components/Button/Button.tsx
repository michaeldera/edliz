import React from 'react'
import {Link} from 'react-router-dom'
import styled, {css} from 'styled-components'

interface BtnProps {
    type: string
    href?: string
    onClick?: () => void
}
const BtnStyles = css`
    display: block;
    margin: auto;
    width: fit-content;
    font-family: 'Muli', sans-serif;
    background: #3c8eff;
    border-radius: 4px;
    padding: 12px 20px;
    font-size: 14px;
    color: #ffffff;
    transition: opacity 0.3s ease-in-out;
    text-decoration: none;
    cursor: pointer;
`
const ButtonComponent = styled.button.attrs(() => ({
    type: 'button',
}))`
    ${BtnStyles}
`
const ButtonLink = styled(Link)`
    ${BtnStyles}
`
const ButtonAnchor = styled.a`
    ${BtnStyles}
    &:hover, .btn:hover {
        opacity: 0.6;
    }
`
const Button: React.FC<BtnProps> = ({type, href, onClick, ...rest}) => {
    switch (type) {
        case 'a':
            return <ButtonAnchor href={href} {...rest} />

        case 'link':
            return <ButtonLink {...rest} to="" />

        case 'button':
            return <ButtonComponent onClick={onClick} {...rest} />

        default:
            console.error(`Invalid Button type passed in props: ${type}`) // eslint-disable-line no-console
            return null
    }
}

export default Button
