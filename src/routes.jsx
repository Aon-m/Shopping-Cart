import App from "./App";
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
      { path: "/cart", Component: null },
    ],
  },
];

export default routes;
