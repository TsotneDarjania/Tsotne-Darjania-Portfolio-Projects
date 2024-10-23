import { Application, Assets, Sprite, Texture } from "pixi.js";
import { Engine, Bodies, World, Body, Render, Runner } from "matter-js";
import { calculatePercentage, percentof } from "../helper/helper";
import { Ball } from "./gameObjects/ball";

export class PixiGame {
  app!: Application;
  render!: Render;
  engine!: Engine;
  circleTexture!: Texture;
  ball!: Ball;

  constructor() {
    this.app = new Application();
    this.engine = Engine.create(); // Create the Matter.js engine
    this.init();
  }

  async init() {
    await this.app.init({
      width: window.innerWidth,
      height: window.innerHeight,
      resizeTo: window,
      backgroundAlpha: 0,
    });

    // Append the Pixi.js canvas to the body
    document.body.appendChild(this.app.canvas);

    // Load the texture we need
    await this.loadAssets();

    // Initialize the scene
    this.initScene();

    // Initialize Matter.js bodies and start physics
    this.initMatter();

    // Update the scene and sync Matter.js with Pixi.js
    this.update();
  }

  initScene() {
    this.ball = new Ball(
      this.app,
      this.circleTexture,
      this.app.renderer.width / 2,
      10
    );

    console.log("3333");
  }

  async loadAssets() {
    this.circleTexture = await Assets.load(
      "../static/img/plinkoGame/green-circle.png"
    );
  }

  initMatter() {
    const ground = Bodies.rectangle(
      this.app.renderer.width / 2,
      this.app.renderer.height - 40,
      this.app.renderer.width,
      10,
      {
        isStatic: true,
      }
    );

    // Add the.ball body to the Matter.js world
    World.add(this.engine.world, [this.ball.matterBody, ground]);

    // Set up Matter.js render for debugging
    this.render = Render.create({
      element: document.body, // Append to body
      engine: this.engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: true, // Shows wireframe
        background: "transparent", // Make the background transparent
      },
    });

    Render.run(this.render);

    // Set z-index of the Matter.js canvas to ensure it's on top of Pixi
    (this.render.canvas as HTMLCanvasElement).style.position = "absolute";
    (this.render.canvas as HTMLCanvasElement).style.top = "0";
    (this.render.canvas as HTMLCanvasElement).style.left = "0";
    (this.render.canvas as HTMLCanvasElement).style.zIndex = "-1";

    // Start the Matter.js engine and runner
    const runner = Runner.create();
    Runner.run(runner, this.engine);
  }

  update() {
    this.app.ticker.add(() => {
      // Update the Pixi.js sprite position to match the Matter.js body's position
      this.ball.x = this.ball.position.x;
      this.ball.y = this.ball.position.y;

      // Sync the rotation if necessary
      this.ball.rotation = this.ball.angle;

      // Make sure the Matter.js engine is updated in each frame
      Engine.update(this.engine);
    });
  }
}
