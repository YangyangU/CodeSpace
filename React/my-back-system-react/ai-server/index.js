import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
// import aiChat from './aiChat';
import cors from '@koa/cors';
// import { OpenAI } from 'openai';
import axios from 'axios';

const app = new Koa();
const router = new Router();

// const client = new OpenAI({
//     apiKey: 'sk-YLvBFsvusvtmlvgNPmTAQx17cF3PNAwL99zALCxKWIgptYOa',
//     baseURL: 'https://api.302.ai/v1/chat/completions',
// });

app.use(cors());
app.use(bodyParser());

router.get('/ip', async (ctx) => {
    console.log(ctx);

    try {
        const response = await axios.get('https://api.ipify.org/?format=json');
        ctx.response.body = {
            status: 200,
            data: response.data,
        };
    } catch (err) {
        ctx.response.body = {
            status: 500,
            error: err.message,
        };
    }
});

router.post('/ai', async (ctx) => {
    const { value } = ctx.request.body;

    try {
        const response = await axios.get(
            `http://api.qingyunke.com/api.php?key=free&appid=0&msg=${encodeURIComponent(value)}`,
        );

        ctx.response.body = {
            status: 200,
            res: response.data,
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
    console.log(`服务运行在 ${PORT} 端口`);
});
