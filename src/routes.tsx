import { createBrowserRouter } from "react-router-dom";
import {} from "react-router-dom";
import { Dashboard, LandingPage } from "./pages";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

export default router;
