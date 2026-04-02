export default function Hero() {
  return (
    <section className="hero-premium">
      <div className="hero-premium__bg" aria-hidden="true">
        <div className="hero-premium__row hero-premium__row--left">
          <div className="hero-premium__track">
            <img src="/images/pag1.webp" alt="" width="260" height="160" />
            <img src="/images/pag3.webp" alt="" width="260" height="160" />
            <img src="/images/pag2.webp" alt="" width="260" height="160" />
            <img src="/images/pag4.webp" alt="" width="260" height="160" />
            <img src="/images/pag6.webp" alt="" width="260" height="160" />
            <img src="/images/pag5.webp" alt="" width="260" height="160" />
            <img src="/images/pag7.webp" alt="" width="260" height="160" />
            <img src="/images/pag8.webp" alt="" width="260" height="160" />

            <img src="/images/pag1.webp" alt="" width="260" height="160" />
            <img src="/images/pag3.webp" alt="" width="260" height="160" />
            <img src="/images/pag2.webp" alt="" width="260" height="160" />
            <img src="/images/pag4.webp" alt="" width="260" height="160" />
            <img src="/images/pag6.webp" alt="" width="260" height="160" />
            <img src="/images/pag5.webp" alt="" width="260" height="160" />
            <img src="/images/pag7.webp" alt="" width="260" height="160" />
            <img src="/images/pag8.webp" alt="" width="260" height="160" />
          </div>
        </div>

        <div className="hero-premium__row hero-premium__row--right">
          <div className="hero-premium__track">
            <img src="/images/pag9.webp" alt="" width="260" height="160" />
            <img src="/images/pag10.webp" alt="" width="260" height="160" />
            <img src="/images/pag11.webp" alt="" width="260" height="160" />
            <img src="/images/pag12.webp" alt="" width="260" height="160" />
            <img src="/images/pag13.webp" alt="" width="260" height="160" />
            <img src="/images/pag14.webp" alt="" width="260" height="160" />
            <img src="/images/pag15.webp" alt="" width="260" height="160" />
            <img src="/images/pag16.webp" alt="" width="260" height="160" />

            <img src="/images/pag9.webp" alt="" width="260" height="160" />
            <img src="/images/pag10.webp" alt="" width="260" height="160" />
            <img src="/images/pag11.webp" alt="" width="260" height="160" />
            <img src="/images/pag12.webp" alt="" width="260" height="160" />
            <img src="/images/pag13.webp" alt="" width="260" height="160" />
            <img src="/images/pag14.webp" alt="" width="260" height="160" />
            <img src="/images/pag15.webp" alt="" width="260" height="160" />
            <img src="/images/pag16.webp" alt="" width="260" height="160" />
          </div>
        </div>

        <div className="hero-premium__overlay"></div>
      </div>

      <div className="hero-premium__container">
        <div className="hero-premium__content">
          <div className="hero-premium__badge">
            <span className="hero-premium__badge-dot"></span>
            Especialistas em conversão para infoprodutos
          </div>

          <h1 className="hero-premium__title">
            Landing pages para infoprodutores que querem <em>lançar e vender mais.</em>
          </h1>

          <p className="hero-premium__subtitle">
            Páginas que já ajudaram experts a <b>vender mais de 6 dígitos</b> em lançamentos.
          </p>

          <ul className="hero-premium__bullets">
            <li>
              <svg viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              Foco total em conversão
            </li>
            <li>
              <svg viewBox="0 0 24 24">
                <path d="M13 2L3 14h7v8l10-12h-7z" />
              </svg>
              Performance otimizada
            </li>
            <li>
              <svg viewBox="0 0 24 24">
                <path d="M3 3h8v8H3zm10 0h8v5h-8zm0 7h8v11h-8zM3 13h8v8H3z" />
              </svg>
              Estrutura validada
            </li>
          </ul>

          <div className="hero-premium__actions">
            <a href="#formulario" className="btn-primary">
              Quero uma landing page
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            <a href="#como-funciona" className="btn-ghost">
              Como funciona
            </a>
          </div>

          <div className="hero-premium__proof">
            <div className="hero-premium__proof-avatars">
              <img src="/images/avatar-1.webp" alt="Cliente" width="32" height="32" />
              <img src="/images/avatar-2.webp" alt="Cliente" width="32" height="32" />
              <img src="/images/avatar4.webp" alt="Cliente" width="32" height="32" />
              <img src="/images/avatar-3.webp" alt="Cliente" width="32" height="32" />
            </div>
            <span>+ de 1.000 projetos entregues</span>
          </div>
        </div>
      </div>
    </section>
  );
}