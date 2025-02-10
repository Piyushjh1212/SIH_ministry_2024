import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";


const ThreeDModel = ({ modelPath }) => {
  if (!modelPath) {
    console.error("Model path is undefined!");
    return <p>Error: Model path is missing.</p>;
  }

  const { scene } = useGLTF(modelPath); // Load 3D model

  return <primitive object={scene} scale={1.5} />;
};

const ModelViewer = ({ modelPath }) => {
  return (
    <Canvas camera={{ position: [0, 1, 3], fov: 50 }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[2, 2, 2]} />
      <OrbitControls enableZoom={true} />
      <Suspense fallback={<p>Loading 3D Model...</p>}>
        <ThreeDModel modelPath={modelPath} />
      </Suspense>
    </Canvas>
  );
};

export default ModelViewer;
