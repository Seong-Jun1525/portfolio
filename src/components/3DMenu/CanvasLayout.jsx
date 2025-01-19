import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import ProjectYuhanWeb from '../layout/ProjectYuhanWeb';

const CanvasLayout = ({children}) => {
    const sideContent = useSelector((state) => state.sideContent);
    // console.log(sideContent);

    if (!sideContent) return null;

    return (
        <Container>
            {children}
            <> 
                {
                    <SideContentContainer className={sideContent.sideContentState ? "opened" : "closed"}>
                        {
                            sideContent.sideContentName === "유한대학교홍보웹" && (
                                <ProjectYuhanWeb title={sideContent.sideContentName} />
                            )
                        }
                    </SideContentContainer>
                }
            </>
        </Container>
    );
};

const Container = styled.div`
    width: 100vw;
    height: 75vh;
    display: flex;
    justify-content: center;
`;

const SideContentContainer = styled.div`
    width: 0%;
    border-radius: 15px 0 0 15px;
    transition: 1s ease-in-out;
    background-color: var(--sub-color2);
    overflow-y: auto;
    padding: 1rem;
    z-index: 10000;

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