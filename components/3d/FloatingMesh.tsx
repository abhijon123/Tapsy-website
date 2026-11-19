"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function AnimatedBlob() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15;
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={0.6} floatIntensity={1.2}>
      <Sphere ref={meshRef} args={[1.3, 64, 64]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#8B5CF6"
          attach="material"
          distort={0.4}
          speed={2.2}
          roughness={0.2}
          metalness={0.3}
          wireframe={false}
        />
      </Sphere>
    </Float>
  );
}

function SecondaryAccentOrb({ position, color }: { position: [number, number, number]; color: string }) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.3;
      ref.current.rotation.z += delta * 0.2;
    }
  });

  return (
    <Float speed={3} rotationIntensity={1} floatIntensity={1.5}>
      <Sphere ref={ref} args={[0.5, 32, 32]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.35}
          speed={3}
          roughness={0.25}
          metalness={0.2}
        />
      </Sphere>
    </Float>
  );
}

export default function FloatingMeshCanvas() {
  return (
    <div className="w-full h-full min-h-[350px] relative pointer-events-none select-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[10, 10, 5]} intensity={2.5} color="#FFEDD5" />
        <directionalLight position={[-10, -10, -5]} intensity={1.8} color="#C4B5FD" />
        <pointLight position={[0, 0, 3]} intensity={2.0} color="#F472B6" />

        <Sparkles count={35} scale={5} size={3} speed={0.4} opacity={0.6} color="#EC4899" />
        <AnimatedBlob />
        <SecondaryAccentOrb position={[1.8, 1.2, -0.5]} color="#F97316" />
        <SecondaryAccentOrb position={[-1.7, -1.1, -0.8]} color="#EC4899" />
      </Canvas>
    </div>
  );
}

