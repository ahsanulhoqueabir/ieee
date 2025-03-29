import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Excom from "@/pages/Excom";
import ErrorPage from "@/pages/ErrorPage";
import EidCard from "@/pages/EidCard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "ex-com/:year",
        element: <Excom />,
      },
      {
        path: "eid-wish/:id",
        element: <EidCard />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
