export function checkValidation(
  username: string,
  email: string,
  password: string
) {
  if (username.length < 3) {
    return "Username must be at least 3 characters long";
  }
  if (email.length < 5) {
    return "Email must be at least 5 characters long";
  }
  if (password.length < 6) {
    return "Password must be at least 6 characters long";
  }
  return "ok";
}
