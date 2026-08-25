import getInitialPreviewState from "./getInitialPreviewState.js";
import getPreviewState from "./getPreviewState.js";

export default class Move {
  constructor(container, { previews, animator, step }) {
    this.container = container;

    this.previews = previews;
    this.animator = animator;

    this.currentIndex = 0;
    this.step = step;

    this.elements = this.#bindElements();
  }

  init() {
    this.#render(getInitialPreviewState(this.previews));
  }

  async next() {
    await this.#update("next");
  }

  async prev() {
    await this.#update("prev");
  }

  async #update(direction) {
    const animations = this.#getAnimations(direction);

    await Promise.all(animations.map((a) => a.finished));

    const state = getPreviewState(this.currentIndex, direction, this.previews);

    this.currentIndex = state.index;

    this.#render(state);
  }

  #render(state) {
    const e = this.elements;

    e.left.src = state.offscreenLeft.src;
    e.left.alt = state.offscreenLeft.alt;

    e.prev.src = state.previous.src;
    e.prev.alt = state.previous.alt;

    e.current.src = state.current.src;
    e.current.alt = state.current.alt;

    e.next.src = state.next.src;
    e.next.alt = state.next.alt;

    e.right.src = state.offscreenRight.src;
    e.right.alt = state.offscreenRight.alt;
  }

  #bindElements() {
    return {
      left: this.container.querySelector("#offscreen-preview-left"),
      prev: this.container.querySelector("#previous-preview"),
      current: this.container.querySelector("#current-preview"),
      next: this.container.querySelector("#next-preview"),
      right: this.container.querySelector("#offscreen-preview-right"),
    };
  }

  #getAnimations(direction) {
    const e = this.elements;

    const map = {
      prev: () => [
        this.animator.moveAnimation(
          e.left,
          "offscreenToPreview",
          "next",
          this.step,
        ),
        this.animator.moveAnimation(
          e.prev,
          "previewToCurrent",
          "next",
          this.step,
        ),
        this.animator.moveAnimation(
          e.current,
          "currentToPreview",
          "next",
          this.step,
        ),
        this.animator.moveAnimation(
          e.next,
          "previewToOffscreen",
          "next",
          this.step,
        ),
      ],

      next: () => [
        this.animator.moveAnimation(
          e.prev,
          "previewToOffscreen",
          "prev",
          this.step,
        ),
        this.animator.moveAnimation(
          e.current,
          "currentToPreview",
          "prev",
          this.step,
        ),
        this.animator.moveAnimation(
          e.next,
          "previewToCurrent",
          "prev",
          this.step,
        ),
        this.animator.moveAnimation(
          e.right,
          "offscreenToPreview",
          "prev",
          this.step,
        ),
      ],
    };

    return map[direction]();
  }
}
