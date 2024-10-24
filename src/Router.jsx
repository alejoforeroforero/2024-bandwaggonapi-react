import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import AuthFormPage from "./pages/AuthFormPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/user-form",
        element: <AuthFormPage />,
      },
      {
        path: "/auth",
        element: <AuthPage />,
      },
      
    ],
  },
  
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
