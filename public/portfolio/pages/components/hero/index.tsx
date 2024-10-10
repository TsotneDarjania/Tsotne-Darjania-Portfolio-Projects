import { createSignal, onCleanup, onMount } from "solid-js";

import style from "./style.module.css";
import ComputerAnimation from "../computerAnimation";

export function Hero() {
  let imageRef: HTMLImageElement | undefined;
  let heroRef: HTMLDivElement | undefined;
  let textContainerRef: HTMLDivElement | undefined;

  const [showText, setShowText] = createSignal(false);

  const [windowWidth, setWindowWidth] = createSignal(window.innerWidth); // Signal for window width

  // Handle window resize
  onMount(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    onCleanup(() => {
      window.removeEventListener("resize", handleResize);
    });
  });

  return (
    <div ref={heroRef} class={style.hero + " " + style.fixedHero}>
      {/* My Image */}
      <img
        ref={imageRef}
        class={style.myImage}
        src="../static/img/portfolio/me.jpg"
        alt="Me"
      />

      {/* Hero Text */}
      {showText() && (
        <>
          <p data-aos="fade-up" class={style.heroText + " custom-font-3"}>
            I specialize in dynamic web applications and games, with a strong
            focus on JavaScript and web technologies. Alongside, I dive deep
            into data analysis with Python, combining technical expertise with a
            passion for uncovering insights. Whether it's crafting cutting-edge
            apps or creating engaging, interactive games, my goal is to make an
            impact while enjoying the process. Outside of coding, you'll find me
            on the football field, gaming, or hanging out with my 🐕‍🦺dogs.
            <br />
          </p>

          {/* ComputerAnimation with dynamic size based on window width */}
          <div data-aos="flip-up" class={style.computerAnimation}>
            {windowWidth() > 800 ? (
              <ComputerAnimation height={550} width={450} />
            ) : (
              <ComputerAnimation height={300} width={250} />
            )}
          </div>
        </>
      )}

      {/* Intro Text */}
      <div
        ref={textContainerRef}
        class={style.textContainer + " custom-font-3"}
      >
        <p class={style.title}>Hello, I'm Tsotne Darjania.</p>
        <p class={style.subHeading}>
          A software engineer with expertise in full-stack development
        </p>
        <p
          onAnimationEnd={() => {
            setTimeout(() => {
              imageRef!.classList.add(style.goLeft);
              textContainerRef!.classList.add(style.goRight);
              heroRef!.classList.remove(style.fixedHero);

              setShowText(true);
            }, 1000);
          }}
          class={style.text}
        >
          This is my Portfolio Website
        </p>
      </div>
    </div>
  );
}
