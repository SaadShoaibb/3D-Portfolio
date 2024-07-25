// SingleCanvas.jsx
import React, { Suspense } from 'react'; // Import Suspense here
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
import CanvasLoader from '../Loader'; // Ensure you have a CanvasLoader component


const SingleCanvas = ({ children }) => (
  <Canvas color='#940f00' frameLoop="demand" gl={{ preserveDrawingBuffer: true }}>
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls enableZoom={false} />
      {children}
    </Suspense>
    <Preload all />
  </Canvas>
);

export default SingleCanvas;
