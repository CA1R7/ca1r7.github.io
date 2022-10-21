import { gridsHandler } from "./grids";

class MainLauncher {
  public canvas: HTMLCanvasElement | null;
  public ctx: CanvasRenderingContext2D | null;
  public logo: HTMLImageElement | null;
  public mouseX: number;
  public mouseY: number;
  public clicked: boolean;
  private blurTrick: number;
  constructor() {
    this.clicked = false;
    this.mouseX = this.mouseY = this.blurTrick = 0x0;
    this.logo = this.canvas = this.ctx = null;
  }

  public reset() {
    this.canvas = this.ctx = null;
    this.mouseX = this.mouseY = this.blurTrick = 0x0;
    this.clicked = false;
  }

  public init(): void {
    gridsHandler.reset();

    this.canvas = document.querySelector("#home-page .screen");

    if (this.canvas) {
      this.ctx = this.canvas.getContext("2d");
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;

      this.setMouseMovement();
      
      requestAnimationFrame(this.loop.bind(this));
    }
  }

  public setMouseMovement(): void {
    if (this.canvas) {
      this.canvas.onmousedown = () => {
        this.clicked = true;
      };
      this.canvas.onmouseup = () => {
        this.clicked = false;
      };

      this.canvas.onmousemove = (event: MouseEvent) => {
        this.mouseX = event.clientX;
        this.mouseY = event.clientY;
      };
    }
  }

  private drawLineEffects(): void {
    if (this.canvas && this.ctx) {
      gridsHandler.drawGrids(
        this.ctx,
        this.canvas.width,
        this.canvas.height,
        this.clicked,
        false,
      );
    }
  }

  private drawCenterContent(): void {
    if (this.canvas && this.ctx && this.logo && this.logo.complete) {
      let hWidth = this.canvas.width / 0x2 - this.logo?.width / 0x4,
        hHeight = this.canvas.height / 0x2 - this.logo?.height / 0x4;

      let adX = -(this.mouseX * 0x1e) / this.canvas.width,
        adY = -(this.mouseY * 0x1e) / this.canvas.height,
        x = hWidth + adX,
        y = hHeight + adY;

      if (this.clicked && this.blurTrick > 0x5) {
        this.blurTrick = 0x0;
        this.ctx.shadowBlur = 20;
        this.ctx.shadowColor = "rgba(255, 255, 255, 0.5)";
      }

      this.blurTrick++;

      this.ctx.drawImage(
        this.logo,
        x,
        y,
        this.logo?.width / 0x2,
        this.logo?.height / 0x2,
      );

      this.ctx.shadowBlur = 0;
    }
  }

  public drawCursor(): void {
    if (this.ctx) {
      let radius = 0x20 * (this.clicked ? 1.2 : 1);

      this.ctx.save();

      this.ctx.strokeStyle = "#fff";
      this.ctx.fillStyle = "#fff";

      this.ctx.setLineDash([0x5, 0x5]);

      for (let ratio of [radius, radius / (this.clicked ? 0x2 : 0x4)]) {
        this.ctx.beginPath();
        this.ctx.arc(this.mouseX, this.mouseY, ratio, 0, Math.PI * 0x2);
        ratio === radius ? this.ctx.stroke() : this.ctx.fill();
      }

      this.ctx.restore();
    }
  }

  private drawTexts(): void {
    if (this.canvas && this.ctx) {
      let margin = 20;

      this.ctx.fillStyle = "#fff";

      this.ctx.globalAlpha = 0.5;

      this.ctx.font = "13px Oxanium";

      this.ctx.fillText(
        `< / / / / / / /  ${this.mouseX}WX / ${this.mouseY}WY`,
        margin,
        this.canvas.height - margin,
      );

      let text = `/ / / / / /  COMMING SOON  / / / / / /`;

      this.ctx.fillText(
        text,
        this.canvas.width / 2 - this.ctx.measureText(text).width / 2,
        this.canvas.height - margin,
      );

      text = `ALWAYS TRYING TO MAKE THINGS BETTER  / / / / / / >`;

      this.ctx.fillText(
        text,
        this.canvas.width - margin - this.ctx.measureText(text).width,
        this.canvas.height - margin,
      );

      this.ctx.globalAlpha = 1;
    }
  }

  public loop(): void {
    if (this.canvas && this.ctx) {
      this.ctx.fillStyle = "black";
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.drawLineEffects();
      this.drawCenterContent();
      this.drawCursor();
      this.drawTexts();
    } else {
      this.reset();
    }
    requestAnimationFrame(this.loop.bind(this));
  }
}

export const mainLauncher = new MainLauncher();
