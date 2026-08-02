import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, MeshDistortMaterial, Float, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Interactive Floating Neural / Geometric Core Mesh
const NeuralCoreMesh: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const outerWireframeRef = useRef<THREE.Mesh>(null!);
  const ringRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const { pointer } = state;

    // Smooth auto-rotation + mouse parallax tilt
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(time * 0.3) * 0.2 + pointer.y * 0.3;
      meshRef.current.rotation.y = time * 0.25 + pointer.x * 0.4;
    }

    if (outerWireframeRef.current) {
      outerWireframeRef.current.rotation.x = -time * 0.15 + pointer.y * 0.2;
      outerWireframeRef.current.rotation.y = time * 0.2 - pointer.x * 0.3;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z = time * 0.4;
      ringRef.current.rotation.x = Math.sin(time * 0.5) * 0.3 + 1.2;
    }
  });

  return (
    <group scale={isMobile ? 0.75 : 1.15}>
      {/* Floating Wrapper */}
      <Float speed={2} rotationIntensity={0.6} floatIntensity={1.2}>
        {/* Main Distorted Core */}
        <mesh ref={meshRef} position={[0, 0, 0]}>
          <icosahedronGeometry args={[1.6, 6]} />
          <MeshDistortMaterial
            color="#4c1d95"
            emissive="#1e1b4b"
            emissiveIntensity={0.6}
            roughness={0.15}
            metalness={0.8}
            distort={0.35}
            speed={2}
          />
        </mesh>

        {/* Outer Tech Wireframe Hull */}
        <mesh ref={outerWireframeRef} position={[0, 0, 0]}>
          <icosahedronGeometry args={[2.1, 2]} />
          <meshStandardMaterial
            color="#06b6d4"
            wireframe
            transparent
            opacity={0.3}
            emissive="#06b6d4"
            emissiveIntensity={0.3}
          />
        </mesh>

        {/* Orbiting Tech Ring */}
        <mesh ref={ringRef} position={[0, 0, 0]}>
          <torusGeometry args={[2.6, 0.03, 16, 100]} />
          <meshStandardMaterial
            color="#8b5cf6"
            emissive="#8b5cf6"
            emissiveIntensity={0.8}
            roughness={0.1}
          />
        </mesh>
      </Float>
    </group>
  );
};

export const Hero3DScene: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full h-full absolute inset-0 pointer-events-auto">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        dpr={isMobile ? [1, 1.25] : [1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        {/* Lighting Setup */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#8b5cf6" />
        <directionalLight position={[-10, -10, -5]} intensity={1.2} color="#06b6d4" />
        <pointLight position={[0, 0, 4]} intensity={2} color="#c084fc" />

        {/* Dynamic Starfield Background */}
        <Stars
          radius={80}
          depth={50}
          count={isMobile ? 1200 : 3500}
          factor={4}
          saturation={0.5}
          fade
          speed={1.2}
        />

        {/* Central Neural 3D Core */}
        <NeuralCoreMesh isMobile={isMobile} />

        {/* Smooth Orbit Control fallback */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
          rotateSpeed={0.4}
        />
      </Canvas>
    </div>
  );
};

export default Hero3DScene;
