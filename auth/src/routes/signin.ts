import express, { Request, Response } from "express";
import { Password } from "../services/password";
import jwt from "jsonwebtoken";
import { body, validationResult } from "express-validator";

import { validateRequest } from "../middlewares/validate-request";
import { BadRequestError } from "../errors/bad-request-error";
import { User } from "../models/user";

const router = express.Router();

router.post("/api/users/signin",
[
  body("email").isEmail().withMessage("Email must be valid"),
  body("password")
    .trim()
    .isLength({ min: 4, max: 20 })
    .withMessage("Password must be between 4 and 20 characters"),
],
validateRequest,
async (req: Request, res: Response) => {
  const { email, password } = req.body;
  console.log("Email: ", email);
  const existingUser = await User.findOne({ email });
  if (!existingUser) {
    throw new BadRequestError("No user with that email");
  }
  const passwordsMatch = await Password.compare(existingUser.password, password);
  if (!passwordsMatch) {
    throw new BadRequestError("Invalid credentials");
  }
  // Generate JWT
  const userJwt = jwt.sign(
    {
      id: existingUser.id,
      email: existingUser.email,
    },
    process.env.JWT_KEY!
  );
  // Store it on session object
  req.session = {
    jwt: userJwt,
  };
});

export { router as signinRouter };
