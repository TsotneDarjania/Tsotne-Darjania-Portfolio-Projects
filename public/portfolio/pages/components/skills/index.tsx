import { createSignal, onMount } from "solid-js";
import style from "./style.module.css";

export default function Skills() {
  let container: HTMLDivElement | null = null;

  const [dragging, setDragging] = createSignal<HTMLDivElement | null>(null);

  const setRandomPosition = (
    element: HTMLDivElement,
    container: HTMLDivElement
  ) => {
    const containerRect = container.getBoundingClientRect();

    // Generate random positions within the container's bounds
    const randomLeft = Math.floor(
      Math.random() * (containerRect.width - element.offsetWidth)
    );
    const randomTop = Math.floor(
      Math.random() * (containerRect.height - element.offsetHeight)
    );

    // Set the random positions
    element.style.left = `${randomLeft}px`;
    element.style.top = `${randomTop}px`;
  };

  const handleMouseDown = (event: MouseEvent) => {
    const element = event.currentTarget as HTMLDivElement;
    const rect = element.getBoundingClientRect();
    setDragging(element);

    // Store the initial position of the mouse relative to the element
    element.dataset.mouseOffsetX = (event.clientX - rect.left).toString();
    element.dataset.mouseOffsetY = (event.clientY - rect.top).toString();
  };

  const handleMouseMove = (event: MouseEvent) => {
    const element = dragging();
    if (element && container) {
      const offsetX = parseInt(element.dataset.mouseOffsetX || "0", 10);
      const offsetY = parseInt(element.dataset.mouseOffsetY || "0", 10);

      const newLeft =
        event.clientX - container.getBoundingClientRect().left - offsetX;
      const newTop =
        event.clientY - container.getBoundingClientRect().top - offsetY;

      // Set the new position
      element.style.left = `${newLeft}px`;
      element.style.top = `${newTop}px`;
    }
  };

  const handleMouseUp = () => {
    setDragging(null);
  };

  onMount(() => {
    if (container) {
      const skillElements = container.querySelectorAll<HTMLDivElement>(
        `.${style.skill}`
      );
      skillElements.forEach((skill) => {
        setRandomPosition(skill, container!);
        skill.addEventListener("mousedown", handleMouseDown);
      });

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }
  });

  return (
    <div id="skills" class={style.skills}>
      <div class={"custom-font-1 " + style.title}>My Skills</div>
      <div class={style.container} ref={(el) => (container = el)}>
        <div class={style.skill + " custom-font-1"}>JavaScript</div>
        <div class={style.skill + " custom-font-1"}>TypeScript</div>
        <div class={style.skill + " custom-font-1"}>C#</div>
        <div class={style.skill + " custom-font-1"}>Mongo DB</div>
        <div class={style.skill + " custom-font-1"}>MySQL</div>
        <div class={style.skill + " custom-font-1"}>React</div>
        <div class={style.skill + " custom-font-1"}>NextJS</div>
        <div class={style.skill + " custom-font-1"}>Unity</div>
        <div class={style.skill + " custom-font-1"}>Phaser JS</div>
        <div class={style.skill + " custom-font-1"}>Three JS</div>
        <div class={style.skill + " custom-font-1"}>Node JS</div>
        <div class={style.skill + " custom-font-1"}>Express</div>
        <div class={style.skill + " custom-font-1"}>Framer</div>
        <div class={style.skill + " custom-font-1"}>PHP</div>
        <div class={style.skill + " custom-font-1"}>Laravel</div>
        <div class={style.skill + " custom-font-1"}>Supabase</div>
        <div class={style.skill + " custom-font-1"}>Solid JS</div>
        <div class={style.skill + " custom-font-1"}>Webpack</div>
        <div class={style.skill + " custom-font-1"}>NPM</div>
        {/* Add more skills as needed */}
      </div>
    </div>
  );
}
