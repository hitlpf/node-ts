import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Routers from '../views/components/routers/index';

const { data } = window;

// 数据注水
ReactDOM.hydrate(
  (
    <BrowserRouter>
      <Routers name={data.name}/>
    </BrowserRouter>
  ), document.getElementById('root'),
);
