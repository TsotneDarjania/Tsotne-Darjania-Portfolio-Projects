import { Application, Point, Sprite, Texture } from "pixi.js";
import { percentof } from "../../helper/helper";
import { Bodies, Body } from "matter-js";

export class StaticBall extends Sprite {
  matterBody!: Body;

  constructor(public app: Application, texture: Texture, x: number, y: number) {
    super(texture);
    this.position.set(x, y);

    this.width = percentof(this.app.renderer.width, 0.4);
    this.height = percentof(this.app.renderer.width, 0.4);

    this.anchor.x = 0.5;
    this.anchor.y = 0.5;

    this.app.stage.addChild(this);

    this.addMatterBody();
  }

  addMatterBody() {
    const globalPos: Point = this.getGlobalPosition();

    this.matterBody = Bodies.circle(
      globalPos.x,
      globalPos.y,
      percentof(this.app.renderer.width, 0.15),
      {
        isStatic: true,
      }
    );
    this.matterBody.label = "staticBall";
  }
}
