import { render } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";

import routes from "@/routes";

function renderAt(url) {
  const router = createMemoryRouter(routes, {
    initialEntries: [url],
  });

  render(<RouterProvider router={router} />);

  return router;
}

export default renderAt;
