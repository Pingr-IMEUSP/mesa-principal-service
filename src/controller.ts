import { Context } from 'koa';
import { Ping, User, Keyword } from './db/mockdb';

export default class PingController {
  static index(ctx: Context): void {
    ctx.body = Ping.all;
  }

  static showPingsUser(ctx: Context): void {
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

  static showPingsHashtag(ctx: Context): void {
    const { id } = ctx.params;

    const hashtag = Keyword.all.find((keyword) => keyword.id == id);

    if (!hashtag) {
      ctx.status = 404;
      ctx.body = {
        errors: 'Hashtag not found',
      };
      return;
    }

    ctx.body = Ping.all.filter((ping) => ping.hashtags.includes(hashtag.keyword));
  }
}
