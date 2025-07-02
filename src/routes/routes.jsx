import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import { GeneralLayout } from "./layout/GeneralLayout";

import Services from "../components/Services";
import MiComponenteSpline from "../pages/sobrenosotros/SobreNosotros";


export const routes = () => {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <GeneralLayout />,
        children: [
          { index: true, element: <App /> },
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
