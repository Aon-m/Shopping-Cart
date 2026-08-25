export default function getPreviewState(index, direction, previews) {
  const length = previews.length;

  const nextIndex =
    direction === "next" ? (index + 1) % length : (index - 1 + length) % length;

  return {
    index: nextIndex,
    offscreenLeft: previews[(nextIndex - 2 + length) % length],
    previous: previews[(nextIndex - 1 + length) % length],
    current: previews[nextIndex],
    next: previews[(nextIndex + 1) % length],
    offscreenRight: previews[(nextIndex + 2) % length],
  };
}
