"use client";

import { useEffect, useRef, useState } from "react";

interface CalBookingProps {
  calLink: string;
  config?: {
    theme?: "light" | "dark";
    layout?: "month_view" | "column_view";
    hideEventTypeDetails?: boolean;
  };
}

/**
 * CalBooking — Inline Cal.com embed via iframe
 * Uses direct iframe approach for maximum compatibility with Next.js 16
 * Avoids embed.js hydration issues entirely
 * Theme: Paleta C (coral #FF9966, teal #3A9B9B) via CSS variables
 */
export default function CalBooking({
  calLink,
  config = { theme: "dark", layout: "month_view" },
}: CalBookingProps) {
  const [loaded, setLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Build Cal.com URL with theme params
  const calUrl = new URL(`https://cal.com/${calLink}`);
  calUrl.searchParams.set("embed", "true");
  calUrl.searchParams.set("theme", config.theme || "dark");
  calUrl.searchParams.set("layout", config.layout || "month_view");
  if (config.hideEventTypeDetails) {
    calUrl.searchParams.set("hideEventTypeDetails", "true");
  }
  // Inject CSS variables for theming
  const cssVars = [
    "cal-brand:#FF9966",
    "cal-text:#F9FAFB",
    "cal-text-emphasis:#FFFFFF",
    "cal-text-subtle:#A0A0A0",
    "cal-border:rgba(255,153,102,0.2)",
    "cal-border-emphasis:rgba(58,155,155,0.4)",
    "cal-border-subtle:#333333",
    "cal-bg:#0A0A0A",
    "cal-bg-emphasis:#1A1A1A",
    "cal-bg-subtle:#141414",
    "cal-brand-text:#0A0A0A",
  ];
  calUrl.searchParams.set("cssVarsPerTheme", JSON.stringify({ dark: Object.fromEntries(cssVars.map(v => { const [k, val] = v.split(":"); return [k, val]; })) }));

  // Handle iframe auto-resize via postMessage
  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.origin !== "https://cal.com") return;
      
      try {
        const data = typeof e.data === "string" ? JSON.parse(e.data) : e.data;
        
        // Cal.com sends resize messages
        if (data?.type === "CAL:resize" && iframeRef.current && data.data?.height) {
          iframeRef.current.style.height = `${data.data.height}px`;
        }
        
        // Cal.com sends navigation messages  
        if (data?.type === "__routeChanged" && iframeRef.current && data.data?.height) {
          iframeRef.current.style.height = `${data.data.height}px`;
        }
      } catch {
        // Ignore non-JSON messages
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div className="relative w-full min-h-[500px] rounded-2xl overflow-hidden border border-coral/20 bg-bg-primary">
      {/* Loading state */}
      {!loaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10 bg-bg-primary">
          <div className="w-8 h-8 border-2 border-coral/30 border-t-coral rounded-full animate-spin" />
          <p className="text-xs text-text-subtle terminal-text">Cargando calendario...</p>
        </div>
      )}
      
      <iframe
        ref={iframeRef}
        src={calUrl.toString()}
        title="Agenda tu consulta — Cal.com"
        className="w-full border-0 rounded-2xl"
        style={{
          minHeight: "700px",
          height: "700px",
          colorScheme: "dark",
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        allow="camera;microphone"
        sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-top-navigation-by-user-activation"
      />
    </div>
  );
}
