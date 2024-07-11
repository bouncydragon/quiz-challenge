import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {
  ErrorPage,
  LandingPage,
  NotFound,
  QuestionsPage,
  SuccessPage,
} from './pages';
import './index.scss';

const router = createBrowserRouter([
  {
    path: '*',
    element: <NotFound />,
  },
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/questions',
    element: <QuestionsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/success',
    element: <SuccessPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
