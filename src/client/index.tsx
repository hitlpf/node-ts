import React from 'react';
import ReactDOM from 'react-dom';

import App from '../views'; 

const data = window.data;

ReactDOM.hydrate(<App name={data.name}/>, document.getElementById('root'));
