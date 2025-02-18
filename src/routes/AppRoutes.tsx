import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Cart from "../components/Cart/Cart";
import Error from "../components/Error/Error";
import Home from "../components/Home/Home";
import { RestaurantMenu } from "../components/RestaurantMenu/RestaurantMenu";

const AppRouter = createBrowserRouter([
  {
    path: `/`,
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: `/`,
        element: <Home />,
      },
      {
        path: `/about`,
        element: <About />,
      },
      {
        path: `/contact`,
        element: <Contact />,
      },
      {
        path: `/cart`,
        element: <Cart />,
      },
      {
        path: `/restaurant/:id`,
        element: <RestaurantMenu />,
      },
    ],
  },
]);

export default AppRouter;
