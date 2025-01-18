import React from 'react'
import styled from 'styled-components'

const Nav = () => {
    return (
        <NavContainer>
            <h1><a href='/'>Seong Jun Portfolio</a></h1>
        </NavContainer>
    )
}

const NavContainer = styled.div`
    width: 100%;
    height: 15%;
    padding: 1rem;
    background-color: var(--main-color);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-family: "establishRetrosansOTF";

    a {    
        color: var(--sub-color);
    }
`

export default Nav