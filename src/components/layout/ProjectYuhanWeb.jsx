import { faArrowRightArrowLeft, faClose, faCode, faFile, faFolder, faFolderTree, faLaptopCode, faLocationArrow, faPen, faServer, faStar, faTrophy } from '@fortawesome/free-solid-svg-icons';
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
                <h1>{title}<FontAwesomeIcon /></h1>
                <small>(대상 <FontAwesomeIcon icon={faTrophy} color='gold' />)</small>
                <p>24.03 ~ 24.11 4인 팀 프로젝트</p>
                {/* handleBack()은 즉시 실행. 이벤트 핸들러는 참조형식으로 해야함. handleBack <- 참조형식 */}
                <span onClick={handleBack}><FontAwesomeIcon icon={faClose} /></span>
            </SideContentHeader>
            <SideContentMain>
                <ProjectIntro>
                    <h2>
                        사용자에게&nbsp;&nbsp;
                        <StrongText>신선한 느낌</StrongText>으로&nbsp;&nbsp; 
                        <StrongText>강력한 학교 홍보</StrongText>를 위한&nbsp;&nbsp;
                        <StrongText>유한대학교 3D 웹 사이트</StrongText>
                        입니다.
                    </h2>
                </ProjectIntro>
                <ProjectImageArea>
                    <ProjectImageItem>
                        <ProjectImage src="../assets/images/project-yuhanweb/Main사진.png" alt="Main사진" />
                        <ProjectImage src="../assets/images/project-yuhanweb/Welcome존.png" alt="Welcome존" />
                    </ProjectImageItem>
                    <ProjectImageItem>
                        <ProjectImage src="../assets/images/project-yuhanweb/상담신청.png" alt="상담신청" />
                        <ProjectImage src="../assets/images/project-yuhanweb/키오스크 이벤트.png" alt="키오스크 이벤트" />
                    </ProjectImageItem>
                </ProjectImageArea>
                <TechStack>
                    <ItemHeader>
                        <h2><FontAwesomeIcon icon={faCode} />&nbsp; Project TechStacks</h2>
                    </ItemHeader>
                    <TechStackList>
                        <li>
                            <span title='3D Modeling SW'>Blender</span>
                        </li>
                        <li>
                            <span title='Programming Language'>JavaScript</span>
                        </li>
                        <li>
                            <span title='Library'>ReactJS</span>
                        </li>
                        <li>
                            <span title='State Management'>Redux</span>
                        </li>
                        <li>
                            <span title='Library'>Three.js</span>
                        </li>
                        <li>
                            <span title='JS Execution Environment'>Node.js</span>
                        </li>
                        <li>
                            <span title='Database'>MySQL</span>
                        </li>
                    </TechStackList>
                </TechStack>
                <MyRole>
                    <ItemHeader>
                        <h2><FontAwesomeIcon icon={faCode} />&nbsp; 나의 역할</h2>
                    </ItemHeader>
                    <MyRoleList>
                        <MyRoleItem><FontAwesomeIcon icon={faStar} /> 팀 리더, &nbsp;프로젝트 기획 및 총괄</MyRoleItem>
                        <MyRoleItem><FontAwesomeIcon icon={faCode} /> 캐릭터 조작 기능 (+ 미니맵, 텔레포트 기능)</MyRoleItem>
                        <MyRoleItem><FontAwesomeIcon icon={faCode} /> 항공뷰, &nbsp;캠퍼스 안내뷰 기능</MyRoleItem>
                        <MyRoleItem><FontAwesomeIcon icon={faCode} /> 학생 &nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRightArrowLeft} style={{marginRight: 0}} />&nbsp;&nbsp; 교수 상담관리 기능</MyRoleItem>
                        <MyRoleItem><FontAwesomeIcon icon={faFolderTree} /> 프로젝트 구조 및 UI 설계, 디자인</MyRoleItem>
                    </MyRoleList>
                    <LinkArea>
                        <a href='https://github.com/yuhan19-plus/yuhan-interactive-web' target='_blank' className='hover-css'>
                            <span>Github 저장소 <FontAwesomeIcon icon={faLocationArrow} /></span>
                        </a>
                    </LinkArea>
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
    padding: 1rem;
    overflow-y: auto;
`;

const ProjectIntro = styled.div`
    margin-bottom: 1rem;
`;

const ProjectImageArea = styled.div`
    width: 100%;
    height: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;

    div {
        width: 50%;
        height: 100%;
    }
`;

const ProjectImageItem = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-self: center;
    justify-content: center;
    margin-bottom: 1rem;
`;

const ProjectImage = styled.img`
    width: 80%;
    height: 100%;
    border: 0.3rem solid var(--main-color);
    box-sizing: border-box;
    margin-right: 1rem;

    &:hover {
        
    }
`;

const ItemHeader = styled.div`
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;

    &::after {
        content: "";
        padding: 0.1rem;
        margin-right: 0.5rem;
        background-color: var(--sub-color);
    }
`;

const TechStack = styled.div`
    width: 100%;
    padding: 1rem;
    margin-bottom: 1rem;
`;

const TechStackList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    flex-direction: row;
    font-size: 1rem;
    line-height: 2rem;
    padding-left: 1.5em;

    li {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 1.5rem 1.5rem 0;
        
        span {
            background-color: var(--main-color);
            color: var(--sub-color);
            border-radius: 0.5rem;
            padding: 0 0.5rem;
        }
    }
`;

const MyRole = styled.div`
    width: 100%;
    padding: 1rem;
    margin-bottom: 1rem;
`;

const MyRoleList = styled.ul`
    padding-left: 1rem;
`;

const MyRoleItem = styled.li`
    margin-bottom: 1rem;

    svg {
        margin-right: 1rem;
    }
`;

const LinkArea = styled.div`
    text-align: end;
    a {
        color: var(--sub-color);
    }
`;

const StrongText = styled.span`
    color: gold;
    font-size: 1.7rem;  
`;

export default ProjectYuhanWeb;