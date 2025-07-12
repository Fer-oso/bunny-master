import { createBrowserRouter } from "react-router-dom";

import { GeneralLayout } from "./layout/GeneralLayout";

import MiComponenteSpline from "../pages/sobrenosotros/SobreNosotros";
import Services from "../pages/servicios/Services";
import { Home } from "../pages/home/Home";

export const routes = () => {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <GeneralLayout />,
        children: [
          { index: true, element: <Home /> },
          {
            path: "/nosotros",
            element: <MiComponenteSpline/>,
          },
          {
            path: "/servicios",
            element: <Services />,
          },
       
        ],
      },
    ],
    {
      future: {
        v7_startTransition: true,
      },
    }
  );
  return router;
};

export default routes();
