import express from "express";
import { validateRequest } from "../middlewares/validate-request";

const router = express.Router();

router.post("/api/users/signin",
validateRequest,
(req, res) => {
  res.send("Hi there!");
});

export { router as signinRouter };
