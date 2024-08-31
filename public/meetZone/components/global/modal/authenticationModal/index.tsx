import { createSignal } from "solid-js";
import { userLogin, userRegister } from "../../../../core/auth";
import style from "./style.module.css";
import { set } from "mongoose";
import Loading from "../../loading";

export function AuthenticationModal({
  title,
}: {
  title: "Login" | "Registration";
}) {
  // Create signals to store input values
  const [email, setEmail] = createSignal("");
  const [username, setUsername] = createSignal("");
  const [password, setPassword] = createSignal("");

  const [loading, setLoading] = createSignal(false);
  const [error, setError] = createSignal("");

  return (
    <>
      <p class={style.warningMessage + " custom-font-1"}> {error()}</p>
      {loading() && <Loading />}
      <div class={style.authenticationModal}>
        <h2 class={"custom-font-1 " + style.title}> {title}</h2>
        <div class={style.content}>
          <input
            class={style.input + " custom-font-1"}
            type="text"
            placeholder="Email"
            autocomplete="off"
            maxLength={45}
            value={email()} // Bind the signal value to the input
            onInput={(e) => setEmail(e.currentTarget.value)} // Update the signal on input
          />
          {title !== "Login" && (
            <input
              class={style.input + " custom-font-1"}
              type="text"
              placeholder="Username"
              maxLength={20}
              autocomplete="off"
              value={username()} // Bind the signal value to the input
              onInput={(e) => setUsername(e.currentTarget.value)} // Update the signal on input
            />
          )}
          <input
            class={style.input + " custom-font-1"}
            type="password"
            placeholder="Password"
            maxLength={20}
            readOnly
            onFocus={(e) => e.target.removeAttribute("readonly")}
            value={password()} // Bind the signal value to the input
            onInput={(e) => setPassword(e.currentTarget.value)} // Update the signal on input
          />
          <button
            onClick={async () => {
              setLoading(true);
              if (title === "Registration") {
                const response = await userRegister(
                  username(),
                  email(),
                  password()
                );
                if (response?.status === 400) {
                  setError(response.message);
                }
              } else {
                const response = await userLogin(email(), password());
                if (response?.status === 400) {
                  setError(response.message);
                }
              }

              setLoading(false);
            }}
            class={style.button + " custom-font-1"}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
