import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './Home';
import LoginPage from './Login';
import SignUpPage from './SignUp';
import RecoveryPage from './Recovery';

const Pages = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/login',
      element: <LoginPage />,
    },
    {
      path: '/signup',
      element: <SignUpPage />,
    },
    {
      path: '/recovery',
      element: <RecoveryPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Pages;
