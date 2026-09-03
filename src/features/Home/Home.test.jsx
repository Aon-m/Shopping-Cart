import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import renderAt from "@/shared/helpers/renderAt";

describe("Home page tests", () => {
  describe("Rendering", () => {
    it("Home page renders", () => {
      renderAt("/");

      expect(screen.getByText(/shopping cart/i)).toBeInTheDocument();
    });
  });

  describe("Navigation", () => {
    it("Navigates to the shop page", async () => {
      const user = userEvent.setup();
      const router = renderAt("/");

      const link = screen.getByRole("link", {
        name: /shop/i,
      });

      await user.click(link);

      await waitFor(() => {
        expect(router.state.location.pathname).toBe("/shop");
      });
    });
  });
});
