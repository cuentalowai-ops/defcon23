"use client";

import { useEffect } from "react";

interface CalBookingProps {
  calLink: string;
  calOrigin?: string;
  config?: {
    theme?: "light" | "dark";
    layout?: "month_view" | "column_view";
    hideEventTypeDetails?: boolean;
  };
  cssVarsPerTheme?: {
    dark?: Record<string, string>;
    light?: Record<string, string>;
  };
}

export default function CalBooking({ 
  calLink,
  calOrigin = "https://cal.eu",
  config = { theme: "dark", layout: "month_view" },
  cssVarsPerTheme,
}: CalBookingProps) {
  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement("script");
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Initialize Cal after script loads
    script.onload = () => {
      if (typeof window !== "undefined" && (window as any).Cal) {
        const Cal = (window as any).Cal;
        
        // Init with origin
        Cal("init", { origin: calOrigin });

        // Configure UI if cssVarsPerTheme provided
        if (cssVarsPerTheme) {
          Cal("ui", {
            theme: config.theme || "dark",
            cssVarsPerTheme: cssVarsPerTheme,
            hideEventTypeDetails: config.hideEventTypeDetails ?? false,
            layout: config.layout || "month_view",
          });
        }

        // Render inline embed
        Cal("inline", {
          elementOrSelector: "#cal-booking-embed",
          calLink: calLink,
          config: config,
        });
      }
    };

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://app.cal.com/embed/embed.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, [calLink, calOrigin, config, cssVarsPerTheme]);

  return (
    <div
      id="cal-booking-embed"
      className="w-full min-h-[600px] rounded-2xl overflow-hidden"
      style={{ 
        border: "1px solid rgba(255, 153, 102, 0.2)",
        background: "rgba(10, 10, 10, 0.8)",
      }}
    />
  );
}
