import React, { useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

// ThreeDModel component to render the 3D model
const ThreeDModel = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath); // Load the 3D model
  return <primitive object={scene} scale={1.5} position={[0, -1, 0]} />;
};

const ModelComponent = ({ modelPath }) => {
  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} intensity={1} />
      <OrbitControls enableZoom={true} />
      <Suspense fallback={null}>
        <ThreeDModel modelPath={modelPath} />
      </Suspense>
    </Canvas>
  );
};

export default ModelComponent;
