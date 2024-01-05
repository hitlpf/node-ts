import Router from 'koa-router';

import renderSSR from './render';

const router = new Router();

router.get('/', async (ctx, next) => {
  await next();

  await renderSSR(ctx);
});

export default router;
