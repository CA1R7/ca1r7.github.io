class GridsHandler {
  public squareSize: number;
  private hashTrick: number;
  public lineX: number;
  constructor() {
    this.lineX = 0x0;
    this.hashTrick = 25;
    this.squareSize = 50;
  }
  public reset(): void {
    this.lineX = 0x0;
    this.hashTrick = 25;
  }
  public initGridsCanvas(canvas_elenment: HTMLCanvasElement) {
    canvas_elenment.width = window.innerWidth;
    canvas_elenment.height = window.innerHeight;
    return {
      canvas: canvas_elenment,
      ctx: canvas_elenment.getContext("2d"),
    };
  }
  public drawGrids(
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    clicked: boolean,
    isNotHome: boolean,
  ): void {
    if (isNotHome) {
      ctx.clearRect(0, 0, width, height);
    }
    if (!clicked || this.hashTrick > 10) {
      ctx.beginPath();
      ctx.lineWidth = 0x1;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";

      for (let x = 0; x <= width; x += this.squareSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }

      for (let y = 0; y <= height; y += this.squareSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }

      ctx.stroke();
      ctx.closePath();
    }

    clicked && this.LineCursorMove(ctx, width, height);

    this.hashAnimation(ctx, width, height);

    if (isNotHome) {
      requestAnimationFrame(() => {
        this.drawGrids(ctx, width, height, clicked, isNotHome);
      });
    }
  }

  private LineCursorMove(
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
  ): void {
    if (this.hashTrick > 20) {
      ctx.lineWidth = 0x1;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.8)";
      ctx.shadowBlur = 20;
      ctx.shadowColor = "white";

      ctx.beginPath();
      ctx.moveTo(this.lineX, 0);
      ctx.lineTo(this.lineX, height);
      ctx.closePath();
      ctx.stroke();

      let ySquares = ~~(height / this.squareSize);

      for (let i = -1; i < ySquares; i++) {
        ctx.beginPath();
        ctx.moveTo(this.lineX - this.squareSize, this.squareSize * i);
        ctx.lineTo(this.lineX + this.squareSize, this.squareSize * i);
        ctx.closePath();
        ctx.stroke();
      }

      this.lineX += this.squareSize;

      if (this.lineX > width) {
        this.lineX = 0x0;
      }
    }
  }

  private hashAnimation(
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
  ): void {
    if (this.hashTrick > 25) {
      this.hashTrick = 0;

      let xSquares = ~~(width / this.squareSize),
        ySquares = ~~(height / this.squareSize),
        x = Math.floor(xSquares * Math.random()) * this.squareSize,
        y = Math.floor(ySquares * Math.random()) * this.squareSize;

      ctx.lineWidth = 1;
      ctx.strokeStyle = "white";
      ctx.shadowBlur = 20;
      ctx.shadowColor = "white";

      ctx.beginPath();

      for (let i = 1; i < 0x3; i++) {
        let xL = x + this.squareSize * (i - 1);
        ctx.moveTo(xL, y);
        ctx.lineTo(xL, y + this.squareSize * 3);
      }

      for (let j = 1; j < 0x3; j++) {
        let xL = x - this.squareSize,
          yL = y + this.squareSize * j;
        ctx.moveTo(xL, yL);
        ctx.lineTo(xL + this.squareSize * 3, yL);
      }

      ctx.closePath();

      ctx.stroke();

      ctx.shadowBlur = 0;
    } else {
      this.hashTrick++;
    }
  }
}

export const gridsHandler = new GridsHandler();
