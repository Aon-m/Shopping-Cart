import { useEffect, useState, useRef, Children, cloneElement } from "react";
import "./NavBar.scss"

export default function NavBar({ logo, links }) {
  const hamburgerRef = useRef(null);
  const mobileNavRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(0);

  // Init
  useEffect(() => {
    Children.toArray(links)[0]?.props.onClick?.();
  });
  // Mobile Nav
  useEffect(() => {
    if (isOpen) {
      mobileNavRef.current.showModal();
      mobileNavRef.current.addEventListener("keydown", (e) => {
        if (e.key === "Escape") this.close();
      });
    } else {
      mobileNavRef.current.close();
      hamburgerRef.current.focus();
    }
  }, [isOpen]);

  return (
    <header data-page="home">
      {/* Aria Label title */}
      <h2 className="hidden">Main Navigation</h2>
      {/* Logo */}
      <div className="nav__logo">{logo}</div>
      {/* Hamburger */}
      <button
        ref={hamburgerRef}
        className="nav__hamburger"
        type="button"
        aria-label="Open Menu"
        onClick={() => setIsOpen(true)}
      >
        <svg width={20} height={14} xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z"
            fill="currentColor"
            fillRule="evenodd"
          />
        </svg>
      </button>

      <nav className="nav nav--desktop">
        <ul className="nav__links text text--small">
          {Children.map(links, (link, index) =>
            cloneElement(link, {
              selected: selected === index,
              onClick: (e) => {
                link.props.onClick?.(e);
                setSelected(index);
              },
            }),
          )}
        </ul>
      </nav>
      <dialog
        ref={mobileNavRef}
        className="nav--dialog"
        aria-label="Mobile navigation"
      >
        <nav className="nav nav--mobile">
          <div className="nav__top">
            <div className="nav__logo">{logo}</div>

            <button
              className="nav__close-button"
              aria-label="Close Menu"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
          </div>
          <ul className="nav__links text text--small">
            {Children.map(links, (link, index) =>
              cloneElement(link, {
                selected: selected === index,
                onClick: (e) => {
                  link.props.onClick?.(e);
                  setSelected(index);
                },
              }),
            )}
          </ul>
        </nav>
      </dialog>
    </header>
  );
}
