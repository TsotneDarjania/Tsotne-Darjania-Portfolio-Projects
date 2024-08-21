import { DOMElements } from "../../config/dom";
import { appData } from "../../config/types";

export class EventManager {
  constructor(public data: appData) {
    this.init();
  }

  init() {
    this.addClickListeners();
    this.addInputChangeListeners();
  }

  addInputChangeListeners() {
    if (this.data.authenticated) return;

    DOMElements.regUsername.addEventListener("input", () => {
      const event = new CustomEvent("input-reg-username");
      document.dispatchEvent(event);
    });

    DOMElements.regEmail.addEventListener("input", () => {
      const event = new CustomEvent("input-reg-email");
      document.dispatchEvent(event);
    });

    DOMElements.regPassword.addEventListener("input", () => {
      const event = new CustomEvent("input-reg-password");
      document.dispatchEvent(event);
    });

    DOMElements.logEmail.addEventListener("input", () => {
      const event = new CustomEvent("input-log-email");
      document.dispatchEvent(event);
    });

    DOMElements.loginPassword.addEventListener("input", () => {
      const event = new CustomEvent("input-log-password");
      document.dispatchEvent(event);
    });

    document.addEventListener("input", () => {
      const event = new CustomEvent("input-log-email");
      document.dispatchEvent(event);
    });

    document.addEventListener("input", () => {
      const event = new CustomEvent("input-log-password");
      document.dispatchEvent(event);
    });
  }

  addClickListeners() {
    if (this.data.authenticated) {
      // Log out button
      DOMElements.logOutButton.addEventListener("click", () => {
        const event = new CustomEvent("click-log-out-button");
        document.dispatchEvent(event);
      });
    } else {
      // Open authentication button
      DOMElements.openAuthenticationButton.addEventListener("click", () => {
        const event = new CustomEvent("click-open-authentication-button");
        document.dispatchEvent(event);
      });

      // Click on overlay
      DOMElements.overlay.addEventListener("click", () => {
        const event = new CustomEvent("click-overlay");
        document.dispatchEvent(event);
      });

      // Registration submit button
      DOMElements.registrationSubmitButton.addEventListener("click", () => {
        const event = new CustomEvent("click-registration-submit-button");
        document.dispatchEvent(event);
      });

      // Login submit button
      DOMElements.loginSubmitButton.addEventListener("click", () => {
        const event = new CustomEvent("click-login-submit-button");
        document.dispatchEvent(event);
      });
    }
  }
}
