import Koa from 'koa';
import React from 'react';
import { renderToString } from 'react-dom/server';

import logger from "./util";
import App from './views';

const app = new Koa();

app.use(async (ctx) => {
  const appHtml = renderToString(React.createElement(App));
  logger('------');
  logger(appHtml);
  ctx.body = appHtml;
});

const port = 3000;
const info: string = `Server running on http://localhost:${port}`;
app.listen(port, () => {
  logger(info);
});