import Move from "./Move.js";
import MoveAnimation from "./MoveAnimation.js";
import previews from "./previews.js";
import throttle from "@/shared/utils/throttle.js";

const move = new Move(container, {
  previews,
  animator: new MoveAnimation(),
});

nextBtn.addEventListener(
  "click",
  throttle(() => move.next(), 500),
);

prevBtn.addEventListener(
  "click",
  throttle(() => move.prev(), 500),
);
