import Koa from 'koa';
import React from 'react';
import { renderToString } from 'react-dom/server';
import koaStatic from 'koa-static';
import Router from 'koa-router';
import path from 'path';

import logger from "./util";
import assetsUtil from "./util/read-assets";
import App from './views';


const app = new Koa();

const router = new Router();

router.get('/', async (ctx, next) => {
  await next();
  const appHtml = renderToString(React.createElement(App));
  logger('------');
  const assetsJsonFile = assetsUtil.getAssetsJsonFile();
  const assetsJson = JSON.parse(assetsJsonFile);
  const { js: clientJs } = assetsJson?.main;
  logger(appHtml);
  logger(clientJs);
  ctx.body = `
    <html>
      <head>
      <title>react ssr</title>
      <meta name="viewport" content="width=device-width,initial-scale=1">
      </head>
      <body>
      <div id="root">${appHtml}</div>
      <script>
        // 服务端：组件初始化时会请求数据，请求的数据会存到服务端仓库中，然后组件使用数据显示相应内容
        // 客户端：为了避免组件挂载时又一次的请求数据（当服务器端已经请求过数据并返回了有数据的内容） 
        // 所以这里要获取下存在服务端仓库中的数据并作为初始值存到 window 中
        // 俗称：数据的脱水
      </script>
      <script src="${clientJs}"></script>
      </body>
    </html>`;
});

app.use(router.routes()).use(router.allowedMethods());

// __dirname为服务端编译后的代码的目录dist
app.use(koaStatic(path.join(__dirname, '../client'), { maxage: 0 }));

const port = 3000;
const info: string = `Server running on http://localhost:${port}`;
app.listen(port, () => {
  logger(info);
});