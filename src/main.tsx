import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import QuestionsPage from './pages/questions-page.tsx';
import SuccessPage from './pages/success-page.tsx';
import './index.scss';
import LandingPage from './pages/landing-page.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/questions',
    element: <QuestionsPage />,
  },
  {
    path: '/success',
    element: <SuccessPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
