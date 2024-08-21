export function Form() {
  return `
   <form
      id="authentication_form"
      class="form absolute full-center hidden"
    >
      <div class="form-container">
      <h2 class="form-title custom-font-1">
        FOR REGISTRATION
      </h2>
      <input
        id="reg-username"
        type="text"
        placeholder="Username"
        class="input-field custom-font-1"
      />
      <input
        id="reg-email"
        type="email"
        placeholder="Email"
        class="input-field custom-font-1"
      />
      <input
        id="reg-password"
        type="password"
        placeholder="Password"
        class="input-field custom-font-1"
      />

      <button
        id="registration-submit-button"
        type="button"
        class="submit-button custom-font-1"
      >
        Register
      </button>
      </div>

      <div class="form-container">
      <h2 class="form-title custom-font-1">
        FOR LOGIN
      </h2>
      <input
        id="log-email"
        type="email"
        placeholder="Email"
        class="input-field custom-font-1"
      />
      <input
        id="log-password"
        type="password"
        placeholder="Password"
        class="input-field custom-font-1"
      />

      <button
        id="login-submit-button"
        type="button"
        class="submit-button custom-font-1"
      >
        Login
      </button>
      </div>

      <p id="authentication-error" class="custom-font-1 hidden">  </p>
    </form>
    `;
}
