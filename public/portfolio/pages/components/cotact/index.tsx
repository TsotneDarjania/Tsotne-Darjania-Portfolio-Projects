import style from "./style.module.css";

export default function Contact() {
  return (
    <div id="contact" class={style.contact}>
      {/* Form */}
      <div data-aos="fade-up" class={style.form}>
        <h2 class={style.formTitle + " custom-font-1"}>Contact Form</h2>
        <input
          class={style.formInput + " custom-font-2"}
          type="text"
          placeholder="Your Name"
        />
        <input
          class={style.formInput + " custom-font-2"}
          type="email"
          placeholder="Your Email"
        />
        <input
          class={style.formInput + " custom-font-2"}
          type="text"
          placeholder="Subject"
        />
        <textarea
          class={style.formInput + " " + style.formTextArea}
          placeholder="Message"
        ></textarea>
        <button class={style.formButton + " custom-font-1"}>Send</button>
      </div>
    </div>
  );
}
