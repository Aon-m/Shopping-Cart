import "./Footer.scss";

export default function Footer({ logo, links, icons }) {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo" className="footer__logo icon icon--8" />

      <ul className="footer__links">{links}</ul>

      <div className="footer__icons icon icon--8">{icons}</div>
    </footer>
  );
}
