import {
  Application,
  Assets,
  Container,
  Graphics,
  Sprite,
  Text,
  Texture,
} from "pixi.js";
import { Engine, Bodies, World, Body, Render, Runner, Events } from "matter-js";
import {
  calculatePercentage,
  getRandomFloat,
  percentof,
} from "../helper/helper";
import { Ball } from "./gameObjects/ball";
import { StaticBall } from "./gameObjects/staticBall";
import { TargetBox } from "./gameObjects/targetBox";
import { MenuInterface } from "./gameObjects/menuInterface";

export class PixiGame {
  app!: Application;
  render!: Render;
  engine!: Engine;
  greenCircleTexture!: Texture;
  yellowCircleTexture!: Texture;
  redCircleTexture!: Texture;
  staticCircleTexture!: Texture;
  minusIconTexture!: Texture;
  plusIconTexture!: Texture;
  ball!: Ball;

  staticBallBodies: Body[] = [];
  targetBoxesBodies: Body[] = [];

  menuInterface!: MenuInterface;

  constructor() {
    this.app = new Application({
      resolution: window.devicePixelRatio || 1,
    });
    this.engine = Engine.create();
    this.staticBallBodies = [];
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
    this.addStaticBalls();
    this.addMenuInterface();
    this.addBoxTargets();
  }

  addBoxTargets() {
    let posX =
      this.app.renderer.width / 2 -
      percentof(this.app.renderer.width, 2.14) * 7 -
      percentof(this.app.renderer.width, 2.15) / 2;
    let posY =
      this.app.renderer.height - percentof(this.app.renderer.height, 19);

    const paddingX = percentof(this.app.renderer.width, 2.15);
    const paddingY = percentof(this.app.renderer.width, 1.5);

    const greenValues = [
      18, 3.2, 1.6, 1.3, 1.2, 1.1, 1, 0.5, 1, 1.1, 1.2, 1.3, 1.6, 3.2, 18,
    ];
    const yellowValues = [
      55, 12, 5.6, 3.2, 1.6, 1, 0.7, 0.2, 0.7, 1, 1.6, 3.2, 5.6, 12, 55,
    ];
    const redValues = [
      353, 49, 14, 5.3, 2.1, 0.5, 0.2, 0, 0.2, 0.5, 2.1, 5.3, 14, 49, 353,
    ];

    let colors = [0xa7ffa7, 0xfbff11, 0xff2911];

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 15; j++) {
        let value = 0;
        let type = "green";

        if (i === 0) {
          value = greenValues[j];
          type = "green";
        }
        if (i === 1) {
          value = yellowValues[j];
          type = "yellow";
        }
        if (i === 2) {
          value = redValues[j];
          type = "red";
        }

        const targetBox = new TargetBox(
          this.app,
          posX,
          posY,
          percentof(this.app.renderer.width, 2.05),
          percentof(this.app.renderer.width, 1.3),
          colors[i],
          value.toFixed(1),
          type as "green" | "red" | "yellow"
        );
        this.targetBoxesBodies.push(targetBox.matterBody);

        posX += paddingX;
        value += 0.2;
      }

      posX =
        this.app.renderer.width / 2 -
        percentof(this.app.renderer.width, 2.14) * 7 -
        percentof(this.app.renderer.width, 2.15) / 2;
      posY += paddingY;
    }
  }

  addMenuInterface() {
    this.menuInterface = new MenuInterface(
      this.app,
      this.plusIconTexture,
      this.minusIconTexture,
      this
    );
  }

  addStaticBalls() {
    const paddingX = percentof(this.app.renderer.width, 2.15);
    const paddingY = percentof(this.app.renderer.width, 1.6);
    let posX = this.app.renderer.width / 2 - paddingX * 7 - paddingX / 2;
    let posY =
      this.app.renderer.height - percentof(this.app.renderer.height, 21);
    let quantity = 16;

    for (let i = 0; i < 14; i++) {
      for (let j = 0; j < quantity; j++) {
        const staticBall = new StaticBall(
          this.app,
          this.staticCircleTexture,
          posX,
          posY
        );
        posX += paddingX;
        this.staticBallBodies.push(staticBall.matterBody);
      }

      posX -= paddingX * (quantity - 1) + paddingX / 2;
      posY -= paddingY;
      quantity--;
    }
  }

  async loadAssets() {
    this.greenCircleTexture = await Assets.load(
      "../static/img/plinkoGame/green-circle.png"
    );
    this.yellowCircleTexture = await Assets.load(
      "../static/img/plinkoGame/yellow-circle.png"
    );
    this.redCircleTexture = await Assets.load(
      "../static/img/plinkoGame/red-circle.png"
    );
    this.staticCircleTexture = await Assets.load(
      "../static/img/plinkoGame/static-circle.png"
    );
    this.minusIconTexture = await Assets.load(
      "../static/img/plinkoGame/minus-icon.png"
    );
    this.plusIconTexture = await Assets.load(
      "../static/img/plinkoGame/plus-icon.png"
    );
  }

  initMatter() {
    this.engine.gravity.y = 0.3;

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
    World.add(this.engine.world, [
      ...this.staticBallBodies,
      ...this.targetBoxesBodies,
      ground,
    ]);

    // Set up Matter.js render for debugging
    this.render = Render.create({
      element: document.body, // Append to body
      engine: this.engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        // wireframes: true,
        background: "transparent",
      },
    });

    Render.run(this.render);

    const runner = Runner.create();
    Runner.run(runner, this.engine);

    let lastBodyA: any = null;

    Events.on(this.engine, "collisionStart", (event) => {
      event.pairs.forEach((pair) => {
        if (lastBodyA === pair.bodyA) return;
        lastBodyA = pair.bodyA;
        const { bodyA, bodyB } = pair;

        if (bodyA.label !== "staticBall" && !bodyA.label.includes("ball")) {
          const targetBoxColor = bodyA.label.split("-")[1];
          const targetBoxValue = parseFloat(bodyA.label.split("-")[2]);

          const ballColor = bodyB.label.split("-")[0];

          if (targetBoxColor === ballColor) {
            // @ts-ignore
            if (bodyB.targetObject.isAlreadyInHole) return;
            // @ts-ignore
            bodyB.targetObject.isAlreadyInHole = true;

            const newBalance =
              parseFloat(this.menuInterface.balanceText.text) +
              targetBoxValue * parseFloat(this.menuInterface.betText.text);

            this.menuInterface.balanceText.text = newBalance.toFixed(2);

            // @ts-ignore
            bodyA.targetBox.animate();
          }

          // @ts-ignore
          bodyB.targetObject.destroy();

          return;
        }

        const randomX = getRandomFloat(-0.8, 0.8);
        const randomY = getRandomFloat(0.5, 0.8);

        Body.setVelocity(bodyB, {
          x: randomX,
          y: -randomY,
        });
      });
    });
  }

  update() {
    this.app.ticker.add(() => {
      // Make sure the Matter.js engine is updated in each frame
      Engine.update(this.engine);
    });
  }

  kickBall(color: "green" | "yellow" | "red") {
    const balance = parseFloat(this.menuInterface.balanceText.text);
    const bet = parseFloat(this.menuInterface.betText.text);

    if (balance - bet < 0) {
      alert("You don't have enough balance");
      return;
    }

    const newBalance =
      parseFloat(this.menuInterface.balanceText.text) -
      parseFloat(this.menuInterface.betText.text);

    this.menuInterface.balanceText.text = newBalance.toFixed(2);

    let texture: Texture = this.greenCircleTexture;

    if (color === "green") {
      texture = this.greenCircleTexture;
    }
    if (color === "yellow") {
      texture = this.yellowCircleTexture;
    }
    if (color === "red") {
      texture = this.redCircleTexture;
    }

    this.ball = new Ball(
      this.app,
      texture,
      this.app.renderer.width / 2,
      10,
      this,
      color
    );
  }
}
