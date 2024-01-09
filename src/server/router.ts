import Router from 'koa-router';

import renderSSR from './render';

const router = new Router();

router.get('/', async (ctx, next) => {
  await next();

  await renderSSR(ctx);
});

router.get('/getInfo', async (ctx, next) => {
  await next();

  const { key } = ctx.query;

  // 返回结果
  ctx.set('content-type', 'application/json; charset=utf-8');
  ctx.body = {
    info: `我是koa, 收到你的消息: ${key}`,
  };
});

export default router;
