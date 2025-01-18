import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <FooterContainer>
            <p>
                &copy; Copyright 2025&nbsp;&nbsp;&nbsp;
                <a href='https://github.com/Seong-Jun1525'><FontAwesomeIcon icon={faGithub} /> Lim Seong Jun</a>
            </p>
        </FooterContainer>
    )
}

const FooterContainer = styled.div`
    width: 100%;
    padding: 1.5rem;
    background-color: var(--sub-color);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "establishRetrosansOTF";

    a, p {
        color: var(--main-color);
        padding: 1rem;
    }
`

export default Footer