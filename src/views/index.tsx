import React from 'react';

import { AppProps } from './types';
import styles from './index.module.scss';

// .css文件纯css，没有用到css module
import './style.css';

const App: React.FC<AppProps> = (props: AppProps) => {
  return (
    <div className={styles.reactSSRContainer} onClick={() => {alert(props?.name)}}>
      Hello, {props?.name}, Server-Side Rendering! 此处可以进行点击l！
    </div>
  );
};

export default App;