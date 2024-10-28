import { Application, Sprite, Texture } from "pixi.js";
import { percentof } from "../../helper/helper";
import { Bodies, Body, Engine, World } from "matter-js";
import { PixiGame } from "..";

export class Ball extends Sprite {
  matterBody!: Body;
  isAlreadyInHole: boolean = false;

  constructor(
    public app: Application,
    texture: Texture,
    x: number,
    y: number,
    public pixiGame: PixiGame
  ) {
    super(texture);
    this.position.set(x, y);

    this.width = percentof(this.app.renderer.width, 1.5);
    this.height = percentof(this.app.renderer.width, 1.5);

    this.anchor.x = 0.5;
    this.anchor.y = 0.5;

    this.app.stage.addChild(this);

    this.addMatterBody();
    this.update();
  }

  addMatterBody() {
    this.matterBody = Bodies.circle(
      this.x,
      this.y,
      percentof(this.app.renderer.width, 0.5),
      {
        restitution: 0.8, // Make it bouncy
      }
    );
    this.matterBody.label = "ball";

    // Add the Matter.js body to the world
    World.add(this.pixiGame.engine.world, this.matterBody);

    // @ts-ignore
    this.matterBody.targetObject = this;
  }

  update() {
    // Listen to the Pixi.js ticker for each frame
    this.app.ticker.add(() => {
      // Sync the position and rotation of the Pixi.js sprite with the Matter.js body
      this.x = this.matterBody.position.x;
      this.y = this.matterBody.position.y;
      this.rotation = this.matterBody.angle;
    });
  }

  destroy() {
    this.app.ticker.remove(this.update, this);
    this.app.stage.removeChild(this);
  }
}
