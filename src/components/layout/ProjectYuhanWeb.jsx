import { faArrowRightArrowLeft, faClose, faCode, faFile, faFolder, faFolderTree, faLocationArrow, faPen, faStar, faTrophy } from '@fortawesome/free-solid-svg-icons';
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
                <h2>{title}<FontAwesomeIcon /></h2>
                <small>(대상 <FontAwesomeIcon icon={faTrophy} color='gold' />)</small>
                <p>24.03 ~ 24.11 4인 팀 프로젝트</p>
                {/* handleBack()은 즉시 실행. 이벤트 핸들러는 참조형식으로 해야함. handleBack <- 참조형식 */}
                <span onClick={handleBack}><FontAwesomeIcon icon={faClose} /></span>
            </SideContentHeader>
            <SideContentMain>
                <ProjectIntro>
                    <h3>사용자에게 신선한 느낌으로 강력한 학교 홍보를 위한 유한대학교 3D 웹 사이트</h3>
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
                <MyRole>
                    <h3>나의 역할</h3>
                    <MyRoleList>
                        <MyRoleItem><FontAwesomeIcon icon={faStar} /> 팀 리더, 프로젝트 기획 및 총괄</MyRoleItem>
                        <MyRoleItem><FontAwesomeIcon icon={faCode} /> 캐릭터 조작 기능 (+ 미니맵, 텔레포트 기능)</MyRoleItem>
                        <MyRoleItem><FontAwesomeIcon icon={faCode} /> 항공뷰, 캠퍼스 안내뷰 기능</MyRoleItem>
                        <MyRoleItem><FontAwesomeIcon icon={faCode} /> 학생 &nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRightArrowLeft} style={{marginRight: 0}} />&nbsp;&nbsp; 교수 상담관리 기능</MyRoleItem>
                        <MyRoleItem><FontAwesomeIcon icon={faFolderTree} /> 프로젝트 구조 및 UI 설계 및 디자인</MyRoleItem>
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
`;

const MyRole = styled.div`
    width: 100%;
    height: 100%;

    h3 {
        font-size: 1.5rem;
        margin-bottom: 0.3rem;
    }
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
`

export default ProjectYuhanWeb;