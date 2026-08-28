import { NavLink } from "react-router";
import styles from "./NavBar.module.scss";

export default function NavBarItem({
  name,
  href,
  onClick = () => {},
  index = null,
}) {
  return (
    <li className={`${styles.nav__item} text text-400 text-5 text-black`}>
      <NavLink
        to={`${href}`}
        state={{ name }}
        onClick={onClick}
        className={({ isActive }) =>
          `${styles.nav__link} underline-hover ${isActive ? "active" : ""}`
        }
      >
        {index !== null && (
          <span className={styles.nav__index} aria-hidden="true">
            {index}
          </span>
        )}
        {name}
      </NavLink>
    </li>
  );
}
