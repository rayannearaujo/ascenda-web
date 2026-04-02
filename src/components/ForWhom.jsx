export default function ForWhom() {
  return (
    <section className="forwhom">
      <div className="forwhom__top-line"></div>

      <div className="forwhom__header">
        <div className="forwhom__badge">
          <svg
            className="forwhom__badge-icon"
            viewBox="0 0 24 24"
            width="13"
            height="13"
            fill="#3b82f6"
            stroke="none"
          >
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
          </svg>
          Para quem é
        </div>

        <h2 className="forwhom__title">
          Esse serviço foi feito
          <br />
          para <em>quem quer vender.</em>
        </h2>

        <p className="forwhom__subtitle">
          Antes de começar, precisamos estar alinhados. Trabalhamos com quem está pronto para crescer.
        </p>
      </div>

      <div className="forwhom__grid">
        <div className="forwhom__col forwhom__col--yes">
          <div className="forwhom__col-header">
            <h3 className="forwhom__col-title">É para você se…</h3>
          </div>

          <ul className="forwhom__list">
            <li className="forwhom__item forwhom__item--yes">
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <div>
                <strong>Você tem um infoproduto validado</strong>
                <span>
                  Curso, mentoria ou programa que já gerou resultado — e quer escalar com uma página que converte de verdade.
                </span>
              </div>
            </li>

            <li className="forwhom__item forwhom__item--yes">
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <div>
                <strong>Você faz ou planeja fazer lançamentos digitais</strong>
                <span>
                  Precisa de uma página de captura, vendas ou inscrição que converta o tráfego que você está pagando para trazer.
                </span>
              </div>
            </li>

            <li className="forwhom__item forwhom__item--yes">
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <div>
                <strong>Você tem um negócio online e quer crescer</strong>
                <span>
                  E-commerce, serviço, SaaS ou qualquer negócio que depende de uma landing page para gerar leads ou vendas.
                </span>
              </div>
            </li>

            <li className="forwhom__item forwhom__item--yes">
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <div>
                <strong>Você valoriza estratégia, não só estética</strong>
                <span>
                  Entende que design sem conversão é custo — e quer uma página que trabalhe por você 24 horas por dia.
                </span>
              </div>
            </li>
          </ul>
        </div>

        <div className="forwhom__col forwhom__col--no">
          <div className="forwhom__col-header">
            <h3 className="forwhom__col-title">Não é para você se…</h3>
          </div>

          <ul className="forwhom__list">
            <li className="forwhom__item forwhom__item--no">
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
              <div>
                <strong>Você ainda não tem produto</strong>
                <span>
                  Uma landing page de alta conversão sem produto validado é dinheiro desperdiçado. Valide primeiro, escale depois.
                </span>
              </div>
            </li>

            <li className="forwhom__item forwhom__item--no">
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
              <div>
                <strong>Você quer só design bonito sem estratégia</strong>
                <span>
                  Aqui cada decisão visual tem um motivo estratégico. Se o objetivo é só impressionar, não somos o match certo.
                </span>
              </div>
            </li>

            <li className="forwhom__item forwhom__item--no">
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
              <div>
                <strong>Você quer o mais barato do mercado</strong>
                <span>
                  Nosso trabalho tem preço justo pelo resultado que entrega. Se o critério é só preço, há opções mais adequadas.
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="forwhom__cta">
        <p className="forwhom__cta-text">
          Se você se identificou com o primeiro lado, vamos conversar.
        </p>
        <a href="#formulario" className="forwhom__btn">
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