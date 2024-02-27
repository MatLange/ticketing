import express from 'express';

const router = express.Router();

router.post('/api/users/signin', (req,res) => {    
    res.send('Hi there!');
    console.log('currentUserRouter: signIn');
});


export { router as signinRouter };