import { createBrowserRouter } from 'react-router-dom';
import { PageNotFound } from 'pages/PageNotFound';

export const routes = {
  login: '/login',
};

export const browserRoutes = createBrowserRouter([
  {
    path: '/',
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
]);
