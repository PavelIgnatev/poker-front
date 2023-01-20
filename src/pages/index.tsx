import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './Home';

const Pages = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Pages;