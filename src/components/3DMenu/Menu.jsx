import * as THREE from 'three';
import { MeshPortalMaterial, Text, useCursor } from '@react-three/drei';
import { extend, useFrame } from '@react-three/fiber';
import React, { useRef, useState } from 'react';
import { easing, geometry } from 'maath';
import { suspend } from 'suspend-react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

extend(geometry);

const regular = import('@pmndrs/assets/fonts/inter_regular.woff');
const medium = import('@pmndrs/assets/fonts/inter_medium.woff');

const Menu = ({ id, name, author, bg, width = 1, height = 1.61803398875, children, ...props }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    const portal = useRef(); 
    // MeshPortalMaterial을 참조하기 위한 ref 생성

    const { id: paramId } = useParams(); 
    // 현재 URL에서 id 매개변수를 가져옴

    const [hover, setHover] = useState(false); 
    // hover 상태를 관리하는 useState
    useCursor(hover); 
    // hover 상태에 따라 커서 모양을 변경

    useFrame((state, dt) => {
        if (portal.current) {
            const isActive = paramId === id; 
            // 현재 URL의 id와 메뉴의 id를 비교하여 활성 상태 확인
            easing.damp(portal.current, 'blend', isActive ? 1 : 0, 0.2, dt); 
            // 애니메이션 보간(easing)을 사용해 blend 값을 부드럽게 변경
        }
    });    

    const mediumFont = suspend(() => medium, []); 
    // medium 폰트를 suspend-react로 비동기 로드
    const regularFont = suspend(() => regular, []); 
    // regular 폰트를 suspend-react로 비동기 로드

    const handleMenu = () => {
        dispatch(sideContentFirstProject());
    }

    return (
        <group {...props}>
            {/* 텍스트 설정 */}
            <Text
                font={mediumFont?.default || ''}
                fontSize={0.1}
                anchorY="center"
                anchorX="center"
                lineHeight={1}
                position={[0, 0.3, 0.01]}
                material-toneMapped={false}
            >
                {name}
            </Text>
            <Text
                font={regularFont?.default || ''}
                fontSize={0.1}
                anchorY="center"
                anchorX="center"
                position={[0, -0.25, 0.01]}
                material-toneMapped={false}
            >
                {author}
            </Text>
            <mesh
                name={id}
                onDoubleClick={(e) => {
                    e.stopPropagation();
                    navigate(`/main-content/${id}`); // React Router 상태를 업데이트
                    // dispatch(handleMenu());
                }}
                onPointerOver={(e) => {
                    e.stopPropagation(); // 이벤트 전파 방지
                    setHover(true); // hover 상태 활성화
                }}
                onPointerOut={(e) => {
                    e.stopPropagation(); // 이벤트 전파 방지
                    setHover(false); // hover 상태 비활성화
                }}
            >
                <roundedPlaneGeometry args={[width, height, 0.1]} />
                <MeshPortalMaterial
                    ref={portal} 
                    // 포털 메터리얼 참조
                    events={!!paramId && paramId === id} 
                    // 현재 메뉴가 활성 상태일 때만 이벤트 활성화
                    side={THREE.DoubleSide} 
                    // 양면 렌더링
                >
                    <color attach="background" args={[bg]} /> 
                    {children} 
                </MeshPortalMaterial>

            </mesh>
        </group>
    );
};

export default Menu;