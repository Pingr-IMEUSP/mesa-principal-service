import { Context } from 'koa';
import Ping from './db/mockdb';

export default class PingClass {
  static index(ctx: Context): void {
    ctx.body = Ping.all;
  }
}
