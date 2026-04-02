import { useState } from "react";

export default function FormSection() {
  const [form, setForm] = useState({
    nome: "",
    whatsapp: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    nome: false,
    whatsapp: false,
    email: false,
  });

  const [sending, setSending] = useState(false);

  function formatPhone(value) {
    const v = value.replace(/\D/g, "").slice(0, 11);

    if (v.length <= 2) return v ? `(${v}` : "";
    if (v.length <= 7) return `(${v.slice(0, 2)}) ${v.slice(2)}`;
    return `(${v.slice(0, 2)}) ${v.slice(2, 7)}-${v.slice(7)}`;
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: name === "whatsapp" ? formatPhone(value) : value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: false,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {
      nome: !form.nome.trim(),
      whatsapp: !form.whatsapp.trim(),
      email: !form.email.trim(),
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some(Boolean)) return;

    setSending(true);

    try {
      const formData = new FormData();
      formData.append("_subject", "Novo lead — Landing Page");
      formData.append("nome", form.nome);
      formData.append("whatsapp", form.whatsapp);
      formData.append("email", form.email);

      const response = await fetch("https://formspree.io/f/mqeynrqz", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        window.location.href = "https://ascendaweb.com/obrigado-calendly/";
        return;
      }

      setSending(false);
      alert("Ocorreu um erro. Tente novamente.");
    } catch {
      setSending(false);
      alert("Ocorreu um erro. Verifique sua conexão e tente novamente.");
    }
  }

  return (
    <section className="form-section" id="formulario">
      <div className="form-section__top-line"></div>

      <div className="form-section__header">
        <div className="form-section__badge">
          <svg
            className="form-section__badge-icon"
            viewBox="0 0 24 24"
            width="13"
            height="13"
            fill="#3b82f6"
            stroke="none"
          >
            <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Agende sua consultoria
        </div>

        <h2 className="form-section__title">
          Vamos conversar sobre
          <br />
          o seu <em>projeto.</em>
        </h2>

        <p className="form-section__subtitle">
          Preencha o formulário abaixo e agende uma consultoria gratuita. Analisamos seu negócio e mostramos como podemos aumentar sua conversão.
        </p>
      </div>

      <div className="form-section__wrapper">
        <form className="form-body" id="formBody" onSubmit={handleSubmit} noValidate>
          <input type="hidden" name="_subject" value="Novo lead — Landing Page" />

          <div className="form-step__header">
            <h3 className="form-step__title">Conta um pouco sobre você</h3>
            <p className="form-step__desc">
              Precisamos de algumas informações básicas para entrar em contato.
            </p>
          </div>

          <div className="form-fields">
            <div className="form-field">
              <label className="form-label" htmlFor="campo-nome">
                Nome completo
              </label>
              <input
                className={`form-input ${errors.nome ? "form-input--error" : ""}`}
                type="text"
                id="campo-nome"
                name="nome"
                placeholder="Seu nome"
                autoComplete="name"
                value={form.nome}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field">
              <label className="form-label" htmlFor="campo-whatsapp">
                WhatsApp
              </label>
              <input
                className={`form-input ${errors.whatsapp ? "form-input--error" : ""}`}
                type="tel"
                id="campo-whatsapp"
                name="whatsapp"
                placeholder="(00) 00000-0000"
                autoComplete="tel"
                inputMode="numeric"
                maxLength="15"
                value={form.whatsapp}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field">
              <label className="form-label" htmlFor="campo-email">
                E-mail
              </label>
              <input
                className={`form-input ${errors.email ? "form-input--error" : ""}`}
                type="email"
                id="campo-email"
                name="email"
                placeholder="seu@email.com"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <button type="submit" className="form-btn-next" id="btnSubmit" disabled={sending}>
            {sending ? "Enviando..." : "Agendar minha consultoria gratuita"}
            {!sending && (
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
            )}
          </button>
        </form>
      </div>
    </section>
  );
}