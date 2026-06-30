"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars, Float, Text, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const ORBIT_TAGS = ["NX", "RX", "TS", "JS", "NODE"];

function OrbitNode({ index, total, label }: { index: number; total: number; label: string }) {
  const angle = (index / total) * Math.PI * 2;
  const radius = 2.6;
  const x = Math.cos(angle) * radius;
  const z = Math.sin(angle) * radius;
  const y = Math.sin(angle * 2) * 0.4;

  return (
    <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.6}>
      <group position={[x, y, z]}>
        <mesh>
          <sphereGeometry args={[0.14, 24, 24]} />
          <meshStandardMaterial
            color="#00e5ff"
            emissive="#00e5ff"
            emissiveIntensity={1.4}
            toneMapped={false}
          />
        </mesh>
        <Text
          position={[0, 0.32, 0]}
          fontSize={0.18}
          color="#f3f6fb"
          anchorX="center"
          anchorY="middle"
          font="https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxjPVmUsaaDhw.woff"
        >
          {label}
        </Text>
      </group>
    </Float>
  );
}

function Core() {
  const coreRef = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  useFrame((_, delta) => {
    if (!coreRef.current) return;
    coreRef.current.rotation.y += delta * 0.18;
    coreRef.current.rotation.x = THREE.MathUtils.lerp(
      coreRef.current.rotation.x,
      pointer.y * 0.25,
      0.04
    );
    coreRef.current.rotation.z = THREE.MathUtils.lerp(
      coreRef.current.rotation.z,
      -pointer.x * 0.15,
      0.04
    );
  });

  return (
    <group ref={coreRef}>
      <mesh>
        <icosahedronGeometry args={[1.3, 1]} />
        <MeshDistortMaterial
          color="#7c3aed"
          attach="material"
          distort={0.35}
          speed={1.8}
          roughness={0.15}
          metalness={0.4}
          transparent
          opacity={0.55}
        />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[1.36, 1]} />
        <meshBasicMaterial color="#00e5ff" wireframe transparent opacity={0.35} />
      </mesh>
      {ORBIT_TAGS.map((tag, i) => (
        <OrbitNode key={tag} index={i} total={ORBIT_TAGS.length} label={tag} />
      ))}
    </group>
  );
}

function CameraRig() {
  const { camera, pointer } = useThree();
  useFrame(() => {
    /* eslint-disable react-hooks/immutability -- three.js camera objects from
       useThree are mutable scene-graph instances; mutating them per-frame is
       the standard react-three-fiber pattern, not React state. */
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.6, 0.03);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, pointer.y * 0.4, 0.03);
    camera.lookAt(0, 0, 0);
    /* eslint-enable react-hooks/immutability */
  });
  return null;
}

export default function Scene() {
  const lights = useMemo(
    () => (
      <>
        <ambientLight intensity={0.35} />
        <pointLight position={[4, 3, 4]} intensity={40} color="#00e5ff" />
        <pointLight position={[-4, -2, -3]} intensity={25} color="#7c3aed" />
      </>
    ),
    []
  );

  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 6.5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <fog attach="fog" args={["#050816", 6, 13]} />
      {lights}
      <Stars radius={50} depth={40} count={1400} factor={2.2} saturation={0} fade speed={0.6} />
      <Core />
      <CameraRig />
    </Canvas>
  );
}
