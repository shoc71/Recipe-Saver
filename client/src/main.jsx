// index.js
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App.jsx';
import ErrorPage from './assets/dev/404-not-found.jsx';
import Login from './assets/dev/login.jsx';
import Register from './assets/dev/register.jsx';

// Define the routes using createBrowserRouter
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />, 
    children: [
      {
        index: true,
        element: <Login />
        //element: <div>Home Page</div>, // testing
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },  

    ],
  },
]);

// Find the root element in the HTML and render the app
const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <RouterProvider router={router} />
  );
}
