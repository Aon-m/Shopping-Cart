export default function NavBarItem({
  index,
  name,
  href,
  selected,
  onClick,
}) {
  return (
    <li className="nav__item" data-page={name}>
      <a
        href={href}
        onClick={onClick}
        className={`nav__link fast-slow-hover ${
          selected ? "underline-hover--selected" : ""
        }`}
        href={href}
      >
        <span className="nav__index" aria-hidden="true">
          {index}
        </span>
        {name}
      </a>
    </li>
  );
}
