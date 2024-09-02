import { render } from "solid-js/web";
import HomePage from "./pages/homepage";

import "./global.css";

const App = () => {
  return <HomePage />;
};

// Render the component to your root element
render(App, document.getElementById("root") as HTMLElement);
