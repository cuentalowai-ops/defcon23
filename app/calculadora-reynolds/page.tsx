"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  REYNOLDS_QUESTIONS,
  type Answer,
  type ReynoldsAnswers,
} from "@/lib/reynolds";
import { submitReynoldsCalculator } from "@/app/calculadora-reynolds/actions";

export default function CalculadoraReynoldsPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<ReynoldsAnswers>>({});
  const [contactInfo, setContactInfo] = useState({ email: "", company: "" });
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const totalSteps = REYNOLDS_QUESTIONS.length + 1; // +1 for contact info
  const isLastQuestion = currentStep === REYNOLDS_QUESTIONS.length;
  const progress = ((currentStep) / totalSteps) * 100;

  const currentQuestion =
    currentStep < REYNOLDS_QUESTIONS.length
      ? REYNOLDS_QUESTIONS[currentStep]
      : null;

  function handleAnswer(questionId: keyof ReynoldsAnswers, value: Answer) {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
    // Auto-advance to next question
    setTimeout(() => {
      setCurrentStep((prev) => prev + 1);
    }, 300);
  }

  function handleBack() {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  }

  async function handleSubmit() {
    if (!contactInfo.email || !contactInfo.company || !privacyConsent) {
      alert("Por favor completa todos los campos y acepta la Política de Privacidad");
      return;
    }
    setIsSubmitting(true);
    setSubmitError(null);

    const formData = new FormData();
    for (const [key, val] of Object.entries(answers)) {
      if (val) {
        formData.set(key, val as string);
      }
    }
    formData.set("email", contactInfo.email);
    formData.set("company", contactInfo.company);
    formData.set("consent", "true");

    const result = await submitReynoldsCalculator(formData);

    if ("error" in result) {
      setIsSubmitting(false);
      setSubmitError("No se pudo procesar el envío. Intenta de nuevo.");
      return;
    }

    // Encode answers + contact into query params for results page
    const params = new URLSearchParams();
    for (const [key, val] of Object.entries(answers)) {
      params.set(key, val as string);
    }
    params.set("email", contactInfo.email);
    params.set("company", contactInfo.company);

    router.push(`/calculadora-reynolds/resultados?${params.toString()}`);
  }

  return (
    <>
      <Header />
      <main id="main" className="pt-20 md:pt-24">
        <Section className="min-h-[80vh] flex items-center retro-grid">
          <Container>
            <div className="max-w-2xl mx-auto space-y-8">
              {/* Header */}
              <div className="text-center space-y-3">
                <p className="text-xs font-bold uppercase tracking-widest text-accent-cold terminal-text">
                  DIAGNÓSTICO
                </p>
                <h1 className="text-[1.5rem] md:text-[2.25rem] leading-[1.2] terminal-glow">
                  Calculadora Reynolds
                </h1>
                <p className="text-sm text-text-secondary">
                  10 preguntas · 2 minutos · Diagnóstico gratuito
                </p>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-text-subtle">
                  <span>Pregunta {Math.min(currentStep + 1, REYNOLDS_QUESTIONS.length)} de {REYNOLDS_QUESTIONS.length}</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="w-full h-1.5 bg-bg-tertiary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent-cold transition-all duration-500 ease-out rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Question or Contact Form */}
              {currentQuestion ? (
                <div className="neon-card rounded-xl p-6 md:p-8 bg-bg-secondary space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs text-accent-cold terminal-text">
                      {currentQuestion.id.toUpperCase().replace("Q", "PREGUNTA ")}
                    </span>
                    <h2 className="text-base md:text-lg font-semibold leading-relaxed">
                      {currentQuestion.question}
                    </h2>
                  </div>

                  <div className="space-y-3">
                    {currentQuestion.options.map((option) => {
                      const isSelected =
                        answers[currentQuestion.id] === option.value;
                      return (
                        <button
                          key={option.value}
                          onClick={() =>
                            handleAnswer(currentQuestion.id, option.value)
                          }
                          className={`
                            w-full text-left p-4 rounded-lg border transition-all duration-200
                            min-h-[44px] flex items-center gap-3
                            ${
                              isSelected
                                ? "border-accent-cold bg-accent-cold/10 text-text-primary"
                                : "border-border-subtle bg-bg-tertiary text-text-secondary hover:border-border-visible hover:bg-bg-tertiary/80"
                            }
                          `}
                        >
                          <span
                            className={`
                              shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs font-bold
                              ${
                                isSelected
                                  ? "border-accent-cold bg-accent-cold text-bg-primary"
                                  : "border-border-visible text-text-subtle"
                              }
                            `}
                          >
                            {option.value}
                          </span>
                          <span className="text-sm">{option.label}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Navigation */}
                  {currentStep > 0 && (
                    <button
                      onClick={handleBack}
                      className="text-sm text-text-subtle hover:text-accent-cold transition-colors"
                    >
                      &larr; Pregunta anterior
                    </button>
                  )}
                </div>
              ) : (
                /* Contact Info Step */
                <div className="neon-card rounded-xl p-6 md:p-8 bg-bg-secondary space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs text-accent-warm terminal-text-warm">
                      ÚLTIMO PASO
                    </span>
                    <h2 className="text-base md:text-lg font-semibold">
                      ¿A dónde enviamos tu informe Reynolds?
                    </h2>
                    <p className="text-sm text-text-subtle">
                      Recibirás tu Re Score, fugas críticas y recomendaciones
                      personalizadas.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm text-text-secondary"
                      >
                        Email corporativo *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={contactInfo.email}
                        onChange={(e) =>
                          setContactInfo((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                        className="w-full px-4 py-3 bg-bg-tertiary border border-border-subtle rounded-lg text-text-primary text-sm focus:border-accent-cold focus:outline-none focus:ring-1 focus:ring-accent-cold/30 transition-colors"
                        placeholder="tu@empresa.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="company"
                        className="text-sm text-text-secondary"
                      >
                        Empresa *
                      </label>
                      <input
                        id="company"
                        type="text"
                        required
                        value={contactInfo.company}
                        onChange={(e) =>
                          setContactInfo((prev) => ({
                            ...prev,
                            company: e.target.value,
                          }))
                        }
                        className="w-full px-4 py-3 bg-bg-tertiary border border-border-subtle rounded-lg text-text-primary text-sm focus:border-accent-cold focus:outline-none focus:ring-1 focus:ring-accent-cold/30 transition-colors"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>

                    {/* Privacy Consent Checkbox */}
                    <div className="flex items-start gap-3 p-4 border border-border-subtle rounded-lg">
                      <input
                        type="checkbox"
                        id="privacy-consent"
                        checked={privacyConsent}
                        onChange={(e) => setPrivacyConsent(e.target.checked)}
                        className="mt-1 w-4 h-4 rounded border-border-visible focus:ring-accent-cold focus:ring-2 accent-accent-cold cursor-pointer"
                        required
                      />
                      <label
                        htmlFor="privacy-consent"
                        className="text-xs text-text-secondary leading-relaxed cursor-pointer"
                      >
                        Acepto la{" "}
                        <a
                          href="/privacidad"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent-cold hover:underline font-semibold"
                        >
                          Política de Privacidad
                        </a>{" "}
                        y consiento el tratamiento de mis datos personales (email, empresa, respuestas) para
                        calcular mi Re Score y recibir el informe. Puedo retirar mi consentimiento en
                        cualquier momento contactando a dpo@defcon23.eu
                      </label>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleBack}
                      className="text-sm text-text-subtle hover:text-accent-cold transition-colors py-2"
                    >
                      &larr; Volver
                    </button>
                    <Button
                      onClick={handleSubmit}
                      variant="primary"
                      className={`flex-1 ${!privacyConsent || !contactInfo.email || !contactInfo.company ? 'opacity-50 cursor-not-allowed' : ''}`}
                      type="submit"
                    >
                      {isSubmitting
                        ? "Calculando Re Score..."
                        : "Calcular mi Re Score →"}
                    </Button>
                  </div>

                  {submitError && (
                    <p className="text-xs text-accent-danger text-center">
                      {submitError}
                    </p>
                  )}

                  <p className="text-xs text-text-subtle text-center">
                    🔒 Tus datos están protegidos según RGPD. No spam. Solo tu informe Reynolds.
                  </p>
                </div>
              )}

              {/* Trust indicators */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-text-subtle">
                <span>🔒 Datos cifrados</span>
                <span className="hidden sm:inline">·</span>
                <span>📊 +200 organizaciones analizadas</span>
                <span className="hidden sm:inline">·</span>
                <span>⚡ Resultado inmediato</span>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
