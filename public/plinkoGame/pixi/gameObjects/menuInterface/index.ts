import { Application, Sprite, Texture, Text } from "pixi.js";
import { PixiButton } from "../button";
import { percentof } from "../../../helper/helper";
import { gamePlayConfig } from "../../config";
import { PixiGame } from "../..";

export class MenuInterface {
  greenButton!: PixiButton;
  yellowButton!: PixiButton;
  redButton!: PixiButton;

  plusButton!: Sprite;
  minusButton!: Sprite;
  betText!: Text;
  balanceText!: Text;

  constructor(
    public app: Application,
    public plusIconTexture: Texture,
    public minusIconTexture: Texture,
    public pixiGame: PixiGame
  ) {
    this.init();
  }

  init() {
    this.addButtons();
    this.addBetAndBalanceText();
  }

  addBetAndBalanceText() {
    this.betText = new Text(gamePlayConfig.defaultBet.toFixed(2), {
      fontFamily: "Arial",
      fontSize: percentof(this.app.renderer.width, 1.5),
      fill: "white",
      align: "center",
    });
    this.betText.anchor.set(0.5);
    this.betText.position.set(
      percentof(this.app.renderer.width, 34),
      this.app.renderer.height - percentof(this.app.renderer.height, 4.5)
    );

    this.balanceText = new Text(`${gamePlayConfig.defaultBalance.toFixed(2)}`, {
      fontFamily: "Arial",
      fontSize: percentof(this.app.renderer.width, 2.1),
      fill: "white",
      align: "center",
    });
    this.balanceText.anchor.set(0.5);
    this.balanceText.position.set(
      percentof(this.app.renderer.width, 10),
      percentof(this.app.renderer.height, 5)
    );

    this.app.stage.addChild(this.betText, this.balanceText);
  }

  addButtons() {
    this.greenButton = new PixiButton(
      this.app,
      percentof(this.app.renderer.width, 42),
      this.app.renderer.height - percentof(this.app.renderer.height, 7.5),
      percentof(this.app.renderer.width, 10),
      percentof(this.app.renderer.height, 6),
      0x000000,
      0x2ecc71,
      "GREEN"
    );

    this.greenButton.onClick(() => {
      this.pixiGame.kickBall("green");
    });

    this.yellowButton = new PixiButton(
      this.app,
      percentof(this.app.renderer.width, 53),
      this.app.renderer.height - percentof(this.app.renderer.height, 7.5),
      percentof(this.app.renderer.width, 10),
      percentof(this.app.renderer.height, 6),
      0x000000,
      0xf1c40f,
      "YELLOW"
    );

    this.yellowButton.onClick(() => {
      this.pixiGame.kickBall("yellow");
    });

    this.redButton = new PixiButton(
      this.app,
      percentof(this.app.renderer.width, 64),
      this.app.renderer.height - percentof(this.app.renderer.height, 7.5),
      percentof(this.app.renderer.width, 10),
      percentof(this.app.renderer.height, 6),
      0x000000,
      0xe74c3c,
      "RED"
    );
    this.redButton.onClick(() => {
      this.pixiGame.kickBall("red");
    });

    this.plusButton = new Sprite(this.plusIconTexture);
    this.plusButton.width = percentof(this.app.renderer.width, 2.5);
    this.plusButton.height = percentof(this.app.renderer.width, 2.5);
    this.plusButton.anchor.set(0.5);
    this.plusButton.position.set(
      percentof(this.app.renderer.width, 38),
      this.app.renderer.height - percentof(this.app.renderer.height, 4.5)
    );
    this.plusButton.interactive = true;
    this.plusButton.on("pointerdown", () => {
      if (parseFloat(this.betText.text) * 2 > gamePlayConfig.defaultBalance) {
        return;
      }
      this.betText.text = (parseFloat(this.betText.text) * 2).toFixed(2);
    });

    this.minusButton = new Sprite(this.minusIconTexture);
    this.minusButton.width = percentof(this.app.renderer.width, 2.5);
    this.minusButton.height = percentof(this.app.renderer.width, 2.5);
    this.minusButton.anchor.set(0.5);
    this.minusButton.position.set(
      percentof(this.app.renderer.width, 30),
      this.app.renderer.height - percentof(this.app.renderer.height, 4.5)
    );
    this.minusButton.interactive = true;

    this.minusButton.on("pointerdown", () => {
      if (parseFloat(this.betText.text) <= gamePlayConfig.defaultBet) {
        return;
      }
      this.betText.text = (parseFloat(this.betText.text) / 2).toFixed(2);
    });

    this.app.stage.addChild(this.plusButton, this.minusButton);
  }
}
