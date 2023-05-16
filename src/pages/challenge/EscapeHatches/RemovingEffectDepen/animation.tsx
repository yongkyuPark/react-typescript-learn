export class FadeInAnimation {
    private node: HTMLElement;
    private duration: number;
    private startTime: number | null;
    private frameId: number | null;
  
    constructor(node: HTMLElement) {
      this.node = node;
      this.duration = 0;
      this.startTime = null;
      this.frameId = null;
    }
  
    start(duration: number): void {
      this.duration = duration;
      if (this.duration === 0) {
        // Jump to end immediately
        this.onProgress(1);
      } else {
        this.onProgress(0);
        // Start animating
        this.startTime = performance.now();
        this.frameId = requestAnimationFrame(() => this.onFrame());
      }
    }
  
    onFrame(): void {
      const timePassed = performance.now() - (this.startTime as number);
      const progress = Math.min(timePassed / this.duration, 1);
      this.onProgress(progress);
      if (progress < 1) {
        // We still have more frames to paint
        this.frameId = requestAnimationFrame(() => this.onFrame());
      }
    }
  
    onProgress(progress: number): void {
      this.node.style.opacity = String(progress);
    }
  
    stop(): void {
      cancelAnimationFrame(this.frameId as number);
      this.startTime = null;
      this.frameId = null;
      this.duration = 0;
    }
  }