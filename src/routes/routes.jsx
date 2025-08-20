import { createBrowserRouter } from "react-router-dom";

import { GeneralLayout } from "./layout/GeneralLayout";
import Services from "../pages/servicios/Services";
import Home from "../pages/home/Home";
import SobreNosotros from "../pages/sobrenosotros/SobreNosotros";

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
            element: <SobreNosotros/>,
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
