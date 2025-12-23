import { useRef, useState, useCallback, useEffect } from "react";
import { CanvasControls } from "./canvas/CanvasControls";
import { DrawCommand, CommandManager } from "@/lib/canvas/command";
import { COLORS, Tool, getToolSettings } from "@/lib/canvas/strategies";
import { initializeCanvas, getCanvasPoint, preserveCanvasOnResize } from "@/lib/canvas/utils";

export function PaintCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const commandManager = useRef(new CommandManager());
  const currentCommand = useRef<DrawCommand | null>(null);
  const lastPos = useRef<{ x: number; y: number } | null>(null);

  const [isDrawing, setIsDrawing] = useState(false);
  const [brushColor, setBrushColor] = useState(COLORS[0]);
  const [brushSize, setBrushSize] = useState([8]);
  const [activeTool, setActiveTool] = useState<Tool>("pen");
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);

  const updateUndoRedoState = useCallback(() => {
    setCanUndo(commandManager.current.canUndo());
    setCanRedo(commandManager.current.canRedo());
  }, []);

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (canvas && container) initializeCanvas(canvas, container);
  }, []);

  useEffect(() => {
    initCanvas();
    const handleResize = () => {
      if (canvasRef.current && containerRef.current) {
        preserveCanvasOnResize(canvasRef.current, containerRef.current);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [initCanvas]);

  const startDrawing = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const point = getCanvasPoint(e, canvas);
    if (!point) return;

    currentCommand.current = new DrawCommand(canvas, ctx.getImageData(0, 0, canvas.width, canvas.height));
    setIsDrawing(true);
    lastPos.current = point;

    const settings = getToolSettings(activeTool, brushSize[0], brushColor);
    ctx.beginPath();
    ctx.arc(point.x, point.y, settings.size / 2, 0, Math.PI * 2);
    ctx.fillStyle = settings.color;
    ctx.globalAlpha = settings.opacity;
    ctx.fill();
    ctx.globalAlpha = 1;
  }, [activeTool, brushSize, brushColor]);

  const draw = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing) return;
    e.preventDefault();

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx || !lastPos.current) return;

    const point = getCanvasPoint(e, canvas);
    if (!point) return;

    const settings = getToolSettings(activeTool, brushSize[0], brushColor);
    ctx.beginPath();
    ctx.moveTo(lastPos.current.x, lastPos.current.y);
    ctx.lineTo(point.x, point.y);
    ctx.strokeStyle = settings.color;
    ctx.lineWidth = settings.size;
    ctx.lineCap = settings.lineCap;
    ctx.lineJoin = "round";
    ctx.globalAlpha = settings.opacity;
    ctx.stroke();
    ctx.globalAlpha = 1;
    lastPos.current = point;
  }, [isDrawing, activeTool, brushSize, brushColor]);

  const stopDrawing = useCallback(() => {
    if (isDrawing && currentCommand.current) {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (ctx && canvas) {
        currentCommand.current.setAfterState(ctx.getImageData(0, 0, canvas.width, canvas.height));
        commandManager.current.addCommand(currentCommand.current);
        updateUndoRedoState();
      }
      currentCommand.current = null;
    }
    setIsDrawing(false);
    lastPos.current = null;
  }, [isDrawing, updateUndoRedoState]);

  const handleUndo = useCallback(() => {
    commandManager.current.undo();
    updateUndoRedoState();
  }, [updateUndoRedoState]);

  const handleRedo = useCallback(() => {
    commandManager.current.redo();
    updateUndoRedoState();
  }, [updateUndoRedoState]);

  const clearCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx || !canvas || !containerRef.current) return;

    const command = new DrawCommand(canvas, ctx.getImageData(0, 0, canvas.width, canvas.height));
    initCanvas();
    command.setAfterState(ctx.getImageData(0, 0, canvas.width, canvas.height));
    commandManager.current.addCommand(command);
    updateUndoRedoState();
  }, [initCanvas, updateUndoRedoState]);

  const downloadCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = "my-painting.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  }, []);

  return (
    <div className="h-full flex flex-col gap-2">
      <div
        ref={containerRef}
        className="relative flex-1 min-h-[350px] w-full rounded-lg overflow-hidden border-2 border-paint-sienna/40"
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full cursor-crosshair touch-none"
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
        />
      </div>
      <CanvasControls
        activeTool={activeTool}
        setActiveTool={setActiveTool}
        brushColor={brushColor}
        setBrushColor={setBrushColor}
        brushSize={brushSize}
        setBrushSize={setBrushSize}
        canUndo={canUndo}
        canRedo={canRedo}
        onUndo={handleUndo}
        onRedo={handleRedo}
        onClear={clearCanvas}
        onDownload={downloadCanvas}
      />
    </div>
  );
}
