import React from 'react';

import classNames from 'classnames';

import { AppProps } from './types';

import Title from './components/title';
import Abstract from './components/abstract';
import SearchBox from './components/search-box';

// css module的样式
import styles from './index.module.scss';

// .css文件纯css，没有用到css module
import './style.css';

const App: React.FC<AppProps> = (props: AppProps) => (
  <div className={classNames(styles.reactSSRContainer, 'main-body')}>
    <Title text={`标题: hello, ${props?.name}`}/>
    <Abstract summary='摘要: Server-Side Rendering! 此处点击可异步拉取数据!' onClick={() => {
      alert('摘要点击');
    }}/>
    <SearchBox/>
  </div>
);

export default App;
