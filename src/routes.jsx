import App from "./App.jsx";
import Cart from "./features/Cart/Cart.jsx";
import ErrorPage from "./features/ErrorPage/ErrorPage.jsx";
import Home from "./features/Home/Home.jsx";
import Shop from "./features/Shop/Shop.jsx";

const routes = [
  {
    path: "/",
    Component: App,
    errorElement: <ErrorPage />,
    children: [
      { index: true, Component: Home },
      { path: "shop", Component: Shop },
      { path: "cart", Component: Cart },
    ],
  },
];

export default routes;
