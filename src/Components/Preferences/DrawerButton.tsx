import React from 'react'
import styled from 'styled-components'

const Button = styled.div`
    background-color: '#6c63ff';
    border-radius: '4px';
    display: "block"; 
    height:"6px";
    margin: "1rem auto 2.8rem auto";
    width: "2.6rem";
`

const DrawerButton: React.FC = () => <Button/>

export default DrawerButton