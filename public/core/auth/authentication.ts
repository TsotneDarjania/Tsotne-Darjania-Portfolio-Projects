import { DOMElements } from "../../config/dom";
import { checkValidation } from "../../helper/index";

export function userRegister(
  username: string,
  email: string,
  password: string
) {
  if (checkValidation(username, email, password) === "ok") {
    fetch("http://localhost:3000/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    })
      .then(async (response) => {
        if (response.status === 201) {
          window.location.reload();
          return;
        }

        if (response.status === 400) {
          const data = await response.json();
          DOMElements.autheticatioErrorText.innerText = data.errors[0].msg;
          return;
        }

        return response.json();
      })
      .then((data) => {
        if (!data) return;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } else {
    DOMElements.autheticatioErrorText.innerText = checkValidation(
      username,
      email,
      password
    );
  }
}

export function userLogin(email: string, password: string) {
  fetch("http://localhost:3000/api/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then(async (response) => {
      if (response.status === 200) {
        window.location.reload();
        return;
      }

      if (response.status === 400) {
        const data = await response.json();
        console.log(data);
        DOMElements.autheticatioErrorText.innerText = data.errors[0].msg;
        return;
      }

      return response.json();
    })
    .then((data) => {
      if (!data) return;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
