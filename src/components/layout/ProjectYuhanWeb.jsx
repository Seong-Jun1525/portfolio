import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { initSideContent } from '../../redux/actions/actions';
import { useNavigate } from 'react-router-dom';

const ProjectYuhanWeb = ({title}) => {
    const dispatch = useDispatch();
    const navigator = useNavigate();

    const handleBack = () => {
        dispatch(initSideContent());
        navigator("/main-content/");
    }

    return (
        <Container>
            <SideContentHeader>
                <h2>{title}</h2>
                <p>24.03 ~ 24.11 4인 팀 프로젝트</p>
                {/* handleBack()은 즉시 실행. 이벤트 핸들러는 참조형식으로 해야함. handleBack <- 참조형식 */}
                <span onClick={handleBack}><FontAwesomeIcon icon={faClose} /></span>
            </SideContentHeader>
            <SideContentMain>
                <ProjectIntro>
                    <h3>사용자에게 신선한 느낌으로 강력한 학교 홍보를 위한 유한대학교 3D 웹 사이트</h3>
                </ProjectIntro>
                <ProjectImageArea>
                    <div style={{"backgroundColor": "yellow"}}>
                        사진 영역
                    </div>
                    <div style={{"backgroundColor": "green"}}>
                        사진 영역
                    </div>
                    <div style={{"backgroundColor": "blue"}}>
                        사진 영역
                    </div>
                </ProjectImageArea>
                <MyRole>

                </MyRole>
            </SideContentMain>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    height: 100%;
    color: var(--main-color);
`;

const SideContentHeader = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.3rem;
    margin-bottom: 1rem;
    border-bottom: 0.1rem solid var(--main-color);

    p {
        font-size: 1rem;
    }

    span:hover {
        cursor: pointer;
    }
`;

const SideContentMain = styled.div`
    width: 100%;
    height: 100%;
`;

const ProjectIntro = styled.div`
    margin-bottom: 1rem;
`;

const ProjectImageArea = styled.div`
    width: 100%;
    height: 35%;
    background-color: red;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;

    div {
        width: 100%;
        height: 100%;
    }
`;

const MyRole = styled.div`
    
`;

export default ProjectYuhanWeb;