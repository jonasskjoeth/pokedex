import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Root from "./routes/Root";
import About from "./routes/About";
import { RouterProvider, createHashRouter } from "react-router-dom";


const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

