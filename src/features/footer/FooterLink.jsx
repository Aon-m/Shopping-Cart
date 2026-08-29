export default function FooterLink({ children, href }) {
  return (
    <li className="footer__item text text-6 text-400">
      <a className="footer__link fast-slow-hover" href={href}>
        {children}
      </a>
    </li>
  );
}
