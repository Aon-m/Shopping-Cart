import App from "./App";
import ErrorPage from "./features/ErrorPage/ErrorPage";
import Home from "./features/Home/Home";

const routes = [
  {
    path: "/",
    Component: App,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", Component: Home },
      { path: "/shop", Component: null },
      { path: "/cart", Component: null },
    ],
  },
];

export default routes;
