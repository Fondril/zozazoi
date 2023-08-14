import './App.css';
import React from 'react';

import LogInPage from '../src/pages/logInPage/logInPage'
import MainPage from '../src/pages/mainPage/mainPage'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
      {
            path: '/',
            element: <LogInPage />
      },
      {
            path: '/main',
            element: <MainPage />
      }
]
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
