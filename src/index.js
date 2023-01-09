import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";



import App from "./components/App";
import Home from "./components/Home";
import Schedule from "./components/Schedule";
import Tires from "./components/Tires";
import ErrorPage from "./components/ErrorPage";
import Teams from "./components/Teams";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {path: "/", element: <Home/>},
        {path: "/teams", element: <Teams/>},
        {path: "/schedule", element: <Schedule/>},
        {path: "/tires", element: <Tires/>}
      
      ]
    },
    
  ]);


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>);











// defaultna formula da renderira App
{/* (<App tab="home"/>) */}