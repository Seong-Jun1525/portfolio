import React from 'react';
import styled from 'styled-components';
import SideContent from '../layout/SideContent';
import { useSelector } from 'react-redux';

const CanvasLayout = ({children}) => {
    const sideContentState = useSelector((state) => state.sideContent).sideContentState;
    console.log(sideContentState);
    return (
        <Container>
            {children}
            {/* <>
                {
                    <SideContentContainer className={sideContentState ? "opened" : "closed"}>
                        <SideContent />
                    </SideContentContainer>
                }
            </> */}
        </Container>
    );
};

const Container = styled.div`
  width: 100vw;
  height: 75vh;
`;

const SideContentContainer = styled.div`
    width: 0%;
    border-radius: 15px 0 0 15px;
    transition: 0.3s ease-in-out;
    z-index: 1000;

    &.opened {
        display: block;
        width: 100%;
        transform: translateX(0);
    }
    &.closed {
        transform: translateX(100%);
    }
`;

export default CanvasLayout;