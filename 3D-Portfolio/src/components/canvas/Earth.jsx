import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Earth = () => {
  const { scene } = useGLTF('./planet/scene.gltf');

  console.log('Loaded GLTF:', scene);

  if (!scene) {
    return null;
  }

  return (
    <primitive object={scene} scale={1.5} position={[0, 0, 0]} rotation={[0, 0, 0]} />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand' // Ensure this is spelled correctly
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [-4, 3, 5], fov:45, near:0.1, far:200}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
