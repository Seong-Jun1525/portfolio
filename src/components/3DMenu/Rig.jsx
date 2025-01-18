import { CameraControls } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import * as THREE from 'three'

const Rig = ({ position = new THREE.Vector3(0, 0, 2), focus = new THREE.Vector3(0, 0, 0) }) => {
    const { controls, scene } = useThree()
    const { id } = useParams(); // useRoute 대신 useParams 사용

    useEffect(() => {
        const active = scene.getObjectByName(id) // params?.id 대신 id 사용
        if (active) {
            active.parent.localToWorld(position.set(0, 5, 10));
            active.parent.localToWorld(focus.set(0, 0, -2));
        }
        controls?.setLookAt(...position.toArray(), ...focus.toArray(), true)
    }, [id, controls, focus, position, scene]); // useEffect 의존성 배열 추가

    // DOM 레벨에서 휠 동작 차단
    useEffect(() => {
        const handleWheel = (event) => {
            event.preventDefault()
        }

        window.addEventListener('wheel', handleWheel, { passive: false })

        return () => {
            window.removeEventListener('wheel', handleWheel)
        }
    }, [])

    return <CameraControls 
        makeDefault 
        minPolarAngle={0} 
        maxPolarAngle={Math.PI / 2}
        maxDistance={2} 
        minDistance={2}
    />
}

export default Rig
