import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const ThreeDModel = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath); // Load 3D model

  return (
    <Canvas camera={{ position: [0, 1, 3], fov: 50 }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[2, 2, 2]} />
      <OrbitControls enableZoom={true} />
      <primitive object={scene} scale={1.5} />
    </Canvas>
  );
};

export default ThreeDModel;
