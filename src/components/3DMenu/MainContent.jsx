import { Canvas } from '@react-three/fiber'
import React from 'react'
import MyMenu from './MyMenu'
import CanvasLayout from './CanvasLayout';

const MainContent = () => {
    
    return (
        <CanvasLayout>
            <Canvas
                flat 
                camera={{ 
                    fov: 75, 
                    position: [0, 0, 20]
                }}
            >
                <MyMenu position={[0, 0, 0]} />
            </Canvas>
        </CanvasLayout>
    );
};

export default MainContent;