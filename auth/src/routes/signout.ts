import express from 'express';

const router = express.Router();

router.post('/api/users/signout', (req,res) => {    
    res.send('Hi there!');
    console.log('currentUserRouter: signOut');
});


export { router as signoutRouter };