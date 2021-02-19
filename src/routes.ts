import * as Router from 'koa-router';
import { Context } from 'koa';
import Ping from './db/mockdb';

const router = new Router();

router.get('/pings', (ctx: Context) => {
  ctx.body = Ping.all;
});

export default router;
