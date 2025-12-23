import { CANVAS_BACKGROUND } from "./strategies";

export function initializeCanvas(
  canvas: HTMLCanvasElement,
  container: HTMLDivElement
): { width: number; height: number } {
  const ctx = canvas.getContext("2d");
  if (!ctx) return { width: 0, height: 0 };

  const { width, height } = container.getBoundingClientRect();
  canvas.width = width;
  canvas.height = height;

  ctx.fillStyle = CANVAS_BACKGROUND;
  ctx.fillRect(0, 0, width, height);

  for (let i = 0; i < 2000; i++) {
    ctx.fillStyle = `rgba(0, 0, 0, ${Math.random() * 0.02})`;
    ctx.fillRect(Math.random() * width, Math.random() * height, 1, 1);
  }

  return { width, height };
}

export function getCanvasPoint(
  e: React.MouseEvent | React.TouchEvent,
  canvas: HTMLCanvasElement
): { x: number; y: number } | null {
  const rect = canvas.getBoundingClientRect();
  const clientX = "touches" in e ? e.touches[0]?.clientX : e.clientX;
  const clientY = "touches" in e ? e.touches[0]?.clientY : e.clientY;

  if (clientX === undefined || clientY === undefined) return null;

  return {
    x: (clientX - rect.left) * (canvas.width / rect.width),
    y: (clientY - rect.top) * (canvas.height / rect.height),
  };
}

export function preserveCanvasOnResize(
  canvas: HTMLCanvasElement,
  container: HTMLDivElement
): void {
  const tempCanvas = document.createElement("canvas");
  tempCanvas.width = canvas.width;
  tempCanvas.height = canvas.height;
  tempCanvas.getContext("2d")?.drawImage(canvas, 0, 0);

  initializeCanvas(canvas, container);

  if (tempCanvas.width > 0) {
    canvas.getContext("2d")?.drawImage(tempCanvas, 0, 0, canvas.width, canvas.height);
  }
}
