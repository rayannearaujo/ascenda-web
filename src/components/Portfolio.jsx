export default function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__top-line"></div>

      <div className="portfolio__layout">
        <div className="portfolio__left">
          <div className="portfolio__badge">
            <svg
              className="portfolio__badge-star"
              viewBox="0 0 24 24"
              width="13"
              height="13"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            Projetos entregues
          </div>

          <h2 className="portfolio__title">
            Páginas que <em>já estão vendendo</em>
          </h2>

          <p className="portfolio__subtitle">
            Cada projeto é construído com estratégia de conversão do início ao fim.
          </p>
        </div>

        <div className="portfolio__right">
          <div className="portfolio__fade portfolio__fade--top"></div>
          <div className="portfolio__fade portfolio__fade--bottom"></div>

          <div className="portfolio__columns">
            <div className="portfolio__col" id="colA">
              <div className="portfolio__col-track portfolio__col-track--up">
                <div className="portfolio__card">
                  <img src="/images/pag1.webp" alt="Projeto 1" loading="lazy" />
                  <div className="portfolio__card-overlay">
                    <span className="portfolio__card-niche">Curso online · Psicologia</span>
                    <div className="portfolio__card-stat">
                      <span className="portfolio__card-stat-value">38%</span>
                      <span className="portfolio__card-stat-label">taxa de conversão</span>
                    </div>
                  </div>
                </div>

                <div className="portfolio__card">
                  <img src="/images/pag3.webp" alt="Projeto 3" loading="lazy" />
                  <div className="portfolio__card-overlay">
                    <span className="portfolio__card-niche">Infoproduto · Inteligência Artificial</span>
                    <div className="portfolio__card-stat">
                      <span className="portfolio__card-stat-value">+40%</span>
                      <span className="portfolio__card-stat-label">aumento nas vendas</span>
                    </div>
                  </div>
                </div>

                <div className="portfolio__card">
                  <img src="/images/pag5.webp" alt="Projeto 5" loading="lazy" />
                  <div className="portfolio__card-overlay">
                    <span className="portfolio__card-niche">Curso online · Advocacia</span>
                    <div className="portfolio__card-stat">
                      <span className="portfolio__card-stat-value">60%</span>
                      <span className="portfolio__card-stat-label">taxa de conversão</span>
                    </div>
                  </div>
                </div>

                <div className="portfolio__card">
                  <img src="/images/pag14.webp" alt="Projeto 7" loading="lazy" />
                  <div className="portfolio__card-overlay">
                    <span className="portfolio__card-niche">Serviço · Dentista</span>
                    <div className="portfolio__card-stat">
                      <span className="portfolio__card-stat-value">+190%</span>
                      <span className="portfolio__card-stat-label">aumento nos agendamentos</span>
                    </div>
                  </div>
                </div>

                <div className="portfolio__card">
                  <img src="/images/pag1.webp" alt="Projeto 1" loading="lazy" />
                  <div className="portfolio__card-overlay">
                    <span className="portfolio__card-niche">Curso online · Psicologia</span>
                    <div className="portfolio__card-stat">
                      <span className="portfolio__card-stat-value">38%</span>
                      <span className="portfolio__card-stat-label">taxa de conversão</span>
                    </div>
                  </div>
                </div>

                <div className="portfolio__card">
                  <img src="/images/pag3.webp" alt="Projeto 3" loading="lazy" />
                  <div className="portfolio__card-overlay">
                    <span className="portfolio__card-niche">Infoproduto · Inteligência Artificial</span>
                    <div className="portfolio__card-stat">
                      <span className="portfolio__card-stat-value">+40%</span>
                      <span className="portfolio__card-stat-label">aumento nas vendas</span>
                    </div>
                  </div>
                </div>

                <div className="portfolio__card">
                  <img src="/images/pag5.webp" alt="Projeto 5" loading="lazy" />
                  <div className="portfolio__card-overlay">
                    <span className="portfolio__card-niche">Curso online · Advocacia</span>
                    <div className="portfolio__card-stat">
                      <span className="portfolio__card-stat-value">29%</span>
                      <span className="portfolio__card-stat-label">taxa de conversão</span>
                    </div>
                  </div>
                </div>

                <div className="portfolio__card">
                  <img src="/images/pag14.webp" alt="Projeto 7" loading="lazy" />
                  <div className="portfolio__card-overlay">
                    <span className="portfolio__card-niche">Serviço · Dentista</span>
                    <div className="portfolio__card-stat">
                      <span className="portfolio__card-stat-value">+190%</span>
                      <span className="portfolio__card-stat-label">aumento nas vendas</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="portfolio__col" id="colB">
              <div className="portfolio__col-track portfolio__col-track--down">
                <div className="portfolio__card">
                  <img src="/images/pag2.webp" alt="Projeto 2" loading="lazy" />
                  <div className="portfolio__card-overlay">
                    <span className="portfolio__card-niche">Serviços · Robótica</span>
                    <div className="portfolio__card-stat">
                      <span className="portfolio__card-stat-value">4.2x</span>
                      <span className="portfolio__card-stat-label">retorno sobre o investimento</span>
                    </div>
                  </div>
                </div>

                <div className="portfolio__card">
                  <img src="/images/pag4.webp" alt="Projeto 4" loading="lazy" />
                  <div className="portfolio__card-overlay">
                    <span className="portfolio__card-niche">Workshop · Advocacia</span>
                    <div className="portfolio__card-stat">
                      <span className="portfolio__card-stat-value">12k</span>
                      <span className="portfolio__card-stat-label">leads captados</span>
                    </div>
                  </div>
                </div>

                <div className="portfolio__card">
                  <img src="/images/pag6.webp" alt="Projeto 6" loading="lazy" />
                  <div className="portfolio__card-overlay">
                    <span className="portfolio__card-niche">Curso online · Emagrecimento</span>
                    <div className="portfolio__card-stat">
                      <span className="portfolio__card-stat-value">3.8x</span>
                      <span className="portfolio__card-stat-label">retorno sobre o investimento</span>
                    </div>
                  </div>
                </div>

                <div className="portfolio__card">
                  <img src="/images/pag8.webp" alt="Projeto 8" loading="lazy" />
                  <div className="portfolio__card-overlay">
                    <span className="portfolio__card-niche">Curso online · Design de Sobrancelhas</span>
                    <div className="portfolio__card-stat">
                      <span className="portfolio__card-stat-value">8.5k</span>
                      <span className="portfolio__card-stat-label">leads captados</span>
                    </div>
                  </div>
                </div>

                <div className="portfolio__card">
                  <img src="/images/pag2.webp" alt="Projeto 2" loading="lazy" />
                  <div className="portfolio__card-overlay">
                    <span className="portfolio__card-niche">Serviços · Robótica</span>
                    <div className="portfolio__card-stat">
                      <span className="portfolio__card-stat-value">4.2x</span>
                      <span className="portfolio__card-stat-label">retorno sobre o investimento</span>
                    </div>
                  </div>
                </div>

                <div className="portfolio__card">
                  <img src="/images/pag4.webp" alt="Projeto 4" loading="lazy" />
                  <div className="portfolio__card-overlay">
                    <span className="portfolio__card-niche">Workshop · Advocacia</span>
                    <div className="portfolio__card-stat">
                      <span className="portfolio__card-stat-value">12k</span>
                      <span className="portfolio__card-stat-label">leads captados</span>
                    </div>
                  </div>
                </div>

                <div className="portfolio__card">
                  <img src="/images/pag6.webp" alt="Projeto 6" loading="lazy" />
                  <div className="portfolio__card-overlay">
                    <span className="portfolio__card-niche">Curso online · Emagrecimento</span>
                    <div className="portfolio__card-stat">
                      <span className="portfolio__card-stat-value">3.8x</span>
                      <span className="portfolio__card-stat-label">retorno sobre o investimento</span>
                    </div>
                  </div>
                </div>

                <div className="portfolio__card">
                  <img src="/images/pag8.webp" alt="Projeto 8" loading="lazy" />
                  <div className="portfolio__card-overlay">
                    <span className="portfolio__card-niche">Curso online · Design de Sobrancelhas</span>
                    <div className="portfolio__card-stat">
                      <span className="portfolio__card-stat-value">8.5k</span>
                      <span className="portfolio__card-stat-label">leads captados</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio__cta">
        <p className="portfolio__cta-text">Quer um projeto como esses para o seu negócio?</p>
        <a href="#formulario" className="btn-primary">
          Quero minha landing page
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
}