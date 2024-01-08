import React from 'react';

import classNames from 'classnames';

import { AppProps } from './types';

import Title from './components/title';
import Abstract from './components/abstract';

// css module的样式
import styles from './index.module.scss';

// .css文件纯css，没有用到css module
import './style.css';

const App: React.FC<AppProps> = (props: AppProps) => (
  <div className={classNames(styles.reactSSRContainer, 'main-body')}>
    <Title text={`hello, ${props?.name}`}/>
    <Abstract summary='Server-Side Rendering! 此处可以进行点击!' onClick={() => {
      alert('摘要点击');
    }}/>
  </div>
);

export default App;
