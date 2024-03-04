import express, { Request, Response } from "express";
import { validateRequest } from "../middlewares/validate-request";

const router = express.Router();

router.post("/api/users/signout", 
validateRequest,
async (req: Request, res: Response) => {
  req.session = null;
  res.send({});
});

export { router as signoutRouter };
