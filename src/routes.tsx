import { createBrowserRouter } from "react-router-dom";
import { HomePage, Layout } from "./pages";
import ErrorPage from "./pages/ErrorPage";
import BuildingPage from "./pages/BuildingPage";
import ApartmentPage from "./pages/ApartmentPage";
import ContractPage from "./pages/Contractpage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "buildings",
        children: [
          { index: true, element: <BuildingPage /> },
          { path: "apartments", element: <ApartmentPage /> },
        ],
      },
      {
        path: "contracts",
        element: <ContractPage />,
      },
    ],
  },
]);

export default router;
