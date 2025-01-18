import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faCode, faEnvelopeSquare, faGraduationCap, faIdCard, faLaptopCode, faLocationArrow, faLocationDot, faPencilAlt, faPhoneAlt, faSchool, faServer, faTrophy, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';

const AboutMe = () => {
    const navigate = useNavigate();

    const handleMainContent = () => {
        navigate("/main-content");
    }

    const currentDate = new Date();
    const myBirth = new Date(2000, 4, 29);

    let age = Math.floor((currentDate - myBirth) / (1000 * 60 * 60 * 24 * 365));
    console.log(age);
    console.log(currentDate.getMonth() + 1);
    console.log(myBirth.getMonth());

    if((currentDate.getMonth() + 1 >= myBirth.getMonth()) && (currentDate.getDate() > myBirth.getDate())) {
        age += 1;
    }

    return (
        <AboutMeWrapper>
            <AboutMeContainer>
                <AboutMeHeader>
                    <MyPhotoArea>
                        <MyPhoto src='./assets/images/myPhoto1.jpg' alt='프로필 사진' />
                    </MyPhotoArea>
                    <MyInfo>
                        <div>
                            <h2><FontAwesomeIcon icon={faIdCard} /><span>My Info</span></h2>
                        </div>
                        <ul>
                            <li><FontAwesomeIcon icon={faUserAlt} /> <span>임성준</span></li>
                            <li><FontAwesomeIcon icon={faCalendarAlt} /><span>00.04.29 (만 {age}세)</span></li>
                            <li><FontAwesomeIcon icon={faLocationDot} /><span>인천 부평</span></li>
                            <li><FontAwesomeIcon icon={faEnvelopeSquare} /><span>sjsj123455@naver.com</span></li>
                            <li><FontAwesomeIcon icon={faPhoneAlt} rotation={90} /><span>010-4626-0429</span></li>
                            <li><FontAwesomeIcon icon={faIdCard} /><span>정보처리산업기사, 정보처리기능사</span></li>
                        </ul>
                    </MyInfo>
                </AboutMeHeader>
                <InfoContainer>
                    <MyAward>
                        <div>
                            <h2><FontAwesomeIcon icon={faAward} />My Award</h2>
                        </div>
                        <ul>
                            <li>
                                <span>
                                    <span style={{"width" : "20%"}}><FontAwesomeIcon icon={faTrophy} color='gold'/><span style={{"color": "gold"}}>대상</span></span>
                                    <span style={{"width" : "50%"}}>유한대학교 캡스톤 디자인 경진대회</span>
                                    <small style={{"width" : "30%"}}><FontAwesomeIcon icon={faCalendarAlt} />24.11.15</small>
                                </span>
                            </li>
                        </ul>
                    </MyAward>
                    <MyEducation>
                        <div>
                            <h2><FontAwesomeIcon icon={faSchool} />My Education</h2>
                        </div>
                        <ul>
                            <li>
                                <span>
                                    <span><FontAwesomeIcon icon={faPencilAlt} /></span>
                                    <span>KH정보교육원 (디지털컨버전스)공공데이터 융합 자바개발자 양성과정</span>
                                </span>
                                <small><FontAwesomeIcon icon={faCalendarAlt} />24.12 ~ 25.06</small>
                            </li>
                            <li>
                                <span>
                                    <span><FontAwesomeIcon icon={faGraduationCap} /></span>
                                    <span>유한대학교 컴퓨터소프트웨어공학과 컴퓨터소프트웨어전공</span>
                                </span>
                                <small><FontAwesomeIcon icon={faCalendarAlt} />19.03 ~ 25.02</small>
                            </li>
                            <li>
                                <span>
                                    <span><FontAwesomeIcon icon={faGraduationCap} /></span>
                                    <span>부광고등학교 문과</span>
                                </span>
                                <small><FontAwesomeIcon icon={faCalendarAlt} />16.03 ~ 19.02</small>
                            </li>
                        </ul>
                    </MyEducation>
                    <TechStack>
                        <div>
                            <h2><FontAwesomeIcon icon={faCode} />My TechStack</h2>
                        </div>
                        <TechStackList>
                            <li>
                                <h3><FontAwesomeIcon icon={faLaptopCode} />Frontend</h3>
                                <ul>
                                    <li>
                                        <span className='tech-stack javascript'>JavaScript</span>
                                    </li>
                                    <li>
                                        <span className='tech-stack reactJS'>ReactJS</span>
                                    </li>
                                    <li>
                                        <span className='tech-stack redux'>Redux</span>
                                    </li>
                                    <li>
                                        <span className='tech-stack threeJS'>Three.js</span>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h3><FontAwesomeIcon icon={faServer} /> Backend</h3>
                                <ul>
                                    <li>
                                        <span className='tech-stack java'>Java</span>
                                    </li>
                                    <li>
                                        <span className='tech-stack nodeJS'>Node.js</span>
                                    </li>
                                    <li>
                                        <span className='tech-stack mySQL'><span>My</span>SQL</span>
                                    </li>
                                    <li>
                                        <span className='tech-stack oracle'>Oracle</span>
                                    </li>
                                </ul>
                            </li>
                        </TechStackList>
                    </TechStack>
                </InfoContainer>
                <LinkArea>
                    <a href='' onClick={handleMainContent}>프로젝트 보러가기&nbsp;&nbsp;<FontAwesomeIcon icon={faLocationArrow} /></a>
                </LinkArea>
            </AboutMeContainer>
        </AboutMeWrapper>
    )
}

const AboutMeWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem 0;
`

const AboutMeContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--sub-color);
`;

const AboutMeHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const MyPhotoArea = styled.div`
    width: 80%;
    margin-bottom: 1rem;
`;

const MyPhoto = styled.img`
    width: 100%;
    border-radius: 50%;
    box-shadow: 0 0 16px 8px var(--sub-color);
`;

const MyInfo = styled.div`
    width: 80%;
    padding: 1rem;
    margin-bottom: 1rem;

    div {
        margin-bottom: 1rem;
        display: flex;
        flex-direction: column;
    }

    div::after {
        content: "";
        padding: 0.1rem;
        margin-right: 0.5rem;
        background-color: var(--sub-color);
    }

    ul {
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        flex-direction: column;
        font-size: 1rem;
        line-height: 2rem;
        padding-left: 1.5em;

        li {
            display: flex;
            align-items: flex-start;
        }
    }

    svg {
        font-size: 1.5rem;
        margin-right: 1rem;
    }
`;

const InfoContainer = styled.div`
    align-items: flex-start;
`;

const MyAward = styled.div`
    width: 100%;
    padding: 1rem;
    margin-bottom: 1rem;
    
    div {
        margin-bottom: 1rem;
        display: flex;
        flex-direction: column;
    }

    div::after {
        content: "";
        padding: 0.1rem;
        margin-right: 0.5rem;
        background-color: var(--sub-color);
    }

    ul {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        font-size: 1rem;
        padding-left: 1.5em;

        li {
            width: 100%;
            display: flex;

            span {
                width: 100%;
                display: flex;
                align-items: center;
            }

            small {
                text-align: end;
                svg {
                    font-size: 1rem;
                    margin-right: 0.3rem;
                }
            }
        }
    }

    svg {
        font-size: 1.5rem;
        margin-right: 1rem;
    }
`;

const MyEducation = styled.div`
    width: 100%;
    padding: 1rem;
    margin-bottom: 1rem;
    
    div {
        margin-bottom: 1rem;
        display: flex;
        flex-direction: column;
    }

    div::after {
        content: "";
        padding: 0.1rem;
        margin-right: 0.5rem;
        background-color: var(--sub-color);
    }

    ul {
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: flex-start;
        flex-direction: column;
        font-size: 1rem;
        line-height: 2rem;
        padding-left: 1.5em;

        li {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
        }
    }

    svg {
        font-size: 1.5rem;
        margin-right: 1rem;
    }

    small {
        width: 100%;
        text-align: end;

        svg {
            font-size: 1rem;
            margin-right: 0.3rem;
        }
    }
`;

const TechStack = styled.div`
    width: 100%;
    padding: 1rem;
    margin-bottom: 1rem;

    div {
        margin-bottom: 1rem;
        display: flex;
        flex-direction: column;
    }

    div::after {
        content: "";
        padding: 0.1rem;
        margin-right: 0.5rem;
        background-color: var(--sub-color);
    }

    ul {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        font-size: 1rem;
        line-height: 2rem;
        padding-left: 1.5em;

        li {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
        }
    }

    svg {
        font-size: 1.5rem;
        margin-right: 1rem;
    }
`;

const TechStackList = styled.ul`
    ul {
        display: flex;
        flex-direction: row;
        li {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1.5rem;

            svg {
                font-size: 1.3rem;
                margin-right: 0;
            }
        }
    }
`

const LinkArea = styled.div`
    font-size: 1.5rem;
    margin-bottom: 1rem;
    padding: 1rem;

    a {
        color: var(--sub-color);
        transition: 0.3s ease-in-out;
    }
    a:hover {
        font-size: 1.6rem;
    }
`;

export default AboutMe