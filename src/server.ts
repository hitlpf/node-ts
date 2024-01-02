import React from 'react';
import { renderToString } from 'react-dom/server';
import Koa from 'koa';
import koaStatic from 'koa-static';
import Router from 'koa-router';
import path from 'path';

import logger from "./util/logger";
import assetsUtil from "./util/read-assets";
import App from './views';

const app = new Koa();

const router = new Router();

router.get('/', async (ctx, next) => {
  await next();

  const { manifestJs, mainJs, vendorReactJs } = assetsUtil.getJSAssets();

  const data = { name: 'andy' };

  const appHtml: string = renderToString(React.createElement(App, data));
  logger(appHtml);
  
  ctx.body = `
    <html>
      <head>
        <title>react ssr</title>
        <meta name="viewport" content="width=device-width,initial-scale=1">
      </head>
      <body>
        <div id="root">${appHtml}</div>
        <script>
          // 所以这里要获取下存在服务端的数据并作为初始值存到 window 中
          // 俗称：数据脱水
          window.data = ${JSON.stringify(data)};
        </script>
        <script src="${manifestJs}"></script>
        <script src="${vendorReactJs}"></script>
        <script src="${mainJs}"></script>
      </body>
    </html>`;
});

app.use(router.routes()).use(router.allowedMethods());

// __dirname为服务端编译后的代码的目录dist
app.use(koaStatic(path.join(__dirname, '../client'), { maxage: 0 }));

const port = 3000;
app.listen(port, () => {
  logger(`Server running on http://localhost:${port}`);
});