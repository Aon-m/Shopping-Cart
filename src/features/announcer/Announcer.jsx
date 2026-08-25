import { useEffect, useRef } from "react";

export default function Announcer(message) {
  const announcerRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    const announcer = announcerRef.current;

    if (!announcer || !message) return;

    clearTimeout(timerRef.current);

    announcer.classList.remove("fade-out", "sr-only");
    announcer.textContent = "";

    requestAnimationFrame(() => {
      announcer.textContent = message;
    });

    timerRef.current = setTimeout(() => {
      announcer.classList.add("fade-out");

      const handleAnimationEnd = () => {
        announcer.classList.add("sr-only");
        announcer.classList.remove("fade-out");
        announcer.removeEventListener("animationend", handleAnimationEnd);
      };

      announcer.addEventListener("animationend", handleAnimationEnd);
    }, 2000);
  }, [message]);

  return (
    <div
      ref={announcerRef}
      id="announcer"
      className="announcer text text--secondary text--small text--bold sr-only"
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      {message}
    </div>
  );
}
