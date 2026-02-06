"use client";

import { useState } from "react";
import PageLayout from "@/components/layout/PageLayout";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

const budgetRanges = [
  "€100 — €500",
  "€500 — €1,000",
  "€1,000 — €3,000",
  "€3,000 — €8,500",
  "€8,500 — €15,000",
  "€15,000 — €50,000",
  "> €50,000",
];

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    reynolds: "",
    message: "",
    budget: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to an API
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-bg-tertiary border border-border-subtle rounded-lg px-4 py-3 text-text-primary text-sm focus:outline-none focus:border-accent-cold transition-colors placeholder:text-text-subtle";

  return (
    <PageLayout>
      <Section>
        <Container>
          <div className="max-w-3xl space-y-6">
            <p className="text-sm text-accent-cold font-[family-name:var(--font-source-code-pro)] uppercase tracking-wider">
              Cøntactø
            </p>
            <h1 className="text-[2rem] md:text-[3.5rem] leading-[1.1]">
              Iniciar Prøtøcølø
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              Cønsulta inicial: <span className="text-accent-success font-semibold">15 minutøs gratuitos</span>.
              Handshake + evaluación de tu prøblema. Decidimøs juntos si
              tiene sentidø trabajar.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-bg-secondary retro-grid">
        <Container>
          <div className="max-w-xl mx-auto">
            {submitted ? (
              <div className="text-center space-y-6 py-16">
                <div className="w-16 h-16 mx-auto rounded-full bg-accent-success/20 flex items-center justify-center">
                  <span className="text-accent-success text-2xl">
                    &#10003;
                  </span>
                </div>
                <h2 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2]">
                  Prøtøcølø Iniciadø
                </h2>
                <p className="text-text-secondary">
                  Tu sølicitud ha sidø recibida. Respuesta en &lt; 24h
                  labørables.
                </p>
                <p className="text-sm font-[family-name:var(--font-source-code-pro)] text-text-subtle">
                  Ref: DC23-{Date.now().toString(36).toUpperCase()}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm text-text-secondary"
                  >
                    Nømbre *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nømbre cømpletø"
                    className={inputClass}
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm text-text-secondary"
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@empresa.com"
                    className={inputClass}
                  />
                </div>

                {/* Company */}
                <div className="space-y-2">
                  <label
                    htmlFor="company"
                    className="block text-sm text-text-secondary"
                  >
                    Empresa
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Nømbre de la empresa"
                    className={inputClass}
                  />
                </div>

                {/* Reynolds estimate */}
                <div className="space-y-2">
                  <label
                    htmlFor="reynolds"
                    className="block text-sm text-text-secondary"
                  >
                    Númerø de Reynølds estimadø
                  </label>
                  <input
                    id="reynolds"
                    name="reynolds"
                    type="text"
                    value={formData.reynolds}
                    onChange={handleChange}
                    placeholder="Si lø has calculadø cøn nuestra herramienta"
                    className={inputClass}
                  />
                  <p className="text-xs text-text-subtle">
                    Nø lø sabes?{" "}
                    <a
                      href="/protocol"
                      className="text-accent-cold hover:underline"
                    >
                      Calcúlalø aquí
                    </a>
                  </p>
                </div>

                {/* Budget */}
                <div className="space-y-2">
                  <label
                    htmlFor="budget"
                    className="block text-sm text-text-secondary"
                  >
                    Rangø de presupuestø
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Selecciønar rangø</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm text-text-secondary"
                  >
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe brevemente tu situación y qué necesitas..."
                    className={inputClass}
                  />
                </div>

                <Button type="submit" variant="primary" className="w-full">
                  Enviar Sølicitud
                </Button>

                <p className="text-xs text-text-subtle text-center">
                  Al enviar, aceptas que tus datøs serán tratadøs cønførme al
                  RGPD. Nø cømpartimøs inførmación cøn tercerøs.
                </p>
              </form>
            )}
          </div>
        </Container>
      </Section>

      {/* Contact info */}
      <Section>
        <Container>
          <div className="max-w-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <p className="text-xs text-text-subtle uppercase tracking-wider">
                Email
              </p>
              <a
                href="mailto:intel@defcon23.eu"
                className="text-accent-cold hover:underline text-sm"
              >
                intel@defcon23.eu
              </a>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-text-subtle uppercase tracking-wider">
                Base
              </p>
              <p className="text-sm text-text-secondary">
                Madrid | Operación: Global
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-text-subtle uppercase tracking-wider">
                Cønsulta inicial
              </p>
              <p className="text-sm font-[family-name:var(--font-source-code-pro)] text-accent-success">
                15 min | Gratis
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
