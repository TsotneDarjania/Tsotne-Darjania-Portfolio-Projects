import { render } from "solid-js/web";

import "./global.css";
import Signature from "./components/signature";

const App = () => {
  return (
    <div class="asd">
      <h1 class="custom-font-1"> asdiuashdiuasd </h1>
      <Signature />
    </div>
  );
};

// Render the component to your root element
render(App, document.getElementById("root") as HTMLElement);
