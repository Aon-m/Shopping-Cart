export default function FooterLink({ children, href }) {
  return (
    <li className="footer__link">
      <a className="fast-slow-hover" href={href}>
        {children}
      </a>
    </li>
  );
}
