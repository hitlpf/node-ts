import React from 'react';
import { renderToString } from 'react-dom/server';
// import { renderToPipeableStream } from 'react-dom/server';

import App from '../views';

export default function (data: any) {
  const appHtml: string = renderToString(React.createElement(App, data));
  // const appHtml: string = renderToString(<App name={data.name}/>); // 这种<App/>写法，只能在tsx文件中用
  return appHtml;
}