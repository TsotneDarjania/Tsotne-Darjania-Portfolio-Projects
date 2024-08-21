import { render } from "solid-js/web";

import "./global.css";

const App = () => {
  return (
    <div>
      <h1>Hello, Solid with TypeScript!</h1>
      <p>This is a Solid.js component integrated into your existing project.</p>
    </div>
  );
};

// Render the component to your root element
render(App, document.getElementById("root") as HTMLElement);

// import { userLogin, userRegister } from "./core/auth/authentication";
// import { DomElements, getDOMElements } from "./config/dom";
// import { EventManager } from "./core/eventManager/index";
// import { Renderer } from "./core/renderer/index";
// import { appData, CustomWindow } from "./config/types";

// const DOMState = {
//   isOpenAuthenticationForm: false,
// };

// document.addEventListener("DOMContentLoaded", () => {
//   console.log("5555");
//   // Get DOM elements
//   const DOMElements = getDOMElements();
//   console.log(DOMElements);
//   const customWindow: CustomWindow = window as unknown as CustomWindow;

//   const homePageData: appData = {
//     dom: DOMElements,
//     authenticated:
//       customWindow.userData.authenticated === "true" ? true : false,
//     username: customWindow.userData.username,
//   };

//   const renderer = new Renderer(homePageData);
//   renderer.createHomepage();

//   // Initialize the app
//   requestAnimationFrame(() => {
//     init(homePageData, renderer, DOMElements);
//   });
// });

// function init(
//   homePageData: appData,
//   renderer: Renderer,
//   DOMElements: DomElements
// ) {
//   const eventManager = new EventManager(homePageData);

//   document.addEventListener("click-open-authentication-button", () => {
//     renderer.showElement(DOMElements.overlay);
//     renderer.showElement(DOMElements.authenticationForm);
//     renderer.showElement(DOMElements.autheticatioErrorText);
//     DOMState.isOpenAuthenticationForm = true;
//   });

//   document.addEventListener("click-overlay", () => {
//     if (DOMState.isOpenAuthenticationForm) {
//       renderer.hideElement(DOMElements.overlay);
//       renderer.hideElement(DOMElements.authenticationForm);
//       renderer.hideElement(DOMElements.autheticatioErrorText);
//       DOMElements.autheticatioErrorText.innerText = "";

//       return;
//     }
//   });

//   document.addEventListener("click-registration-submit-button", () => {
//     const username = DOMElements.regUsername.value;
//     const email = DOMElements.regEmail.value;
//     const password = DOMElements.regPassword.value;

//     renderer.showElement(DOMElements.autheticatioErrorText);
//     DOMElements.autheticatioErrorText.innerText = "";

//     userRegister(username, email, password);
//   });

//   document.addEventListener("click-login-submit-button", () => {
//     const email = DOMElements.logEmail.value;
//     const password = DOMElements.loginPassword.value;

//     renderer.showElement(DOMElements.autheticatioErrorText);
//     DOMElements.autheticatioErrorText.innerText = "";

//     userLogin(email, password);
//   });

//   document.addEventListener("input-reg-email", () => {
//     renderer.hideElement(DOMElements.autheticatioErrorText);
//   });

//   document.addEventListener("input-reg-username", () => {
//     renderer.hideElement(DOMElements.autheticatioErrorText);
//   });

//   document.addEventListener("input-reg-password", () => {
//     renderer.hideElement(DOMElements.autheticatioErrorText);
//   });

//   document.addEventListener("input-log-email", () => {
//     renderer.hideElement(DOMElements.autheticatioErrorText);
//   });

//   document.addEventListener("input-log-password", () => {
//     renderer.hideElement(DOMElements.autheticatioErrorText);
//   });

//   document.addEventListener("click-log-out-button", () => {
//     fetch("http://localhost:3000/api/user/logout", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({}),
//     })
//       .then(async (response) => {
//         if (response.status === 200) {
//           window.location.reload();
//           return;
//         }
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   });
// }
