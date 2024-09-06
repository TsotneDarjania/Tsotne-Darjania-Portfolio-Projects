import style from "./style.module.css";

export function Projects() {
  return (
    <div id="projects" class={style.projects}>
      <h2 class={style.title + " custom-font-1"}> My Projects</h2>

      <div data-aos="zoom-out-right" class={style.project}>
        <div class={style.projectIntro}>
          <img
            src="../static/img/portfolio/project-1.png"
            class={style.projectImage}
            alt="project"
          />
          <p class={style.projectText + " custom-font-2"}>
            <span class={style.projectTitle + " custom-font-1"}>
              Football Manager
            </span>
            <br />
            This project was an in-depth exploration into creating a real-time
            football game simulator combined with team management. It challenged
            me to solve issues related to scalable architecture, real-time
            interactions, and 2D/3D dynamic animations. Through this, I honed
            key skills, including:
            <br />- Real-time game development using <strong>Phaser.js</strong>,
            optimizing gameplay for smooth user interactions.
            <br />- 3D integration with <strong>Three.js</strong>, blending 3D
            elements seamlessly into the 2D football simulation.
            <br />- Efficient server-side rendering and routing using{" "}
            <strong>Next.js</strong>, ensuring scalable and fast performance.
            <br />- Real-time database management and authentication using{" "}
            <strong>Supabase</strong>, providing secure and responsive user data
            handling.
          </p>
        </div>
        <div class={style.projectIndicators}>
          {/* GitHub Link */}
          <button class={style.gitHuButton + " custom-font-1"}> GitHub </button>
          <button class={style.gitHuButton + " custom-font-1"}>
            {" "}
            Live Link{" "}
          </button>
        </div>
      </div>

      <div data-aos="zoom-out-left" class={style.project}>
        <div class={style.projectIntro}>
          <img
            src="../static/img/portfolio/project-2.png"
            class={style.projectImage}
            alt="project"
          />
          <p class={style.projectText + " custom-font-2"}>
            <span class={style.projectTitle + " custom-font-1"}>MeetZone</span>
            <br />
            MeetZone is a social platform that I developed from the ground up,
            focusing on real-time communication and community engagement.
            Building this app from scratch allowed me to dive deep into
            full-stack development, tackling real-world challenges like:
            <br />- Setting up a secure and scalable backend using{" "}
            <strong>Express.js</strong>
            with <strong>MongoDB</strong> for data storage.
            <br />- Implementing real-time messaging and notifications with{" "}
            <strong>Socket.io</strong>, creating a seamless user experience.
            <br />- Building the front end with <strong>Solid.js</strong>,
            ensuring a smooth, reactive user interface that handles dynamic
            content effectively.
            <br />- Managing user authentication and session handling for a
            secure social networking environment.
          </p>
        </div>
        <div class={style.projectIndicators}>
          {/* GitHub Link */}
          <button class={style.gitHuButton + " custom-font-1"}> GitHub </button>
          <button class={style.gitHuButton + " custom-font-1"}>
            {" "}
            Live Link{" "}
          </button>
        </div>
      </div>

      <div data-aos="zoom-out-right" class={style.project}>
        <div class={style.projectIntro}>
          <img
            src="../static/img/portfolio/project-3.png"
            class={style.projectImage}
            alt="project"
          />
          <p class={style.projectText + " custom-font-2"}>
            <span class={style.projectTitle + " custom-font-1"}>Pacman 3D</span>
            <br />
            This project is a modern take on the classic Pacman game, developed
            using
            <strong>Three.js</strong> for 3D graphics and vanilla{" "}
            <strong>HTML</strong>,<strong>CSS</strong>, and{" "}
            <strong>JavaScript</strong> for the core game mechanics and
            interface.
            <br />- Implemented 3D rendering with <strong>Three.js</strong>,
            bringing Pacman to life in a fully immersive environment.
            <br />- Managed game logic and animations with pure{" "}
            <strong>JavaScript</strong>, focusing on performance optimization to
            ensure smooth gameplay.
            <br />- Designed a responsive and visually engaging UI using native{" "}
            <strong>HTML</strong>
            and <strong>CSS</strong>.
            <br />
            This project taught me how to blend the simplicity of classic games
            with modern web technologies, optimizing for both performance and
            user experience.
          </p>
        </div>
        <div class={style.projectIndicators}>
          {/* GitHub Link */}
          <button class={style.gitHuButton + " custom-font-1"}> GitHub </button>
          <button class={style.gitHuButton + " custom-font-1"}>
            {" "}
            Live Link{" "}
          </button>
        </div>
      </div>

      <div data-aos="zoom-out-left" class={style.project}>
        <div class={style.projectIntro}>
          <img
            src="../static/img/portfolio/telegram.jpg"
            class={style.projectImage}
            alt="project"
          />
          <p class={style.projectText + " custom-font-2"}>
            <span class={style.projectTitle + " custom-font-1"}>
              Telegram Bot
            </span>
            <br />
            Built entirely in <strong>Python</strong>, this Telegram bot
            automates the process of collecting and sending economic data from
            the
            <strong>CRBAPC Economic</strong> website to a specific Telegram
            channel.
            <br />- Used <strong>Python's requests</strong> library to scrape
            economic data from the website and{" "}
            <strong>python-telegram-bot</strong> for seamless integration with
            Telegram's API.
            <br />
            - Designed the bot to post regular updates to a Telegram channel,
            automating data fetching, formatting, and posting in real-time.
            <br />
            - Implemented error handling and scheduling to ensure reliability
            and avoid disruptions in the data delivery process.
            <br />
            Through this project, I refined my skills in{" "}
            <strong>web scraping</strong>,<strong>API integration</strong>, and
            automation, all while working with Python in a practical, real-world
            application.
          </p>
        </div>
        <div class={style.projectIndicators}>
          {/* GitHub Link */}
          <button class={style.gitHuButton + " custom-font-1"}> GitHub </button>
          <button class={style.gitHuButton + " custom-font-1"}>
            {" "}
            Live Link{" "}
          </button>
        </div>
      </div>

      <div data-aos="zoom-out-right" class={style.project}>
        <div class={style.projectIntro}>
          <img
            src="../static/img/portfolio/project-5.png"
            class={style.projectImage}
            alt="project"
          />
          <p class={style.projectText + " custom-font-2"}>
            <span class={style.projectTitle + " custom-font-1"}>
              Amazing Tours - Island Travel Website
            </span>
            <br />
            Developed a visually captivating website for{" "}
            <strong>Amazing Tours</strong>, a company specializing in island
            travel experiences. Created using <strong>Framer</strong>, the
            website serves as a comprehensive platform for tourists looking to
            explore island destinations.
            <br />- Designed a user-friendly interface with{" "}
            <strong>Framer</strong>, focusing on intuitive navigation and
            engaging visual elements.
            <br />
            - Implemented dynamic content sections showcasing various tour
            packages, itineraries, and booking options, ensuring a seamless user
            experience.
            <br />
            - Integrated multimedia features, including image galleries and
            interactive maps, to provide an immersive experience for users
            exploring potential travel destinations.
            <br />
            This project enhanced my skills in <strong>Framer</strong>,
            responsive design, and creating engaging user experiences for travel
            and tourism websites.
          </p>
        </div>
        <div class={style.projectIndicators}>
          {/* GitHub Link */}
          <button class={style.gitHuButton + " custom-font-1"}>
            {" "}
            Live Link{" "}
          </button>
        </div>
      </div>

      <div data-aos="zoom-out-left" class={style.project}>
        <div class={style.projectIntro}>
          <img
            src="../static/img/portfolio/project-6.png"
            class={style.projectImage}
            alt="project"
          />
          <p class={style.projectText + " custom-font-2"}>
            <span class={style.projectTitle + " custom-font-1"}>
              Linux Virtual Machine
            </span>
            <br />
            This personal portfolio website is themed around{" "}
            <strong>Ubuntu 20.04</strong>, developed using{" "}
            <strong>Next.js</strong> and <strong>Tailwind CSS</strong>.
            <br />- <strong>Next.js</strong> was used for server-side rendering
            and efficient page routing.
            <br />- <strong>Tailwind CSS</strong> provided a flexible,
            responsive design with utility-first styling.
            <br />- Local development can be started with <code>
              npm start
            </code>{" "}
            or <code>yarn start</code>, and the production build with{" "}
            <code>npm run build</code> or <code>yarn build</code>.
            <br />- Integrated <strong>EmailJS</strong> for functional contact
            forms.
            <br />
            To get started, clone the repository and modify files in{" "}
            <code>/src/components</code>. For the contact form to work,
            configure your <code>.env</code> file with your EmailJS credentials.
          </p>
        </div>
        <div class={style.projectIndicators}>
          {/* GitHub Link */}
          <button class={style.gitHuButton + " custom-font-1"}> GitHub </button>
          {/* GitHub Link */}
          <button class={style.gitHuButton + " custom-font-1"}>
            {" "}
            Live Link{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
