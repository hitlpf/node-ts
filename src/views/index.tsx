// App.tsx
import React from 'react';

const App: React.FC = () => {
  return <div onClick={() => {alert(11)}}>Hello, Server-Side Rendering! 此处可点击！</div>;
};

export default App;