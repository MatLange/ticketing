import express from 'express';
import { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

const router = express.Router();

router.post('/api/users/signup', 
[
    // body('email')
    //     .isEmail()
    //     .withMessage('Email must be valid'),
    // body('password')
    //     .trim()
    //     .isLength({ min: 4, max: 20 })
    //     .withMessage('Password must be between 4 and 20 characters')
],
(req:Request,res:Response) => {    
    res.send('Hi there!');
    const errors = validationResult(req);
    const { email, password } = req.body;

    console.log('currentUserRouter: signUp');
});


export { router as signupRouter };