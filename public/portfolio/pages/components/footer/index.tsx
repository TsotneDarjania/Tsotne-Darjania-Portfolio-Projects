import style from "./style.module.css";

export default function Footer() {
  return (
    <footer class={style.footer}>
      <div class={style.footerContent}>
        <p class={style.copyrightText + " custom-font-2"}>
          {" "}
          Tsotne Darjania Copyright {new Date().getFullYear()} All rights
          reserved
        </p>
        <img
          src="../static/img/portfolio/github.png"
          alt="github"
          class={style.gitHubImage}
          onclick={() => {
            window.open("https://github.com/TsotneDarjania");
          }}
        />
        <img
          src="../static/img/portfolio/x.png"
          alt="x"
          class={style.xImage}
          onclick={() => {
            window.open("https://x.com/tsotne_darjania");
          }}
        />
        <img
          src="../static/img/portfolio/linkedin.png"
          alt="likedIn"
          class={style.linkedinImage}
          onclick={() => {
            window.open("https://x.com/tsotne_darjania");
          }}
        />
        <img
          src="../static/img/portfolio/facebook.png"
          alt="likedIn"
          class={style.facebookImage}
          onclick={() => {
            window.open("https://www.facebook.com/tsotne.darjania");
          }}
        />
      </div>
    </footer>
  );
}
