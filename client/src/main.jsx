// index.js
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App.jsx';
import ErrorPage from './pages/NotFoundPage.jsx';
// import MainPage from './pages/MainPage.tsx';
// import VolunteerPage from './pages/VolunteerPage.tsx';
// import VolunteerForm from './pages/VolunteerForm.tsx';
// import EditVolunteer from './pages/EditVolunteer.tsx';
// import EditWork from './pages/EditWork.tsx';

// Define the routes using createBrowserRouter
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />, // Renders on any routing error
    children: [
      {
        index: true,
        element: <div>Home Page</div>, // Replace this with your actual MainPage if needed
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
