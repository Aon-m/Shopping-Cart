import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it } from "vitest";
import NavBar from "./NavBar";
import renderAt from "@/shared/helpers/renderAt";

HTMLDialogElement.prototype.showModal = function () {
  this.setAttribute("open", "");
};
HTMLDialogElement.prototype.close = function () {
  this.removeAttribute("open");
};

function setup() {
  const user = userEvent.setup();

  render(<NavBar logo="/logo.svg" />);

  const hamburger = screen.getByRole("button", {
    name: /open/i,
  });

  return { user, hamburger };
}

describe("NavBar tests", () => {
  describe("Mobile menu", () => {
    it("Hamburger exists and opens Nav", async () => {
      const { user, hamburger } = setup();

      await user.click(hamburger);

      expect(hamburger).toBeInTheDocument();
      expect(screen.getByRole("dialog")).toHaveAttribute("open");
    });

    it("Close button exists and closes dialog", async () => {
      const { user, hamburger } = setup();

      await user.click(hamburger);

      const dialog = screen.getByRole("dialog");

      const closeBtn = screen.getByRole("button", {
        name: /close/i,
      });

      await user.click(closeBtn);

      expect(closeBtn).toBeInTheDocument();
      expect(dialog).not.toHaveAttribute("open");
    });
  });

  describe("Navigation", () => {
    it("Navigates to the home page", async () => {
      const user = userEvent.setup();
      const router = renderAt("/");

      const link = screen.getByRole("link", {
        name: /home/i,
      });

      await user.click(link);

      expect(router.state.location.pathname).toBe("/home");
    });

    it("Navigates to the shop page", async () => {
      const user = userEvent.setup();
      const router = renderAt("/");

      const link = screen.getByRole("link", {
        name: /shop/i,
      });

      await user.click(link);

      expect(router.state.location.pathname).toBe("/shop");
    });

    it("Navigates to the cart page", async () => {
      const user = userEvent.setup();
      const router = renderAt("/");

      const link = screen.getByRole("link", {
        name: /cart/i,
      });

      await user.click(link);

      expect(router.state.location.pathname).toBe("/cart");
    });
  });
});
