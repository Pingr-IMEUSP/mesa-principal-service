import { Context } from 'koa';
import { Ping, User } from './db/mockdb';

export default class PingController {
  static index(ctx: Context): void {
    ctx.body = Ping.all;
  }

  static show(ctx: Context): void {
    const { id } = ctx.params;

    const user = User.all.find((user) => user.id == id);

    if (!user) {
      ctx.status = 404;
      ctx.body = {
        errors: 'User not found',
      };
      return;
    }

    ctx.body = Ping.all.filter((ping) => ping.author === user.username);
  }
}
