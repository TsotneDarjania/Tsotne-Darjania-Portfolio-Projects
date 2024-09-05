import { render } from "solid-js/web";
import HomePage from "./pages/homepage";

import "./global.css";

import { onMount } from "solid-js";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  onMount(() => {
    // Scroll to top
    window.scrollTo(0, 0);

    AOS.init({
      duration: 400, // Animation duration
      once: true, // Run animation only once
    });
  });

  return (
    <div>
      <HomePage />
    </div>
  );
};

// Render the component to your root element
render(App, document.getElementById("root") as HTMLElement);
