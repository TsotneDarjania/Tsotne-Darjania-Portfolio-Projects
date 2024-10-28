import { PixiGame } from "./pixi";
import Matter from "matter-js";

window.addEventListener("DOMContentLoaded", () => {
  if (isLandScape()) {
    const startScreen = document.getElementById("start_screen")!;
    startScreen.style.display = "flex";
    init();
  } else {
    const rotateMessage = document.getElementById("rotate_message")!;
    rotateMessage.style.display = "block";
  }
});

window.addEventListener("resize", () => {
  window.location.reload();
});

async function init() {
  hideRotateMessage();
  const pixiGame = new PixiGame();

  const startScreen = document.getElementById("start_screen")!;
  startScreen.addEventListener("click", () => {
    startScreen.style.display = "none";
  });
}

function isLandScape() {
  return window.innerWidth > window.innerHeight;
}

function hideRotateMessage() {
  document.getElementById("rotate_message")!.style.display = "none";
}
