import React, { useRef } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';

const HackerRoom = (props) => {
  const { nodes, materials } = useGLTF('/models/hacker-room.glb'); // use a extensão correta aqui
  

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={21.277}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Final_lambert1_0.geometry}
          material={materials.lambert1}
          rotation={[1.5, 0, 0]}
          scale={0.01}
        />
      </group>
    </group>
  );
};

useGLTF.preload('/models/hacker-room.glb'); // use a extensão correta aqui

export default HackerRoom