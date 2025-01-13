// index.js
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App.jsx';
import NotFoundPage from './Pages/404-not-found.jsx';
import Login from './Pages/login.jsx'
import Register from './Pages/register.jsx'
import RecipePage from './Pages/recipes.jsx';
import GroceryPage from '../grocery.jsx';

// Define the routes using createBrowserRouter
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />, 
    children: [
      {
        index: true,
        element: <div>Home Page</div>, 
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />, 
      }, 
      {
        path: '/recipes',
        element: <RecipePage />, 
      },
      {
        path: '/grocery',
        element: <GroceryPage />, 
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
