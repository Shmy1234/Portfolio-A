import { Download, Trash2, Undo2, Redo2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { TOOL_CONFIG, COLORS, Tool } from "@/lib/canvas/strategies";

interface CanvasControlsProps {
  activeTool: Tool;
  setActiveTool: (tool: Tool) => void;
  brushColor: string;
  setBrushColor: (color: string) => void;
  brushSize: number[];
  setBrushSize: (size: number[]) => void;
  canUndo: boolean;
  canRedo: boolean;
  onUndo: () => void;
  onRedo: () => void;
  onClear: () => void;
  onDownload: () => void;
}

export function CanvasControls({
  activeTool, setActiveTool, brushColor, setBrushColor,
  brushSize, setBrushSize, canUndo, canRedo,
  onUndo, onRedo, onClear, onDownload,
}: CanvasControlsProps) {
  return (
    <div className="shrink-0 space-y-1.5">
      <div className="flex items-center gap-2 flex-wrap">
        <div className="flex gap-0.5">
          {(Object.keys(TOOL_CONFIG) as Tool[]).map((tool) => {
            const { icon: Icon, label } = TOOL_CONFIG[tool];
            return (
              <button
                key={tool}
                onClick={() => setActiveTool(tool)}
                className={`p-1.5 rounded transition-all ${
                  activeTool === tool
                    ? "bg-accent text-accent-foreground shadow-sm"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
                title={label}
                aria-label={label}
              >
                <Icon className="w-3.5 h-3.5" />
              </button>
            );
          })}
        </div>

        {activeTool !== "eraser" && (
          <div className="flex gap-1 flex-wrap">
            {COLORS.map((color) => (
              <button
                key={color}
                onClick={() => setBrushColor(color)}
                className={`w-5 h-5 rounded-full border transition-all ${
                  brushColor === color
                    ? "border-foreground scale-110 shadow-md"
                    : "border-transparent hover:scale-105"
                }`}
                style={{ backgroundColor: color }}
                aria-label={`Select ${color}`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 flex-1">
          <span className="text-[10px] font-body text-muted-foreground whitespace-nowrap">
            Size: {brushSize[0]}
          </span>
          <Slider
            value={brushSize}
            onValueChange={setBrushSize}
            min={2}
            max={30}
            step={1}
            className="flex-1 max-w-24"
          />
        </div>

        <div className="flex gap-1">
          <Button variant="outline" size="sm" onClick={onUndo} disabled={!canUndo} className="h-7 w-7 p-0" title="Undo">
            <Undo2 className="w-3.5 h-3.5" />
          </Button>
          <Button variant="outline" size="sm" onClick={onRedo} disabled={!canRedo} className="h-7 w-7 p-0" title="Redo">
            <Redo2 className="w-3.5 h-3.5" />
          </Button>
          <Button variant="outline" size="sm" onClick={onClear} className="h-7 px-2 gap-1 text-xs">
            <Trash2 className="w-3.5 h-3.5" />
            Clear
          </Button>
          <Button variant="default" size="sm" onClick={onDownload} className="h-7 px-2 gap-1 text-xs bg-accent hover:bg-accent/90">
            <Download className="w-3.5 h-3.5" />
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}
