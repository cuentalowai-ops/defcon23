"use client";

import { useEffect, useRef, useState } from "react";

interface CalBookingProps {
  calLink?: string;
}

/**
 * CalBooking — Iframe directo a Cal.com
 * URL completa: https://www.cal.eu/defcon23/15min
 * Embed con parámetros optimizados para Next.js 16
 */
export default function CalBooking({ 
  calLink = "defcon23/15min",
}: CalBookingProps) {
  const [isLoading, setIsLoading] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Escuchar mensajes del iframe para auto-resize
    const handleMessage = (e: MessageEvent) => {
      if (!e.origin.includes("cal.eu")) return;
      
      try {
        const data = typeof e.data === "string" ? JSON.parse(e.data) : e.data;
        
        if (data?.type === "CAL:resize" && iframeRef.current && data.data?.height) {
          iframeRef.current.style.height = `${data.data.height}px`;
        }
      } catch {
        // Ignorar mensajes no JSON
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  // URL completa con todos los parámetros de embed
  const embedUrl = `https://www.cal.eu/${calLink}?embed=true&theme=dark&layout=month_view`;

  return (
    <div className="relative w-full min-h-[700px] rounded-2xl overflow-hidden bg-[#0A0A0A]">
      {/* Loading spinner */}
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10">
          <div className="w-8 h-8 border-2 border-[#FF9966]/30 border-t-[#FF9966] rounded-full animate-spin" />
          <p className="text-xs text-gray-400 font-mono">Cargando calendario...</p>
        </div>
      )}
      
      {/* Cal.com iframe */}
      <iframe
        ref={iframeRef}
        src={embedUrl}
        title="Agenda tu consulta con defcon23"
        className="w-full border-0 rounded-2xl"
        style={{
          minHeight: "700px",
          height: "700px",
          background: "#0A0A0A",
          opacity: isLoading ? 0 : 1,
          transition: "opacity 0.3s ease",
        }}
        loading="eager"
        onLoad={() => setIsLoading(false)}
        allow="payment"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
      />
    </div>
  );
}
