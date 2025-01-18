import React from 'react'
import styled from 'styled-components';

const MyContainer = ({children}) => {
    return (
        <Container>
            {children}
        </Container>
    )
};

const Container = styled.div`
  width: 100%;
`;

export default MyContainer