import { createBrowserRouter } from "react-router-dom";
import { routes } from "./publicRoutes";
import Layout from "../Layout/index";
import Landing from "../pages/Landing/landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ index: true, element: <Landing /> }, ...routes],
  },
]);

export default router;

