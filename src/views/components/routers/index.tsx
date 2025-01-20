import * as React from 'react';
import { Link, useRoutes } from 'react-router-dom';
import App from '../../index';

const Links = () => (
  <nav style={{ margin: 10 }}>
    <Link to="/web" style={{ padding: 5 }}>/web</Link>
  </nav>
);

function Routers(props: any) {
  const { name } = props;
  const routes = [
    {
      path: '/',
      children: [
        {
          path: '/',
          element: <Links/>,
        },
        {
          path: '/web',
          element: <App name={name}></App>,
        },
      ],
    },
  ];
  return useRoutes(routes);
}

export default Routers;
