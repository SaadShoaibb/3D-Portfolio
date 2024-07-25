// Ball.jsx
import React from 'react';
import { Decal, Float, useTexture } from '@react-three/drei';

const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 1]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#ff0000" />
        {decal && (
          <Decal
            position={[0, 0, 1]}
            rotation={[0, 0, 0]}
            scale={1}
            map={decal}
          />
        )}
      </mesh>
    </Float>
  );
};

export default Ball;
