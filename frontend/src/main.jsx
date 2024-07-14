import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/page.jsx';
import Auth from './pages/auth/page.jsx';
import Cart from './pages/cart/page.jsx';
import Plate from './pages/plates/page.jsx';
import Profile from './pages/profile/page.jsx';

const pages = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/auth', element: <Auth /> },
      { path: '/cart', element: <Cart /> },
      { path: '/plates', element: <Plate /> },
      { path: '/profile', element: <Profile /> },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={pages}></RouterProvider>
  </React.StrictMode>,
)
