import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { browserRoutes } from 'app/routes/routes';
import 'app/styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={browserRoutes} />
  </React.StrictMode>
);
