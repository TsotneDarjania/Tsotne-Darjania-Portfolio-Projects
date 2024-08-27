import { render } from "solid-js/web";

import "./global.css";

import { AppProvider } from "./store/AppCotext";
import { HomePage } from "./routes/homePage";

const App = () => {
  return (
    <div>
      <AppProvider>
        <HomePage />
      </AppProvider>
    </div>
  );
};

// Render the component to your root element
render(App, document.getElementById("root") as HTMLElement);
