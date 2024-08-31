import { render } from "solid-js/web";

const App = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
};

// Render the component to your root element
render(App, document.getElementById("root") as HTMLElement);
