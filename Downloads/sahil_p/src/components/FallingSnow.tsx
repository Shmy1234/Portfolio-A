import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface SnowflakeProps {
  position: [number, number, number];
  speed: number;
  wobbleSpeed: number;
  wobbleAmount: number;
  size: number;
}

interface SnowflakeProps {
  position: [number, number, number];
  speed: number;
  wobbleSpeed: number;
  wobbleAmount: number;
  size: number;
  color: string;
  glowIntensity: number;
}

function Snowflake({ position, speed, wobbleSpeed, wobbleAmount, size, color, glowIntensity }: SnowflakeProps) {
  const groupRef = useRef<THREE.Group>(null);
  const initialX = position[0];
  const timeOffset = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    
    const time = state.clock.elapsedTime + timeOffset;
    
    // Slow fall
    groupRef.current.position.y -= speed * 0.012;
    
    // Gentle wobble
    groupRef.current.position.x = initialX + Math.sin(time * wobbleSpeed) * wobbleAmount;
    
    // Slight rotation
    groupRef.current.rotation.z += 0.005;
    
    if (groupRef.current.position.y < -10) {
      groupRef.current.position.y = 12 + Math.random() * 5;
      groupRef.current.position.x = initialX;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Main snowflake */}
      <mesh>
        <sphereGeometry args={[size, 12, 12]} />
        <meshBasicMaterial color={color} transparent opacity={0.9} />
      </mesh>
      {/* Glow effect */}
      <mesh>
        <sphereGeometry args={[size * 2.5, 8, 8]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={glowIntensity} />
      </mesh>
    </group>
  );
}

function Snowflakes() {
  const flakes = useMemo(() => {
    const colors = ["#ffffff", "#e8e8e8", "#d0d0d0", "#b8b8b8", "#909090", "#686868"];
    return Array.from({ length: 200 }, (_, i) => ({
      id: i,
      position: [
        (Math.random() - 0.5) * 30,
        Math.random() * 25 - 5,
        (Math.random() - 0.5) * 20,
      ] as [number, number, number],
      speed: 0.2 + Math.random() * 0.4,
      wobbleSpeed: 0.3 + Math.random() * 0.5,
      wobbleAmount: 0.3 + Math.random() * 0.8,
      size: 0.02 + Math.random() * 0.08,
      color: colors[Math.floor(Math.random() * colors.length)],
      glowIntensity: 0.15 + Math.random() * 0.2,
    }));
  }, []);

  return (
    <>
      {flakes.map((flake) => (
        <Snowflake key={flake.id} {...flake} />
      ))}
    </>
  );
}

export function FallingSnow() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <Snowflakes />
      </Canvas>
    </div>
  );
}
