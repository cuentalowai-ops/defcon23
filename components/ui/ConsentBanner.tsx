"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const CONSENT_KEY = "ens-analytics-consent";

type ConsentState = "granted" | "denied" | "unset";

export default function ConsentBanner() {
  const [consent, setConsent] = useState<ConsentState>("unset");

  useEffect(() => {
    const saved = window.localStorage.getItem(CONSENT_KEY) as ConsentState | null;
    setConsent(saved ?? "unset");
  }, []);

  function updateConsent(value: Exclude<ConsentState, "unset">) {
    window.localStorage.setItem(CONSENT_KEY, value);
    setConsent(value);
    window.dispatchEvent(new Event("ens-consent-updated"));
  }

  if (consent !== "unset") {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border-subtle bg-bg-primary/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-5 md:px-12 lg:px-20 py-4 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div className="space-y-1 text-sm text-text-secondary">
          <p className="text-text-primary font-semibold">Consentimiento ENS</p>
          <p>
            Usamos Plausible Analytics sin cookies para métricas agregadas. Puedes
            aceptar analítica o continuar solo con cookies necesarias.
          </p>
          <p>
            Consulta la <Link href="/privacidad" className="text-accent-cold hover:underline">Política de Privacidad</Link>.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => updateConsent("denied")}
            className="text-xs px-4 py-2 rounded-lg border border-border-subtle text-text-secondary hover:text-text-primary hover:border-accent-cold/40 transition-colors"
          >
            Solo necesarias
          </button>
          <button
            onClick={() => updateConsent("granted")}
            className="text-xs px-4 py-2 rounded-lg bg-accent-cold text-bg-primary font-semibold hover:scale-105 active:scale-95 transition-transform"
          >
            Aceptar analítica
          </button>
        </div>
      </div>
    </div>
  );
}
