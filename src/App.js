import './App.css';
import React from 'react';

import LogInPage from '../src/pages/logInPage/logInPage'
import GalerijaPage from '../src/pages/galerijaPage/galerijaPage'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import KomentariPage from './pages/komentariPage/komentariPage';
import VideoPage from './pages/videoPage/videoPage';

const router = createBrowserRouter([
      {
            path: '/',
            element: <LogInPage />
      },
      {
            path: '/ovoJeGalerija002DaNeDaGaGaKomplikovanURL',
            element: <GalerijaPage />
      },
      {
            path: '/ovoSuKomentariITakodjeKomplikovanURLJerNecemoPacove',
            element: <KomentariPage />
      },
      {
            path: '/stranicaZaVideoBogTeVideoOvdeCeBiti003GaGa',
            element: <VideoPage />
      }
]
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
