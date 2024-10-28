import { Bodies, Body } from "matter-js";
import { Application, Graphics, Text } from "pixi.js";
import { percentof } from "../../../helper/helper";
import { set } from "mongoose";

export class TargetBox {
  graphics!: Graphics;
  matterBody!: Body;
  text!: Text;

  constructor(
    public app: Application,
    public x: number,
    public y: number,
    public w: number,
    public h: number,
    public color: number = 0xffffff,
    public innerText: string,
    public type: "green" | "red" | "yellow"
  ) {
    this.graphics = new Graphics();

    this.init();
  }

  init() {
    this.graphics.roundRect(this.x, this.y, this.w, this.h, 1);
    this.graphics.stroke({
      color: 0x000000,
      width: 2,
    });
    this.graphics.fill({
      color: this.color,
    });

    this.app.stage.addChild(this.graphics);
    this.addMatterBody();
    this.addText();
  }

  addText() {
    this.text = new Text({
      text: this.innerText,
      style: {
        fontFamily: "Arial",
        fontWeight: "bold",
        fontSize: percentof(this.w, 35),
        fill: "black",
        align: "center",
      },
    });

    this.text.anchor.set(0.5);
    this.text.position.set(this.x + this.w / 2, this.y + this.h / 2);

    this.app.stage.addChild(this.text);
  }

  animate() {
    // Reference to the blinking function
    const blink = () => {
      this.graphics.alpha = Math.abs(Math.sin(this.app.ticker.lastTime / 200));
    };

    this.app.ticker.add(blink);

    setTimeout(() => {
      this.app.ticker.remove(blink);
      this.graphics.alpha = 1;
    }, 2000);
  }

  addMatterBody() {
    this.matterBody = Bodies.rectangle(
      this.x + this.graphics.width / 2,
      this.y + this.graphics.height / 2,
      this.w,
      this.h,
      {
        isStatic: true,
        isSensor: true,
      }
    );

    // @ts-ignore
    this.matterBody.targetBox = this;
    this.matterBody.label = `targetBox-${this.type}-${this.innerText}`;
  }
}
