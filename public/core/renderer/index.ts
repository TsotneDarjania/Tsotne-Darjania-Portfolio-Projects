import { HomePage } from "../../components/homepage";
import { appData } from "../../config/types";

export class Renderer {
  constructor(
    public data: appData,
    public root = document.getElementById("root")!
  ) {}

  createHomepage() {
    // const app = html`
    //   <div>
    //     <h1>Hello, World!</h1>
    //     <p>This is generated using htm.</p>
    //   </div>
    // `;
    // this.root.appendChild(app);
  }

  hideElement(element: HTMLElement) {
    element.classList.add("hidden");
  }

  showElement(element: HTMLElement) {
    element.classList.remove("hidden");
  }
}
