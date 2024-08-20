import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import aiChat from './aiChat.js';
import cors from '@koa/cors';
import { OpenAI } from 'openai';
import process from 'process';

const app = new Koa();
const router = new Router();

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: 'https://api.302.ai/v1/chat/completions',
});

app.use(cors());
app.use(bodyParser());

router.post('/ai', async (ctx) => {
    const { value } = ctx.request.body;

    try {
        const response = await aiChat(client, value);
        ctx.response.body = {
            status: 200,
            res: response,
        };
    } catch (err) {
        ctx.response.body = {
            status: 500,
            error: err.message,
        };
    }
});

app.use(router.routes()).use(router.allowedMethods());

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
