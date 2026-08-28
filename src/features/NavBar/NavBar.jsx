import { useEffect, useState, useRef, Children } from "react";
import styles from "./NavBar.module.scss";
import injectProps from "@/shared/helpers/injectProps";

export default function NavBar({
  logo,
  children,
  hamburgerIcon = (
    <svg viewBox="0 0 20 14" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  ),
}) {
  const hamburgerRef = useRef(null);
  const mobileNavRef = useRef(null);
  const domLogo = <img src={logo} alt="Logo" className={styles.nav__logo} />;

  const [isOpen, setIsOpen] = useState(false);

  // Mobile Nav
  useEffect(() => {
    const dialog = mobileNavRef.current;

    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
    } else if (dialog.open) {
      dialog.close();
      hamburgerRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <header className={styles.header}>
      <div className={styles["nav__logo-wrapper"]}>{domLogo} </div>

      <button
        ref={hamburgerRef}
        className={styles.nav__hamburger}
        type="button"
        aria-label="Open Menu"
        onClick={() => setIsOpen(true)}
      >
        {hamburgerIcon}
      </button>

      <nav className={`${styles.nav} ${styles["nav--desktop"]}`}>
        <ul className={`${styles.nav__links} text text--small`}>{children}</ul>
      </nav>

      <dialog
        ref={mobileNavRef}
        className={styles["nav--dialog"]}
        aria-label="Mobile navigation"
        onCancel={() => setIsOpen(false)}
      >
        <nav className={`${styles.nav} ${styles["nav--mobile"]}`}>
          <div className={styles.nav__top}>
            <div className={styles["nav__logo-wrapper"]}>{domLogo} </div>

            <button
              type="button"
              className={styles["nav__close-button"]}
              aria-label="Close Menu"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
          </div>
          <ul className={`${styles.nav__links}`}>
            {Children.map(children, (child) =>
              injectProps(child, {
                onClick: () => {
                  setIsOpen(false);
                },
              }),
            )}
          </ul>
        </nav>
      </dialog>
    </header>
  );
}
