import { useTexture } from '@react-three/drei';
import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three';

let i = 1;
const MyFirstProject = ({position}) => {
    const [myPhoto, setMyPhoto] = useState("/assets/images/myPhoto2.jpg");
    const texture = useTexture(myPhoto);

    const videoRef = useRef();
    const [videoTexture, setVideoTexture] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setMyPhoto(`/assets/images/myPhoto${i++}.jpg`);
        }, 5000);
        
        if(i > 3) i = 1;
    }, [i]);

    useEffect(() => {
        // HTML 비디오 요소 생성 및 설정
        const video = document.createElement('video');
        video.src = '/assets/video/3D인터랙티브웹홍보영상.mp4';
        video.crossOrigin = 'anonymous'; // 외부 URL 지원 시 필요
        video.loop = true;
        video.muted = true;
        video.play();

        // 비디오가 로드되면 텍스처 업데이트
        video.onloadeddata = () => {
            video.play();
            const texture = new THREE.VideoTexture(video);
            texture.minFilter = THREE.LinearFilter;
            texture.magFilter = THREE.LinearFilter;
            texture.format = THREE.RGBFormat;

            setVideoTexture(texture);
        };

        videoRef.current = video;
    }, []);
    
    return (
        <>
            <group position={position}>
                <group position={[-5, 3.5, 0.5]}>
                    <mesh rotation={[0, Math.PI / 2, 0]}>
                        <boxGeometry args={[10, 7, 0.1]} />    
                        {/* <meshStandardMaterial map={texture} color="#ffffff" /> */}
                        <meshStandardMaterial map={texture} />
                    </mesh>
                </group>
                <group position={[0, 3.5, -4.5]}>
                    <mesh>
                        <boxGeometry args={[10, 7, 0.1]} />    
                        {/* <meshStandardMaterial map={texture} color="#ffffff" /> */}
                        <meshStandardMaterial map={videoTexture} />
                    </mesh>
                </group>
                <group position={[0, 0, 0.5]}>
                    <mesh>
                        <boxGeometry args={[10, 0.5, 10]} />
                        <meshStandardMaterial color={"#D4D0B8"} />
                    </mesh>
                </group>
                {/* <group
                    position={[-8, 0, -15]}
                >
                    <Text3D
                        font={"./assets/fonts/HakgyoansimWoojuR.json"}
                        size={1}
                        height={0.3}
                        position={[10, 5, 0]}
                    >
                        안녕하세요
                        <meshStandardMaterial color="#4B6382" />
                    </Text3D>
                    <Text3D
                        font={"./assets/fonts/HakgyoansimWoojuR.json"}
                        size={0.75}
                        height={0.1}
                        position={[10, 4, 0]}
                    >

                        프론트엔드 개발자 임성준입니다.
                        <meshStandardMaterial color="#4B6382" />
                    </Text3D>
                    <Text3D
                        font={"./assets/fonts/HakgyoansimWoojuR.json"}
                        size={0.7}
                        height={0.1}
                        position={[10, 3, 0]}
                    >

                        기본에 충실하며 효율적인 코드를 작성하자
                        <meshStandardMaterial color="#4B6382" />
                    </Text3D>
                </group> */}
            </group>
            <ambientLight intensity={2} />
            <pointLight position={[10, 10, 10]} intensity={1} />
        </>
    )
}

export default MyFirstProject