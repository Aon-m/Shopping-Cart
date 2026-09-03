import { describe, it } from "vitest";
import renderAt from "@/shared/helpers/renderAt";

describe("Footer tests", () => {
  describe("Rendering", () => {
    it("Footer renders", () => {
      renderAt("/");
      expect(document.querySelector("footer")).toBeInTheDocument();
    });
  });
});
