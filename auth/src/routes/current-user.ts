import express from 'express';
import { validateRequest } from '../middlewares/validate-request';

const router = express.Router();

router.get('/api/users/currentuser', 
validateRequest,
(req, res) => {
  res.send('Hi there!');
});

export { router as currentUserRouter };
