import Koa from 'koa';
import setRouter from './helpers/setRouter.mjs';
import { setLogger } from './middlewares/logger.mjs';
import { routers } from './routers/index.mjs';

const app = new Koa();

setLogger(app);

routers.forEach(router => setRouter(app, router));

export default app;