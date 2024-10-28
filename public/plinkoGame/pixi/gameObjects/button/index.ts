import { Application, Text, Graphics, TextStyle } from "pixi.js";
import { percentof } from "../../../helper/helper";

export class PixiButton {
  graphics!: Graphics;
  text!: Text;

  constructor(
    public app: Application,
    public x: number,
    public y: number,
    public width: number,
    public height: number,
    public borderColor: number = 0x000000,
    public backgroundColor: number = 0xffffff,
    public innerText: string = "default"
  ) {
    this.graphics = new Graphics();

    this.init();
  }

  init() {
    this.graphics.roundRect(this.x, this.y, this.width, this.height, 10);
    this.graphics.stroke({
      color: this.borderColor,
      width: 2,
    });
    this.graphics.fill({
      color: this.backgroundColor,
    });

    this.graphics.interactive = true;

    const textStyle = new TextStyle({
      fontFamily: "Arial",
      fontSize: 24,
      fill: "white",
      align: "center",
    });

    this.text = new Text({
      text: this.innerText,
      style: {
        fontFamily: "Arial",
        fontSize: percentof(this.width, 17.3),
        fill: "white",
        align: "center",
      },
    });

    this.text.anchor.set(0.5);
    this.text.position.set(this.x + this.width / 2, this.y + this.height / 2);

    this.app.stage.addChild(this.graphics);
    this.app.stage.addChild(this.text);
  }

  onClick(callback: () => void) {
    this.graphics.on("pointerdown", callback);
  }

  onHover(callback: () => void) {
    this.graphics.on("pointerover", callback);
  }
}
