import React from 'react';
import Menu from './Menu';
import { Gltf, Preload } from '@react-three/drei';
import Rig from './Rig';
import MyFirstProject from './MyFirstProject';

const MyMenu = ({position}) => {
  return (
    <group position={position}>
      <Menu id="Yuhan-Interactive-Web" name="유한대학교 홍보 웹" author="SeongJun" bg="#394931" position={[-2, 0, 0]} rotation={[0, Math.PI / 9, 0]}>
          {/* <Gltf src="./assets/models/fiesta_tea-transformed.glb" position={[0, -2, -3]} /> */}
          <MyFirstProject id="Yuhan-Interactive-Web" position={[0, -0.7, -2]} />
      </Menu>
      <Menu id="my-goals" name="MyGoals" author="SeongJun" bg="#d1d1ca" position={[1.15, 0, 0]} rotation={[0, -(Math.PI / 9), 0]}>
          <Gltf src="./assets/models/still_life_based_on_heathers_artwork-transformed.glb" position={[0, -0.8, -4]} />
      </Menu>
      <Rig />
      <Preload all />
    </group>
  )
}

export default MyMenu