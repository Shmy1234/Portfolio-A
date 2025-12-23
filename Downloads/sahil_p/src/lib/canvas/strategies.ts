import { Pencil, Pen, Highlighter, Eraser } from "lucide-react";

const CANVAS_BG = "#F5F0E6";

interface DrawingStrategy {
  opacity: number;
  sizeMultiplier: number;
  lineCap: CanvasLineCap;
  getColor: (baseColor: string) => string;
}

export const drawingStrategies: Record<string, DrawingStrategy> = {
  pencil: { opacity: 0.7, sizeMultiplier: 0.5, lineCap: "round", getColor: (c) => c },
  pen: { opacity: 1, sizeMultiplier: 1, lineCap: "round", getColor: (c) => c },
  highlighter: { opacity: 0.3, sizeMultiplier: 3, lineCap: "square", getColor: (c) => c },
  eraser: { opacity: 1, sizeMultiplier: 2, lineCap: "round", getColor: () => CANVAS_BG },
};

export const TOOL_CONFIG = {
  pencil: { icon: Pencil, label: "Pencil" },
  pen: { icon: Pen, label: "Pen" },
  highlighter: { icon: Highlighter, label: "Highlighter" },
  eraser: { icon: Eraser, label: "Eraser" },
};

export const COLORS = [
  "#1E3A5F", "#4A7C7C", "#A0522D", "#DAA520", "#2E4A2E",
  "#8B4513", "#4169E1", "#DC143C", "#FFD700", "#FFFFFF", "#000000",
];

export const CANVAS_BACKGROUND = CANVAS_BG;

export type Tool = keyof typeof drawingStrategies;

export function getToolSettings(tool: Tool, brushSize: number, brushColor: string) {
  const strategy = drawingStrategies[tool];
  return {
    opacity: strategy.opacity,
    size: brushSize * strategy.sizeMultiplier,
    lineCap: strategy.lineCap,
    color: strategy.getColor(brushColor),
  };
}
