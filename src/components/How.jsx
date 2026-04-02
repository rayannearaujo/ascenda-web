export default function How() {
  return (
    <section className="how">
      <div className="how__top-line"></div>

      <div className="how__layout">
        <div className="how__left">
          <div className="how__badge">
            <svg
              className="how__badge-icon"
              viewBox="0 0 24 24"
              width="13"
              height="13"
              fill="#3b82f6"
              stroke="none"
            >
              <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Como funciona
          </div>

          <h2 className="how__title">
            Um processo simples, pensado para <em>gerar resultado.</em>
          </h2>

          <p className="how__subtitle">
            Do briefing à entrega, cada etapa existe para maximizar sua conversão.
          </p>
        </div>

        <div className="how__right">
          <div className="how__card">
            <span className="how__card-number">01</span>
            <h3 className="how__card-title">Diagnóstico e briefing</h3>
            <p className="how__card-text">
              Entendimento do produto, público e objetivo da página. Definimos juntos
              o que precisa acontecer para a página converter.
            </p>
          </div>

          <div className="how__card">
            <span className="how__card-number">02</span>
            <h3 className="how__card-title">Estrutura e design</h3>
            <p className="how__card-text">
              Definição da hierarquia, copy e direção visual estratégica. Cada elemento
              posicionado para guiar o visitante até a conversão.
            </p>
          </div>

          <div className="how__card">
            <span className="how__card-number">03</span>
            <h3 className="how__card-title">Desenvolvimento</h3>
            <p className="how__card-text">
              Construção da landing page com foco em performance e responsividade.
              Otimizada para carregar rápido em qualquer dispositivo.
            </p>
          </div>

          <div className="how__card how__card--last">
            <span className="how__card-number">04</span>
            <h3 className="how__card-title">Entrega e otimização</h3>
            <p className="how__card-text">
              Publicação, ajustes finais e base pronta para conversão. Após 30 dias,
              análise de mapa de calor e melhorias baseadas em dados reais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}