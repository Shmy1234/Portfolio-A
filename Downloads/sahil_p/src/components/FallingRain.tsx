import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface RaindropProps {
  position: [number, number, number];
  speed: number;
}

function Raindrop({ position, speed }: RaindropProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const initialY = position[1];

  useFrame(() => {
    if (!meshRef.current) return;
    
    meshRef.current.position.y -= speed * 0.15;
    
    if (meshRef.current.position.y < -10) {
      meshRef.current.position.y = initialY + Math.random() * 5;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <cylinderGeometry args={[0.01, 0.01, 0.3, 4]} />
      <meshBasicMaterial color="#6b8cba" transparent opacity={0.25} />
    </mesh>
  );
}

function Raindrops() {
  const drops = useMemo(() => {
    return Array.from({ length: 150 }, (_, i) => ({
      id: i,
      position: [
        (Math.random() - 0.5) * 25,
        Math.random() * 20,
        (Math.random() - 0.5) * 15,
      ] as [number, number, number],
      speed: 0.8 + Math.random() * 0.8,
    }));
  }, []);

  return (
    <>
      {drops.map((drop) => (
        <Raindrop key={drop.id} {...drop} />
      ))}
    </>
  );
}

export function FallingRain() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.3} />
        <Raindrops />
      </Canvas>
    </div>
  );
}
