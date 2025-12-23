import { useEffect, useRef } from "react";

interface Snowflake {
  x: number;
  y: number;
  z: number;
  size: number;
  speed: number;
  opacity: number;
  wind: number;
}

export function SnowEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const snowflakesRef = useRef<Snowflake[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize snowflakes with 3D depth
    const createSnowflakes = () => {
      const flakes: Snowflake[] = [];
      const count = Math.min(150, Math.floor(window.innerWidth / 10));

      for (let i = 0; i < count; i++) {
        flakes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random(), // 0 = far, 1 = close
          size: Math.random() * 3 + 1,
          speed: Math.random() * 1 + 0.5,
          opacity: Math.random() * 0.6 + 0.4,
          wind: Math.random() * 0.5 - 0.25,
        });
      }
      return flakes;
    };

    snowflakesRef.current = createSnowflakes();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      snowflakesRef.current.forEach((flake) => {
        // 3D effect: size and speed based on z-depth
        const perspective = 0.5 + flake.z * 0.5;
        const size = flake.size * perspective;
        const speed = flake.speed * perspective;

        // Update position
        flake.y += speed;
        flake.x += flake.wind + Math.sin(flake.y * 0.01) * 0.5;

        // Reset if out of bounds
        if (flake.y > canvas.height) {
          flake.y = -10;
          flake.x = Math.random() * canvas.width;
        }
        if (flake.x > canvas.width) flake.x = 0;
        if (flake.x < 0) flake.x = canvas.width;

        // Draw snowflake with depth-based opacity
        const opacity = flake.opacity * perspective;
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();

        // Add subtle glow for closer snowflakes
        if (flake.z > 0.7) {
          ctx.beginPath();
          ctx.arc(flake.x, flake.y, size * 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.2})`;
          ctx.fill();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      aria-hidden="true"
    />
  );
}
