interface Command {
  execute(): void;
  undo(): void;
}

export class DrawCommand implements Command {
  private canvas: HTMLCanvasElement;
  private beforeState: ImageData;
  private afterState: ImageData | null = null;

  constructor(canvas: HTMLCanvasElement, beforeState: ImageData) {
    this.canvas = canvas;
    this.beforeState = beforeState;
  }

  setAfterState(afterState: ImageData) {
    this.afterState = afterState;
  }

  execute(): void {
    if (!this.afterState) return;
    this.canvas.getContext("2d")?.putImageData(this.afterState, 0, 0);
  }

  undo(): void {
    this.canvas.getContext("2d")?.putImageData(this.beforeState, 0, 0);
  }
}

export class CommandManager {
  private undoStack: Command[] = [];
  private redoStack: Command[] = [];
  private maxHistory = 50;

  addCommand(command: Command): void {
    this.undoStack.push(command);
    if (this.undoStack.length > this.maxHistory) this.undoStack.shift();
    this.redoStack = [];
  }

  undo(): boolean {
    const command = this.undoStack.pop();
    if (!command) return false;
    command.undo();
    this.redoStack.push(command);
    return true;
  }

  redo(): boolean {
    const command = this.redoStack.pop();
    if (!command) return false;
    command.execute();
    this.undoStack.push(command);
    return true;
  }

  canUndo = () => this.undoStack.length > 0;
  canRedo = () => this.redoStack.length > 0;
}
