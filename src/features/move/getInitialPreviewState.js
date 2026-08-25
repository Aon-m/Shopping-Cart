export default function getInitialPreviewState(previews) {
  return {
    offscreenLeft: previews[previews.length - 2],
    previous: previews[previews.length - 1],
    current: previews[0],
    next: previews[1],
    offscreenRight: previews[2],
  };
}
