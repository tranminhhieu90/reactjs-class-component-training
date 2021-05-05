import React from 'react';
const HomePage = React.lazy(() => import('containers/Home'));


const routes = [
  {
    path: '/',
    exact: true,
    component: HomePage,
  },
];

export default routes;
