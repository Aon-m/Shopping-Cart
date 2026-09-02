import App from "./App";
import Cart from "./features/Cart/Cart";
import ErrorPage from "./features/ErrorPage/ErrorPage";
import Home from "./features/Home/Home";
import Shop from "./features/Shop/Shop";

const routes = [
  {
    path: "/",
    Component: App,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", Component: Home },
      { path: "/shop", Component: Shop },
      { path: "/cart", Component: Cart },
    ],
  },
];

export default routes;
