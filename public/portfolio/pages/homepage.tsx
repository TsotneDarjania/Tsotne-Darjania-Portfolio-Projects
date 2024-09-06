import { createSignal } from "solid-js/types/server/reactive.js";
import ComputerAnimation from "./components/computerAnimation";
import Contact from "./components/cotact";
import Experience from "./components/experiece";
import Footer from "./components/footer";
import { Projects } from "./components/projects";
import Skills from "./components/skills";
import style from "./style.module.css";

export default function homePage() {
  window.document.body.classList.add("body-itnro");

  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 200);

  setTimeout(() => {
    window.document.body.classList.remove("body-itnro");
  }, 6000);

  const computerWidth = window.innerWidth < 768 ? 300 : 450;
  const computerHeight = window.innerWidth < 768 ? 220 : 550;

  const headingText =
    window.innerWidth < 1100
      ? "Software Engineer"
      : "a software engineer with expertise in full-stack development";

  return (
    <div class={style.homepage}>
      <div class={style.introText}>
        <h1 class={style.animeText1 + " custom-font-1"}>
          Hi, I'm Tsotne Darjania
        </h1>
        <h2 class={style.animeText2 + " custom-font-1"}>{headingText}</h2>
      </div>

      <div class={style.menuContent}>
        {/* Buttons */}
        <div class={style.menuButtonContainer}>
          <button class={style.menuButton + " custom-font-1"}>
            <a href="#skills">Skills</a>
          </button>
          <button class={style.menuButton + " custom-font-1"}>
            <a href="#projects">Projects</a>
          </button>
          <button class={style.menuButton + " custom-font-1"}>
            <a href="#experience"> Experience</a>
          </button>
          <button class={style.menuButton + " custom-font-1"}>
            <a href="#contact">Contact</a>
          </button>
        </div>

        {/* Computer SVG */}
        <div class={style.hero}>
          <div class={style.computerAnimation}>
            <ComputerAnimation height={computerHeight} width={computerWidth} />
          </div>

          <p data-aos="fade-up" class={style.heroText + " custom-font-2"}>
            Specializing in dynamic web applications and games, with a focus on
            JavaScript and web technologies, there's also a deep dive into data
            analysis using Python—blending technical skills with a passion for
            uncovering insights. Whether it's crafting cutting-edge applications
            or creating engaging games, the goal is to make an impact while
            having fun along the way. Outside of coding, life is all about
            football, gaming, and spending quality time with the dogs.
          </p>
          {/* <img
            class={style.tsotneImage}
            src="../static/img/portfolio/tsotne.jpg"
            alt="hero"
          /> */}
        </div>

        {/* Skills */}
        <Skills />
        {/* Projects */}
        <Projects />
        {/* Experience */}
        <Experience />
        {/*  Contact */}
        <Contact />
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
