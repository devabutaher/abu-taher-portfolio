"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useRef, useEffect } from "react";
import * as THREE from "three";

function FloatingGeometry() {
  const meshRef = useRef();

  useEffect(() => {
    const animate = () => {
      if (meshRef.current) {
        meshRef.current.rotation.x += 0.003;
        meshRef.current.rotation.y += 0.005;
        meshRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.5;
      }
    };

    const interval = setInterval(animate, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <icosahedronGeometry args={[1.5, 4]} />
      <meshPhongMaterial
        color="#8b5cf6"
        emissive="#5d4e99"
        shininess={100}
        wireframe={false}
      />
    </mesh>
  );
}

export const Hero3D = () => {
  return (
    <div style={{ width: "100%", height: "400px", borderRadius: "12px", overflow: "hidden" }}>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 3.5]} />
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#8b5cf6" />
        <pointLight position={[-10, -10, 10]} intensity={0.5} color="#5d4e99" />
        <FloatingGeometry />
        <OrbitControls autoRotate autoRotateSpeed={2} enableZoom={false} />
      </Canvas>
    </div>
  );
};
