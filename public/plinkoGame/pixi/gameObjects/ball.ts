import { Application, Sprite, Texture } from "pixi.js";
import { percentof } from "../../helper/helper";
import { Bodies, Body } from "matter-js";

export class Ball extends Sprite {
  matterBody!: Body;

  constructor(public app: Application, texture: Texture, x: number, y: number) {
    super(texture);
    this.position.set(x, y);

    this.width = percentof(this.app.renderer.width, 3);
    this.height = percentof(this.app.renderer.width, 3);

    this.anchor.x = 0.5;
    this.anchor.y = 0.5;

    this.app.stage.addChild(this);

    this.addMatterBody();
  }

  addMatterBody() {
    this.matterBody = Bodies.circle(
      this.x,
      this.y,
      percentof(this.app.renderer.width, 1.3),
      {
        restitution: 0.9, // Make it bouncy
      }
    );
  }
}
