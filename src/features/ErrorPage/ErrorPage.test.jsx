import { describe, it } from "vitest";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";
import routes from "@/routes";

function renderAt(url) {
  const router = createMemoryRouter(routes, {
    initialEntries: [url],
  });

  render(<RouterProvider router={router} />);
  return router;
}

describe("Navigates", () => {
  it("Goes back", async () => {
    const user = userEvent.setup();

    const router = renderAt("/profile");

    const link = screen.getByRole("link");

    await user.click(link);

    expect(router.state.location.pathname).toBe("/home");
  });

  it("renders error page", () => {
    renderAt("/profile");
    expect(screen.getByText(/not found/i)).toBeInTheDocument();
  });
});
