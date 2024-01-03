import React from 'react';

import { AppProps } from './types';
import styles from './index.module.scss';

const App: React.FC<AppProps> = (props: AppProps) => {
  return (
    <div className={styles.reactSSRContainer} onClick={() => {alert(props?.name)}}>
      Hello, {props?.name}, Server-Side Rendering! 此处可以进行点击l！
    </div>
  );
};

export default App;