import { useEffect, useMemo, useState } from "react";

const images = [
  { src: "/images/proof1.webp", alt: "Depoimento 1" },
  { src: "/images/proof2.webp", alt: "Depoimento 2" },
  { src: "/images/proof3.webp", alt: "Depoimento 3" },
  { src: "/images/proof4.webp", alt: "Depoimento 4" },
  { src: "/images/proof5.webp", alt: "Depoimento 5" },
  { src: "/images/proof6.webp", alt: "Depoimento 6" },
];

export default function Proof() {
  const total = images.length;

  // faixa estendida: clones antes + reais + clones depois
  const extended = useMemo(() => [...images, ...images, ...images], []);
  const [index, setIndex] = useState(total); // começa no primeiro card real
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);

  function perView() {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth >= 960) return 3;
    if (window.innerWidth >= 600) return 2;
    return 1;
  }

  const [cardsPerView, setCardsPerView] = useState(perView());

  useEffect(() => {
    function handleResize() {
      setCardsPerView(perView());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const realIndex = ((index - total) % total + total) % total;
  const centerIndex = index + Math.floor(cardsPerView / 2);

  function handlePrev() {
    setIndex((prev) => prev - 1);
  }

  function handleNext() {
    setIndex((prev) => prev + 1);
  }

  function handleTransitionEnd() {
    // se saiu da faixa real para os clones do fim
    if (index >= total * 2) {
      setIsTransitionEnabled(false);
      setIndex(total);
    }

    // se saiu da faixa real para os clones do começo
    if (index < total) {
      setIsTransitionEnabled(false);
      setIndex(total * 2 - 1);
    }
  }

  useEffect(() => {
    if (!isTransitionEnabled) {
      const id = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitionEnabled(true);
        });
      });

      return () => cancelAnimationFrame(id);
    }
  }, [isTransitionEnabled]);

  return (
    <section className="proof">
      <div className="proof__top-line"></div>

      <div className="proof__header">
        <div className="proof__badge">
          <svg
            className="proof__badge-icon"
            viewBox="0 0 24 24"
            width="13"
            height="13"
            fill="#3b82f6"
            stroke="none"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          O que dizem os nossos clientes
        </div>

        <h2 className="proof__title">
          Resultados que <em>falam por si</em>
        </h2>

        <p className="proof__subtitle">
          Prints reais de clientes reais. Sem edição, sem roteiro.
        </p>
      </div>

      <div className="proof__wrapper">
        <div
          className="proof__track"
          style={{
            transform: `translateX(-${index * (100 / cardsPerView)}%)`,
            transition: isTransitionEnabled
              ? "transform 0.55s cubic-bezier(0.22,1,0.36,1)"
              : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extended.map((item, i) => (
            <div
              className={`proof__card ${i === centerIndex ? "proof__card--active" : ""}`}
              key={`${item.src}-${i}`}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
            </div>
          ))}
        </div>

        <button
          className="proof__arrow proof__arrow--prev"
          aria-label="Anterior"
          type="button"
          onClick={handlePrev}
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <button
          className="proof__arrow proof__arrow--next"
          aria-label="Próximo"
          type="button"
          onClick={handleNext}
        >
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      <div className="proof__dots">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`proof__dot ${i === realIndex ? "proof__dot--active" : ""}`}
            aria-label={`Ir para depoimento ${i + 1}`}
            onClick={() => setIndex(total + i)}
          />
        ))}
      </div>

      <div className="proof__cta">
        <p className="proof__cta-text">Seu projeto pode ser o próximo.</p>
        <a href="#formulario" className="proof__btn">
          Quero minha landing page
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
}