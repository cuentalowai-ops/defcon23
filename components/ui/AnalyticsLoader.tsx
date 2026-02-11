"use client";

import { useEffect } from "react";

const CONSENT_KEY = "ens-analytics-consent";
const PLAUSIBLE_SRC = "https://plausible.io/js/script.js";
const DATA_DOMAIN = "defcon23.eu";

export default function AnalyticsLoader() {
  useEffect(() => {
    function ensurePlausibleLoaded() {
      const consent = window.localStorage.getItem(CONSENT_KEY);
      if (consent !== "granted") return;

      const existing = document.querySelector(`script[src="${PLAUSIBLE_SRC}"]`);
      if (existing) return;

      const script = document.createElement("script");
      script.defer = true;
      script.setAttribute("data-domain", DATA_DOMAIN);
      script.src = PLAUSIBLE_SRC;
      document.head.appendChild(script);
    }

    ensurePlausibleLoaded();
    const handler = () => ensurePlausibleLoaded();
    window.addEventListener("ens-consent-updated", handler);
    return () => window.removeEventListener("ens-consent-updated", handler);
  }, []);

  return null;
}
