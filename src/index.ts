import express from 'express';

const app = express();

app.get('/ping', (_req: Request, res: Response) => {

    return res.json({
        message : 'pong'
    })
});

app.listen(3000, () => {
    console.log('Server is running on port 3000'