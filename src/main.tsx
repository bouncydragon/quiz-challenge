import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import QuestionsPage from './pages/questions-page.tsx';
import SuccessPage from './pages/success-page.tsx';
import './index.css';

const router = createBrowserRouter([
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
