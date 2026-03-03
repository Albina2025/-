import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import ProtectedRoute from "./ProtectedRoute";
import * as pages from "../pages";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <pages.LoginPage />,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            path: "/subjects/private-sector",
            element: <pages.PrivateSectorPage />,
          },
          {
            path: "/objects/ai",
            element: <pages.AIPage />,
          },
          {
            path: "/objects/software",
            element: <pages.SoftwarePage />,
          },
        ],
      },
    ],
  },
]);