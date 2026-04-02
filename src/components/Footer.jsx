export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">

        {/* Instagram */}
        <div className="footer__social">
          <a
            href="https://instagram.com/ascendaweb"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
            aria-label="Instagram"
          >
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
            </svg>
            @ascendaweb
          </a>
        </div>

        {/* Linha divisória */}
        <div className="footer__divider"></div>

        {/* Bottom */}
        <div className="footer__bottom">
          <span className="footer__copy">
            © 2026 Ascenda Web. Todos os direitos reservados.
          </span>
          <span className="footer__cnpj">
            CNPJ 37.735.890/0001-90
          </span>
        </div>

      </div>
    </footer>
  );
}