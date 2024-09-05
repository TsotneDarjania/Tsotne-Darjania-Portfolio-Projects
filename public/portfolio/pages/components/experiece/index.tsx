import style from "./style.module.css";

export default function Experience() {
  return (
    <div id="experience" class={style.experience}>
      <h2 class={"custom-font-1 " + style.title}>Experience</h2>

      {/* Left */}
      <div data-aos="fade-right" class={style.work}>
        <div class={style.workLeftContent}>
          <img
            class={style.workImage}
            src="../static/img/portfolio/profairgames.jpg"
            alt="ProFairGames"
          />
          <h2 class={style.workTitle + " custom-font-1"}>Profair Games</h2>
          <p class={style.workData + " custom-font-1"}> 2018 - 2021 </p>
          <p class={style.workDescription + " custom-font-2 "}>
            Profair Games is a company that develops and publishes mobile games.
            I have worked on several projects as a game developer and game
            designer. I have also worked on the company's website.
          </p>
          <p class={style.workPosition + " custom-font-2"}>
            Position: Game Developer
          </p>
          <p class={style.workTechnologies + " custom-font-2"}>
            {" "}
            Technologies : Unity, C#{" "}
          </p>
        </div>
      </div>

      {/* Right */}
      <div data-aos="fade-left" class={style.work}>
        <div class={style.workFakeRightContent}> </div>
        <div class={style.workRightContent}>
          <img
            class={style.workImage}
            src="../static/img/portfolio/issoft.jpg"
            alt="ProFairGames"
          />
          <h2 class={style.workTitle + " custom-font-1"}>ISSOFT GEORGIA</h2>
          <p class={style.workData + " custom-font-1"}> 2018 - 2021 </p>
          <p
            class={
              style.workDescription +
              " custom-font-2 " +
              style.rightWorkDescription
            }
          >
            Profair Games is a company that develops and publishes mobile games.
            I have worked on several projects as a game developer and game
            designer. I have also worked on the company's website.
          </p>
          <p class={style.workPosition + " custom-font-2"}>
            Position: Game Developer
          </p>
          <p class={style.workTechnologies + " custom-font-2"}>
            {" "}
            Technologies : Unity, C#{" "}
          </p>
        </div>
      </div>

      {/* Left */}
      <div data-aos="fade-right" class={style.work}>
        <div class={style.workLeftContent}>
          <img
            class={style.workImage}
            src="../static/img/portfolio/digital.jpg"
            alt="ProFairGames"
          />
          <h2 class={style.workTitle + " custom-font-1"}>Digital Institute</h2>
          <p class={style.workData + " custom-font-1"}> 2018 - 2021 </p>
          <p class={style.workDescription + " custom-font-2 "}>
            Profair Games is a company that develops and publishes mobile games.
            I have worked on several projects as a game developer and game
            designer. I have also worked on the company's website.
          </p>
          <p class={style.workPosition + " custom-font-2"}>
            Position: Game Developer
          </p>
          <p class={style.workTechnologies + " custom-font-2"}>
            {" "}
            Technologies : Unity, C#{" "}
          </p>
        </div>
      </div>

      {/* Right */}
      <div data-aos="fade-left" class={style.work}>
        <div class={style.workFakeRightContent}> </div>
        <div class={style.workRightContent}>
          <img
            class={style.workImage}
            src="../static/img/portfolio/digido.png"
            alt="ProFairGames"
          />
          <h2 class={style.workTitle + " custom-font-1"}>DIGIDO</h2>
          <p class={style.workData + " custom-font-1"}> 2018 - 2021 </p>
          <p
            class={
              style.workDescription +
              " custom-font-2 " +
              style.rightWorkDescription
            }
          >
            Profair Games is a company that develops and publishes mobile games.
            I have worked on several projects as a game developer and game
            designer. I have also worked on the company's website.
          </p>
          <p class={style.workPosition + " custom-font-2"}>
            Position: Game Developer
          </p>
          <p class={style.workTechnologies + " custom-font-2"}>
            {" "}
            Technologies : Unity, C#{" "}
          </p>
        </div>
      </div>

      {/* Dottes */}
      <div class={style.dottes}>
        {
          // Dottes
          Array.from({ length: 130 }, (_, i) => (
            <div class={style.dot} />
          ))
        }
      </div>
    </div>
  );
}
