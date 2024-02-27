import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import { signinRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { signupRouter } from './routes/signup';
import { currentUserRouter } from './routes/current-user';
import { errorHandler } from './middleware/error-handler';

const app = express();
app.use(json());
/* 
app.get('/api/users/currentuser', (req, res) => {
    res.send('Hi there!');
});
 */
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);
app.use(currentUserRouter);

app.all('*', async (req, res) => {
    throw new Error('Route not found');
});

app.use(errorHandler);

app.listen(3000, () => {
    console.log('Listening on port 3000!!!!');
});