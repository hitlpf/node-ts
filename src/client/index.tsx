import React from 'react';
import ReactDOM from 'react-dom';
import App from '../views'; // 同一个主组件

ReactDOM.hydrate(<App />, document.getElementById('root'));
