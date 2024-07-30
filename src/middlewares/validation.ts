import { body } from "express-validator";

const validationMiddleware = [
  body("username").isEmail().withMessage("Please enter a valid email address"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
];

export default validationMiddleware;
