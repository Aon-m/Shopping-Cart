import { NavLink } from "react-router";
import styles from "./NavBar.module.scss";

export default function NavBarItem({
  children,
  href,
  onClick = () => {},
  index = null,
}) {
  return (
    <li className={`${styles.nav__item} text text-400 text-5 text-black`}>
      <NavLink
        to={href}
        state={{ name }}
        onClick={onClick}
        end={href === "/"}
        className={({ isActive }) =>
          `${styles.nav__link} ${
            isActive ? `${styles.active || "active"} active` : ""
          }`.trim()
        }
      >
        {index !== null && (
          <span className={styles.nav__index} aria-hidden="true">
            {index}
          </span>
        )}
        {children}
      </NavLink>
    </li>
  );
}
