import { DataProvider } from "./context/DataContext.jsx";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Profil from "./pages/Profil.jsx";
import Reglage from "./pages/Reglage.jsx";
import Communaute from "./pages/Communaute.jsx";
import Error from "./pages/Error.jsx";
import Home from "./pages/Home.jsx";

const router = createBrowserRouter([
  {
    Component: App,

    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "profil",
        Component: Profil,
      },
      {
        path: "reglage",
        Component: Reglage,
      },
      {
        path: "communaute",
        Component: Communaute,
      },
      {
        path: "*",
        Component: Error,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <DataProvider>
    <RouterProvider router={router} />
  </DataProvider>,
);
