// App.tsx
import React from 'react';

const App: React.FC = () => {
  return <div onClick={() => {alert(11)}}>Hello, Server-Side Rendering!</div>;
};

export default App;