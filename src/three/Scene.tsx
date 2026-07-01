"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// ─── Seeded pseudo-random so ESLint purity rule is satisfied ──────────────────
function seededRng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

// ─── Galaxy particle system ───────────────────────────────────────────────────
function Galaxy() {
  const points = useRef<THREE.Points>(null);
  const count = 6000;

  const [positions, colors] = useMemo(() => {
    const rng = seededRng(42);
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const colorInner = new THREE.Color("#00e5ff");
    const colorOuter = new THREE.Color("#7c3aed");
    const colorAccent = new THREE.Color("#14f195");

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const radius = rng() * 6 + 0.5;
      const arms = 3;
      const arm = (i % arms) * ((Math.PI * 2) / arms);
      const spin = radius * 0.4;
      const angle = arm + spin + (rng() - 0.5) * 0.6;
      const sign = () => (rng() < 0.5 ? 1 : -1);
      const randomX = Math.pow(rng(), 3) * sign() * 0.5;
      const randomY = Math.pow(rng(), 3) * sign() * 0.25;
      const randomZ = Math.pow(rng(), 3) * sign() * 0.5;

      pos[i3]     = Math.cos(angle) * radius + randomX;
      pos[i3 + 1] = randomY;
      pos[i3 + 2] = Math.sin(angle) * radius + randomZ;

      const t = radius / 6.5;
      const mixedColor = colorInner.clone().lerp(colorOuter, t);
      if (rng() < 0.08) mixedColor.lerp(colorAccent, 0.7);
      col[i3]     = mixedColor.r;
      col[i3 + 1] = mixedColor.g;
      col[i3 + 2] = mixedColor.b;
    }
    return [pos, col];
  }, []);

  useFrame((_, delta) => {
    if (points.current) points.current.rotation.y += delta * 0.035;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.022}
        sizeAttenuation
        vertexColors
        transparent
        alphaTest={0.001}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// ─── Orbiting tech nodes ──────────────────────────────────────────────────────
const NODES = [
  { color: "#00e5ff" }, { color: "#7c3aed" }, { color: "#14f195" },
  { color: "#00e5ff" }, { color: "#7c3aed" }, { color: "#14f195" },
];

function OrbitNodes() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * 0.22;
  });

  return (
    <group ref={groupRef}>
      {NODES.map((node, i) => {
        const total = NODES.length;
        const theta = (i / total) * Math.PI * 2;
        const phi = i % 2 === 0 ? 0.35 : -0.35;
        const r = 2.1;
        const x = r * Math.cos(theta);
        const y = r * Math.sin(phi) * 0.65;
        const z = r * Math.sin(theta);
        return (
          <group key={i} position={[x, y, z]}>
            <mesh>
              <sphereGeometry args={[0.07, 16, 16]} />
              <meshBasicMaterial color={node.color} />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

// ─── Glowing core icosahedron ─────────────────────────────────────────────────
function Core() {
  const meshRef = useRef<THREE.Mesh>(null);
  const wirRef  = useRef<THREE.Mesh>(null);
  const { pointer } = useThree();

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.rotation.x += delta * 0.15;
    }
    if (wirRef.current) {
      wirRef.current.rotation.y -= delta * 0.2;
      wirRef.current.rotation.x -= delta * 0.1;
      /* eslint-disable react-hooks/immutability */
      wirRef.current.position.x = THREE.MathUtils.lerp(wirRef.current.position.x, pointer.x * 0.4, 0.05);
      wirRef.current.position.y = THREE.MathUtils.lerp(wirRef.current.position.y, pointer.y * 0.3, 0.05);
      /* eslint-enable react-hooks/immutability */
    }
  });

  return (
    <>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[0.85, 2]} />
        <meshPhongMaterial color="#0d0828" emissive="#7c3aed" emissiveIntensity={0.7} shininess={120} transparent opacity={0.8} />
      </mesh>
      <mesh ref={wirRef}>
        <icosahedronGeometry args={[0.92, 2]} />
        <meshBasicMaterial color="#00e5ff" wireframe transparent opacity={0.4} />
      </mesh>
      <OrbitNodes />
    </>
  );
}

// ─── Background scatter particles ─────────────────────────────────────────────
function FloatingParticles() {
  const ref = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const rng = seededRng(99);
    const arr = new Float32Array(200 * 3);
    for (let i = 0; i < 200; i++) {
      arr[i * 3]     = (rng() - 0.5) * 18;
      arr[i * 3 + 1] = (rng() - 0.5) * 10;
      arr[i * 3 + 2] = (rng() - 0.5) * 10 - 2;
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.007;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#00e5ff" transparent opacity={0.45} blending={THREE.AdditiveBlending} depthWrite={false} />
    </points>
  );
}

// ─── Camera mouse parallax ────────────────────────────────────────────────────
function CameraRig() {
  const { camera, pointer } = useThree();
  useFrame(() => {
    /* eslint-disable react-hooks/immutability */
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 1.0, 0.04);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, pointer.y * 0.5, 0.04);
    camera.lookAt(0, 0, 0);
    /* eslint-enable react-hooks/immutability */
  });
  return null;
}

// ─── Export ───────────────────────────────────────────────────────────────────
export default function Scene() {
  return (
    <Canvas
      dpr={[1, 1.8]}
      camera={{ position: [0, 1.5, 6], fov: 60 }}
      gl={{ antialias: true, alpha: true, toneMapping: THREE.ACESFilmicToneMapping }}
    >
      <fog attach="fog" args={["#050816", 8, 20]} />
      <ambientLight intensity={0.4} />
      <pointLight position={[3, 4, 3]} intensity={60} color="#00e5ff" />
      <pointLight position={[-4, -3, -2]} intensity={40} color="#7c3aed" />
      <pointLight position={[0, 0, 0]}  intensity={20} color="#14f195" />
      <Galaxy />
      <FloatingParticles />
      <Core />
      <CameraRig />
    </Canvas>
  );
}
