export default function Diff() {
  return (
    <section className="diff">
      <div className="diff__top-line"></div>

      <div className="diff__header">
        <div className="diff__badge">
          <svg
            className="diff__badge-icon"
            viewBox="0 0 24 24"
            width="13"
            height="13"
            fill="#3b82f6"
            stroke="none"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          Por que nos escolher
        </div>

        <h2 className="diff__title">
          Não entregamos só design.
          <br />
          Entregamos <em>resultado.</em>
        </h2>

        <p className="diff__subtitle">
          Cada detalhe do nosso processo existe para uma única razão: fazer sua página converter mais.
        </p>
      </div>

      <div className="diff__grid">

        {/* CARD 1 */}
        <div className="diff__card diff__card--featured">
  <div className="diff__card-visual">
    <svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g1top" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1e4fd8"/>
          <stop offset="100%" stopColor="#3b82f6"/>
        </linearGradient>
        <linearGradient id="g1side" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0d2d8a"/>
          <stop offset="100%" stopColor="#1e4fd8"/>
        </linearGradient>
        <linearGradient id="g1light" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#60a5fa"/>
          <stop offset="100%" stopColor="#93c5fd"/>
        </linearGradient>
      </defs>

      <polygon points="30,40 110,20 190,40 110,60" fill="url(#g1top)" opacity="0.9"/>
      <polygon points="30,40 30,52 110,72 110,60" fill="url(#g1side)" opacity="0.9"/>
      <polygon points="190,40 190,52 110,72 110,60" fill="#1a3fa0" opacity="0.9"/>

      <polygon points="30,52 110,72 190,52" fill="none" stroke="#60a5fa" strokeWidth="0.5" opacity="0.6"/>

      <polygon points="55,65 110,50 165,65 110,80" fill="url(#g1top)" opacity="0.85"/>
      <polygon points="55,65 55,76 110,91 110,80" fill="url(#g1side)" opacity="0.85"/>
      <polygon points="165,65 165,76 110,91 110,80" fill="#1a3fa0" opacity="0.85"/>

      <polygon points="78,88 110,78 142,88 110,98" fill="url(#g1light)" opacity="1"/>
      <polygon points="78,88 78,98 110,108 110,98" fill="#2563eb" opacity="1"/>
      <polygon points="142,88 142,98 110,108 110,98" fill="#1d4ed8" opacity="1"/>

      <g className="diff-arrow">
        <circle cx="110" cy="120" r="7" fill="#22c55e" opacity="0.9"/>
        <path d="M107 120 L110 116 L113 120 L111 120 L111 124 L109 124 L109 120 Z" fill="#fff"/>
      </g>

      <text x="110" y="36" textAnchor="middle" fontSize="8" fill="#bfdbfe" fontWeight="600">
        VISITANTES
      </text>
      <text x="110" y="72" textAnchor="middle" fontSize="7.5" fill="#bfdbfe" fontWeight="600">
        LEADS
      </text>
      <text x="110" y="91" textAnchor="middle" fontSize="7" fill="#fff" fontWeight="700">
        CONVERSÃO
      </text>
    </svg>
  </div>

  <h3 className="diff__card-title">Design focado em conversão</h3>
  <p className="diff__card-text">
    Cada elemento é posicionado estrategicamente para guiar o visitante até a ação.
  </p>
  <div className="diff__card-tag">Estratégia visual</div>
</div>

        {/* CARD 2 */}
        <div className="diff__card">
  <div className="diff__card-visual">
    <svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g2top" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1e40af"/>
          <stop offset="100%" stopColor="#3b82f6"/>
        </linearGradient>
        <linearGradient id="g2acc" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1d4ed8"/>
          <stop offset="100%" stopColor="#60a5fa"/>
        </linearGradient>
      </defs>

      <polygon points="40,95 110,75 180,95 110,115" fill="#0c1a3d" opacity="0.8"/>
      <polygon points="40,95 40,103 110,123 110,115" fill="#060f24" opacity="0.8"/>
      <polygon points="180,95 180,103 110,123 110,115" fill="#0a1530" opacity="0.8"/>

      <polygon points="50,82 80,72 80,78 50,88" fill="#1e3a5f" opacity="0.7"/>
      <polygon points="50,88 50,94 80,84 80,78" fill="#0f2040" opacity="0.7"/>

      <polygon points="50,82 140,52 140,58 50,88" fill="url(#g2top)" opacity="0.95"/>
      <polygon points="50,88 50,94 140,64 140,58" fill="#1a3a8f" opacity="0.95"/>

      <g className="diff-bolt">
        <polygon points="115,30 105,55 112,55 102,80 120,50 113,50" fill="#facc15" opacity="0.95"/>
        <polygon points="115,30 105,55 112,55 102,80 120,50 113,50" fill="#fde68a" opacity="0.3"/>
      </g>

      <g className="diff-speed">
        <line x1="55" y1="42" x2="85" y2="33" stroke="#60a5fa" strokeWidth="1.5" opacity="0.7" strokeLinecap="round"/>
        <line x1="55" y1="50" x2="75" y2="43" stroke="#60a5fa" strokeWidth="1" opacity="0.5" strokeLinecap="round"/>
        <line x1="55" y1="58" x2="70" y2="52" stroke="#60a5fa" strokeWidth="0.8" opacity="0.3" strokeLinecap="round"/>
      </g>

      <text x="110" y="111" textAnchor="middle" fontSize="7.5" fill="#93c5fd" fontFamily="sans-serif" fontWeight="600">
        CARREGAMENTO RÁPIDO
      </text>
    </svg>
  </div>

  <h3 className="diff__card-title">Performance e velocidade</h3>
  <p className="diff__card-text">
    Página lenta perde venda. Cada segundo a mais reduz sua conversão em até 7%.
    Suas páginas carregam rápido em qualquer dispositivo.
  </p>
  <div className="diff__card-tag">Core Web Vitals</div>
</div>

        {/* CARD 3 */}
        <div className="diff__card">
  <div className="diff__card-visual">
    <svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g3top" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1e3a8a"/>
          <stop offset="100%" stopColor="#2563eb"/>
        </linearGradient>
        <radialGradient id="heat1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ef4444" stopOpacity="0.9"/>
          <stop offset="40%" stopColor="#f97316" stopOpacity="0.6"/>
          <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.1"/>
        </radialGradient>
        <radialGradient id="heat2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#f97316" stopOpacity="0.8"/>
          <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.1"/>
        </radialGradient>
      </defs>

      <polygon points="45,30 175,30 175,95 45,95" fill="#0a1a3e"/>
      <polygon points="45,30 175,30 165,22 55,22" fill="#0f2252"/>
      <polygon points="175,30 175,95 165,87 165,22" fill="#071230"/>

      <polygon points="45,30 175,30 175,95 45,95" fill="none" stroke="#1e3a8a" strokeWidth="1"/>

      <rect x="50" y="34" width="120" height="57" fill="#071840"/>

      <g className="diff-heat">
        <ellipse cx="95" cy="55" rx="22" ry="16" fill="url(#heat1)" opacity="0.85"/>
        <ellipse cx="140" cy="68" rx="16" ry="12" fill="url(#heat2)" opacity="0.75"/>
        <ellipse cx="75" cy="75" rx="12" ry="9" fill="url(#heat2)" opacity="0.55"/>
      </g>

      <line x1="50" y1="55" x2="170" y2="55" stroke="#1e3a8a" strokeWidth="0.5" opacity="0.4"/>
      <line x1="50" y1="70" x2="170" y2="70" stroke="#1e3a8a" strokeWidth="0.5" opacity="0.4"/>
      <line x1="95" y1="34" x2="95" y2="91" stroke="#1e3a8a" strokeWidth="0.5" opacity="0.4"/>
      <line x1="135" y1="34" x2="135" y2="91" stroke="#1e3a8a" strokeWidth="0.5" opacity="0.4"/>

      <polygon points="95,95 125,95 120,108 100,108" fill="#0a1a3e"/>
      <polygon points="85,108 135,108 130,114 90,114" fill="#071230"/>

      <text x="110" y="128" textAnchor="middle" fontSize="7.5" fill="#93c5fd" fontFamily="sans-serif" fontWeight="600">
        MAPA DE CALOR 30 DIAS
      </text>
    </svg>
  </div>

  <h3 className="diff__card-title">Análise após 30 dias</h3>
  <p className="diff__card-text">
    Depois da entrega, analisamos o mapa de calor da sua página. Vemos onde as pessoas clicam,
    onde param e onde saem — com dados reais.
  </p>
  <div className="diff__card-tag">Mapa de calor</div>
</div>

        {/* CARD 4 */}
               {/* CARD 4 */}
        <div className="diff__card">
          <div className="diff__card-visual">
            <svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="g4a" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0%" stopColor="#1e40af"/>
                  <stop offset="100%" stopColor="#3b82f6"/>
                </linearGradient>
                <linearGradient id="g4b" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0%" stopColor="#1d4ed8"/>
                  <stop offset="100%" stopColor="#60a5fa"/>
                </linearGradient>
                <linearGradient id="g4c" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0%" stopColor="#2563eb"/>
                  <stop offset="100%" stopColor="#93c5fd"/>
                </linearGradient>
              </defs>

              <polygon points="30,105 110,85 190,105 110,125" fill="#0a1530" opacity="0.7"/>
              <polygon points="30,105 30,112 110,132 110,125" fill="#060e1e" opacity="0.7"/>
              <polygon points="190,105 190,112 110,132 110,125" fill="#08111f" opacity="0.7"/>

              <polygon points="48,90 70,83 70,105 48,112" fill="#1e3a8a" opacity="0.9"/>
              <polygon points="70,83 85,76 85,98 70,105" fill="#1a3280" opacity="0.9"/>
              <polygon points="48,90 70,83 85,76 63,83" fill="#2563eb" opacity="0.9"/>

              <polygon points="88,78 110,71 110,105 88,112" fill="url(#g4a)" opacity="0.9"/>
              <polygon points="110,71 125,64 125,98 110,105" fill="#1d4ed8" opacity="0.9"/>
              <polygon points="88,78 110,71 125,64 103,71" fill="#3b82f6" opacity="0.9"/>

              <g className="diff-bar">
                <polygon points="128,55 150,48 150,105 128,112" fill="url(#g4b)" opacity="0.95"/>
                <polygon points="150,48 165,41 165,98 150,105" fill="#1e40af" opacity="0.95"/>
                <polygon points="128,55 150,48 165,41 143,48" fill="url(#g4c)" opacity="0.95"/>
              </g>

              <g className="diff-trend">
                <path d="M59 98 L99 84 L139 65" fill="none" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 2" opacity="0.8"/>
                <circle cx="139" cy="65" r="3" fill="#22c55e" opacity="0.9"/>
              </g>

              <text x="110" y="120" textAnchor="middle" fontSize="7.5" fill="#93c5fd" fontFamily="sans-serif" fontWeight="600">
                CRESCIMENTO CONTÍNUO
              </text>
            </svg>
          </div>

          <h3 className="diff__card-title">Melhorias baseadas em dados</h3>
          <p className="diff__card-text">
            Não chutamos o que melhorar. Com base nos dados do mapa de calor, fazemos ajustes precisos
            para aumentar ainda mais sua conversão.
          </p>
          <div className="diff__card-tag">Decisões por dados</div>
        </div>

      </div>

      <div className="diff__cta">
        <p className="diff__cta-text">
          Pronto para ter uma página que realmente converte?
        </p>

        <a href="#formulario" className="diff__btn">
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