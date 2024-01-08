import React from 'react';

import classNames from 'classnames';

import { AppProps } from './types';

// css module的样式
import styles from './index.module.scss';

// .css文件纯css，没有用到css module
import './style.css';

const App: React.FC<AppProps> = (props: AppProps) => (
    <div className={classNames(styles.reactSSRContainer, 'title')} onClick={() => {
      alert(props?.name);
    }}>
      Hello, {props?.name}, Server-Side Rendering! 此处可以进行点击l！
    </div>
);

export default App;
