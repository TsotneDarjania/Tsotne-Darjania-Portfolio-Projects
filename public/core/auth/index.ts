import { compareSync } from "bcryptjs";
import { DOMElements } from "../../config/dom";

export async function userRegister(
  username: string,
  email: string,
  password: string
) {
  return await fetch("http://localhost:3000/api/user/register", {
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
        return {
          status: 400,
          message: data.errors[0].msg,
        };
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

export async function userLogin(email: string, password: string) {
  return await fetch("http://localhost:3000/api/user/login", {
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
        return {
          status: 400,
          message: data.errors[0].msg,
        };
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
