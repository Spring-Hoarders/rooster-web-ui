import { createBrowserRouter } from "react-router-dom";
import { HomePage, Layout } from "./pages";
import ErrorPage from "./pages/ErrorPage";
import BuildingPage from "./pages/BuildingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "buildings?id=:buildingId&floorId=:floorId",
        element: <BuildingPage />,
      },
    ],
  },
]);

export default router;
