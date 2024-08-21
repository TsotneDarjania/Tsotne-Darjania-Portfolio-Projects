export type DomElements = {
  root: HTMLElement;
  overlay: HTMLElement;
  openAuthenticationButton: HTMLElement;
  authenticationForm: HTMLElement;
  registrationSubmitButton: HTMLElement;
  loginSubmitButton: HTMLElement;
  autheticatioErrorText: HTMLElement;
  regUsername: HTMLInputElement;
  regEmail: HTMLInputElement;
  regPassword: HTMLInputElement;
  logEmail: HTMLInputElement;
  loginPassword: HTMLInputElement;
  logOutButton: HTMLElement;
};

export function getDOMElements(): DomElements {
  const DOMElements: DomElements = {
    root: document.getElementById("root")!,
    overlay: document.getElementById("overlay")!,
    openAuthenticationButton: document.getElementById(
      "open_authentication_button"
    )!,
    authenticationForm: document.getElementById("authentication_form")!,
    registrationSubmitButton: document.getElementById(
      "registration-submit-button"
    )!,
    loginSubmitButton: document.getElementById("login-submit-button")!,
    autheticatioErrorText: document.getElementById("authentication-error")!,
    regUsername: document.getElementById(
      "reg-username"
    ) as unknown as HTMLInputElement,
    regEmail: document.getElementById(
      "reg-email"
    ) as unknown as HTMLInputElement,
    regPassword: document.getElementById(
      "reg-password"
    ) as unknown as HTMLInputElement,
    logEmail: document.getElementById(
      "log-email"
    ) as unknown as HTMLInputElement,
    loginPassword: document.getElementById(
      "log-password"
    ) as unknown as HTMLInputElement,
    logOutButton: document.getElementById("log_out_button")!,
  };

  return DOMElements;
}

export const DOMElements = getDOMElements();
