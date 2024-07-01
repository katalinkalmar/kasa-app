import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home/";
import Apropos from "./pages/Apropos/";
import ErrorPage from "./pages/ErrorPage"


const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement: <ErrorPage/> },
  { path: "/Apropos", element: <Apropos /> }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


