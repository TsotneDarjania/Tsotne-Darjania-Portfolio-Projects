import ComputerAnimation from "./components/computerAnimation";
import Skills from "./components/skills";
import style from "./style.module.css";

export default function homePage() {
  return (
    <div class={style.homepage}>
      <div class={style.introText}>
        <h1 class={style.animeText1 + " custom-font-1"}>
          Hi, I'm Tsotne Darjania
        </h1>
        <h2 class={style.animeText2 + " custom-font-1"}>
          a software engineer with expertise in full-stack development
        </h2>
      </div>

      <div class={style.menuContent}>
        {/* Buttons */}
        <div class={style.menuButtonContainer}>
          <button class={style.menuButton + " custom-font-1"}>Skills</button>
          <button class={style.menuButton + " custom-font-1"}>Projects</button>
          <button class={style.menuButton + " custom-font-1"}>
            Experience
          </button>
          <button class={style.menuButton + " custom-font-1"}>Contact</button>
        </div>

        {/* Computer SVG */}
        <div class={style.hero}>
          <p class={style.heroText + " custom-font-2"}>
            I specialize in building dynamic web apps and games. Beyond
            JavaScript and web technologies, I also dive into data analysis with
            Python, blending technical expertise with a curiosity for uncovering
            insights. with a bit of fun along the way—whether it's a
            cutting-edge application or an engaging game, I aim to make an
            impact while enjoying the process. Off the clock, I’m either playing
            football, gaming, or hanging out with my dogs
          </p>
          {/* <img
            class={style.tsotneImage}
            src="../static/img/portfolio/tsotne.jpg"
            alt="hero"
          /> */}
          <div class={style.computerAnimation}>
            <ComputerAnimation />
          </div>
        </div>

        {/* Skills */}
        <Skills />
      </div>
    </div>
  );
}
