import React from 'react';

import { AppProps } from './types';

const App: React.FC<AppProps> = (props: AppProps) => {
  return <div onClick={() => {alert(props?.name)}}>
    Hello, {props?.name}, Server-Side Rendering! 此处可以进行点击！
  </div>;
};

export default App;