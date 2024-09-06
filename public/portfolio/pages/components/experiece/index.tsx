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
          <p class={style.workData + " custom-font-1"}> 2018 - 2019 </p>
          <p class={style.workDescription + " custom-font-2 "}>Lorem ipsum</p>
          <p class={style.workPosition + " custom-font-2"}>
            Position: JavaScript Developer (Internship to Full Developer)
          </p>

          <p class={style.workDescription + " custom-font-2"}>
            At Profair Game, I started as an intern and progressed to a
            JavaScript Developer role. I worked on a browser-based gambling
            game, utilizing Phaser.js and Three.js for game development. My
            responsibilities included developing dynamic game features,
            optimizing performance, and collaborating with a team to deliver
            engaging gaming experiences.
          </p>
          <p class={style.workPosition + " custom-font-2"}>
            Position: Javascript Developer
          </p>
          <p class={style.workTechnologies + " custom-font-2"}>
            Technologies: JavaScript, Phaser.js, Three.js
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
          <p class={style.workData + " custom-font-1"}> 2019 - 2020</p>
          <p class={style.workPosition + " custom-font-2"}>
            Position: Web Developer
          </p>

          <p class={style.workDescription + " custom-font-2"}>
            At ISSOF, a prominent company recognized in the Software 500 and
            Inc. 5000 ratings, I worked as a Web Developer. ISSOF is known for
            its advanced technology stack and partnerships with leading global
            tech firms. My role involved developing and maintaining web
            applications, contributing to projects using cutting-edge
            technologies, and ensuring high standards of performance and user
            experience.
          </p>
          <p class={style.workPosition + " custom-font-2"}>
            Position: Software Engineer
          </p>
          <p class={style.rightWorkTechnologies + " custom-font-2"}>
            Technologies: JavaScript, HTML, CSS, React, Next.js, Node.js,
            Express, Laravel, MongoDB
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
          <p class={style.workData + " custom-font-1"}> 2020 - 2022 </p>
          <p class={style.workDescription + " custom-font-2"}>
            Digital Institute is a leading educational institution specializing
            in tech training. As an Instructor, I taught courses on Node.js,
            React, and Networking Basics. My role involved creating detailed
            curriculum, delivering lectures, and guiding students through
            practical projects to build their skills in these areas.
          </p>
          <p class={style.workPosition + " custom-font-2"}>
            Position: Instructor
          </p>
          <p class={style.workTechnologies + " custom-font-2"}>
            Technologies: Node.js, React, JavaScript, Networking Concepts
          </p>
        </div>
      </div>

      {/* Right */}
      <div data-aos="fade-left" class={style.work}>
        <div class={style.workFakeRightContent}> </div>
        <div class={style.workRightContent}>
          <img
            class={style.workImage}
            src="../static/img/portfolio/digido.jpg"
            alt="ProFairGames"
          />
          <h2 class={style.workTitle + " custom-font-1"}>DIGIDO</h2>
          <p class={style.workData + " custom-font-1"}> 2022 - Present</p>
          <p class={style.workDescription + " custom-font-2"}>
            Digido is a company specializing in cutting-edge web development
            solutions. As a Web Developer, I worked on developing and
            maintaining websites using Next.js and Framer. My responsibilities
            included creating responsive web applications, optimizing
            performance, and ensuring a seamless user experience.
          </p>
          <p class={style.workPosition + " custom-font-2"}>
            Position: Web Developer
          </p>
          <p class={style.workTechnologies + " custom-font-2"}>
            Technologies: Next.js, Framer, JavaScript, CSS
          </p>
        </div>
      </div>

      {/* Dottes */}
      <div class={style.dottes}>
        {
          // Dottes
          Array.from({ length: 190 }, (_, i) => (
            <div class={style.dot} />
          ))
        }
      </div>
    </div>
  );
}
