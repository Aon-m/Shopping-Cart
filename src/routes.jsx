import App from "./App";
import ErrorPage from "./shared/components/ErrorPage/ErrorPage";

const routes = [
  {
    path: "/",
    Component: App,
    errorElement: <ErrorPage />,
    children: [
      { path: "/home", Component: null },
      { path: "/shop", Component: null },
      { path: "/cart", Component: null },
    ],
  },
];

export default routes;
