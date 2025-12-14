import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInPage from "./pages/signin";
import SignUpPage from "./pages/signup";
import ErrorPage from "./pages/404"; // Pastikan path sesuai (misal: error.jsx atau 404.jsx)
import DashboardPage from "./pages/dashboard"; // Import halaman dashboard

const App = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <DashboardPage />, // Menggunakan DashboardPage sebagai halaman root
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <SignInPage />,
    },
    {
      path: "/register",
      element: <SignUpPage />,
    },
  ]);

  return <RouterProvider router={myRouter} />;
};

export default App;