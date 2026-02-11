import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Link from "next/link";

export const metadata = {
  title: "Política de Privacidad",
  description:
    "Política de Privacidad de defcon23.eu conforme al RGPD (UE 2016/679) y LOPDGDD. Información sobre el tratamiento de datos personales, derechos ARCO y seguridad.",
};

export default function PrivacidadPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20 md:pt-24">
        <Section className="bg-bg-primary">
          <Container>
            <div className="max-w-4xl mx-auto space-y-10 md:space-y-12">
              {/* Header */}
              <div className="space-y-4">
                <p className="text-xs font-bold uppercase tracking-widest text-accent-cold terminal-text">
                  LEGAL
                </p>
                <h1 className="text-[2rem] md:text-[3rem] leading-[1.1] terminal-glow">
                  Política de Privacidad
                </h1>
                <p className="text-sm text-text-subtle">
                  Última actualización: 11 de febrero de 2026 · Versión 1.0
                </p>
              </div>

              {/* Content */}
              <div className="prose prose-invert prose-sm md:prose-base max-w-none space-y-8">
                <p className="text-text-secondary leading-relaxed">
                  De conformidad con el <strong>Reglamento (UE) 2016/679</strong> del Parlamento
                  Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las
                  personas físicas en lo que respecta al tratamiento de datos personales (RGPD), y
                  la <strong>Ley Orgánica 3/2018</strong>, de 5 de diciembre, de Protección de
                  Datos Personales y garantía de los derechos digitales (LOPDGDD), le informamos
                  sobre el tratamiento de sus datos personales.
                </p>

                {/* Table of Contents */}
                <div className="neon-card rounded-lg p-6 bg-bg-secondary space-y-3">
                  <h2 className="text-lg font-semibold text-accent-cold">Índice</h2>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="#responsable" className="text-accent-cold hover:underline">
                        1. Responsable del Tratamiento
                      </a>
                    </li>
                    <li>
                      <a href="#dpo" className="text-accent-cold hover:underline">
                        2. Delegado de Protección de Datos (DPO)
                      </a>
                    </li>
                    <li>
                      <a href="#datos" className="text-accent-cold hover:underline">
                        3. Datos Personales que Recopilamos
                      </a>
                    </li>
                    <li>
                      <a href="#destinatarios" className="text-accent-cold hover:underline">
                        4. Destinatarios de sus Datos
                      </a>
                    </li>
                    <li>
                      <a href="#derechos" className="text-accent-cold hover:underline">
                        5. Sus Derechos
                      </a>
                    </li>
                    <li>
                      <a href="#ejercer" className="text-accent-cold hover:underline">
                        6. Cómo Ejercer sus Derechos
                      </a>
                    </li>
                    <li>
                      <a href="#reclamacion" className="text-accent-cold hover:underline">
                        7. Reclamación ante la AEPD
                      </a>
                    </li>
                    <li>
                      <a href="#seguridad" className="text-accent-cold hover:underline">
                        8. Seguridad de sus Datos
                      </a>
                    </li>
                    <li>
                      <a href="#cookies" className="text-accent-cold hover:underline">
                        11. Cookies y Tecnologías Similares
                      </a>
                    </li>
                    <li>
                      <a href="#contacto" className="text-accent-cold hover:underline">
                        15. Contacto
                      </a>
                    </li>
                  </ul>
                </div>

                {/* 1. Responsable */}
                <div id="responsable" className="space-y-3 scroll-mt-24">
                  <h2 className="text-xl md:text-2xl font-bold text-accent-warm terminal-text-warm">
                    1. Responsable del Tratamiento
                  </h2>
                  <div className="neon-card rounded-lg p-5 bg-bg-secondary space-y-2 text-sm">
                    <p>
                      <strong>Identidad:</strong> dEfCØN23
                    </p>
                    <p>
                      <strong>Email de contacto:</strong>{" "}
                      <a
                        href="mailto:dpo@defcon23.eu"
                        className="text-accent-cold hover:underline"
                      >
                        dpo@defcon23.eu
                      </a>
                    </p>
                    <p>
                      <strong>Website:</strong>{" "}
                      <a href="https://defcon23.eu" className="text-accent-cold hover:underline">
                        https://defcon23.eu
                      </a>
                    </p>
                  </div>
                </div>

                {/* 2. DPO */}
                <div id="dpo" className="space-y-3 scroll-mt-24">
                  <h2 className="text-xl md:text-2xl font-bold text-accent-warm terminal-text-warm">
                    2. Delegado de Protección de Datos (DPO)
                  </h2>
                  <p className="text-text-secondary">
                    <strong>Email:</strong>{" "}
                    <a href="mailto:dpo@defcon23.eu" className="text-accent-cold hover:underline">
                      dpo@defcon23.eu
                    </a>
                  </p>
                  <p className="text-text-secondary">
                    <strong>Función:</strong> Supervisar el cumplimiento del RGPD y atender sus
                    solicitudes relacionadas con la protección de datos personales.
                  </p>
                </div>

                {/* 3. Datos que recopilamos */}
                <div id="datos" className="space-y-4 scroll-mt-24">
                  <h2 className="text-xl md:text-2xl font-bold text-accent-warm terminal-text-warm">
                    3. Datos Personales que Recopilamos
                  </h2>

                  <div className="space-y-4">
                    <div className="neon-card rounded-lg p-5 bg-bg-secondary space-y-3">
                      <h3 className="text-base font-semibold text-accent-cold">
                        3.1 Calculadora Reynolds (Lead Magnet)
                      </h3>
                      <p className="text-sm text-text-secondary">
                        <strong>Datos recopilados:</strong> Email corporativo, nombre de la empresa,
                        respuestas al cuestionario de 10 preguntas sobre su organización.
                      </p>
                      <p className="text-sm text-text-secondary">
                        <strong>Finalidad:</strong> Calcular su Número de Reynolds organizativo (Re
                        Score), enviarle el informe de resultados personalizado, gestionar su
                        solicitud de información sobre nuestros servicios (lead generation).
                      </p>
                      <p className="text-sm text-text-secondary">
                        <strong>Base legal:</strong> Consentimiento (Art. 6.1.a RGPD). Al marcar la
                        casilla de aceptación de esta Política de Privacidad y enviar el formulario,
                        usted consiente expresamente el tratamiento de sus datos.
                      </p>
                      <p className="text-sm text-text-secondary">
                        <strong>Conservación:</strong> 2 años desde la última interacción si no se
                        convierte en cliente. Eliminación automática transcurrido el plazo. Puede
                        solicitar la supresión anticipada en cualquier momento.
                      </p>
                    </div>

                    <div className="neon-card rounded-lg p-5 bg-bg-secondary space-y-3">
                      <h3 className="text-base font-semibold text-accent-cold">
                        3.2 Contratación de Servicios
                      </h3>
                      <p className="text-sm text-text-secondary">
                        <strong>Datos recopilados:</strong> Nombre, email, teléfono, empresa,
                        NIF/CIF, datos bancarios (si domiciliación), datos de facturación.
                      </p>
                      <p className="text-sm text-text-secondary">
                        <strong>Finalidad:</strong> Prestación de servicios de auditoría y
                        consultoría de ciberseguridad, gestión contractual, facturación.
                      </p>
                      <p className="text-sm text-text-secondary">
                        <strong>Base legal:</strong> Ejecución de contrato (Art. 6.1.b RGPD) +
                        Obligación legal (Art. 6.1.c RGPD — conservación fiscal).
                      </p>
                      <p className="text-sm text-text-secondary">
                        <strong>Conservación:</strong> Duración del contrato + 6 años (obligación
                        fiscal Ley General Tributaria).
                      </p>
                    </div>

                    <div className="neon-card rounded-lg p-5 bg-bg-secondary space-y-3">
                      <h3 className="text-base font-semibold text-accent-cold">
                        3.3 Dirección IP y Datos de Navegación
                      </h3>
                      <p className="text-sm text-text-secondary">
                        <strong>Datos recopilados automáticamente:</strong> Dirección IP, fecha y
                        hora de acceso, páginas visitadas, tipo de navegador y dispositivo.
                      </p>
                      <p className="text-sm text-text-secondary">
                        <strong>Finalidad:</strong> Seguridad de la información (detección de
                        ataques, prevención de fraude), analítica web agregada y anónima (Plausible
                        Analytics).
                      </p>
                      <p className="text-sm text-text-secondary">
                        <strong>Base legal:</strong> Interés legítimo (Art. 6.1.f RGPD).
                      </p>
                      <p className="text-sm text-text-secondary">
                        <strong>Conservación:</strong> 90 días en logs de seguridad. Datos
                        analíticos agregados: conservación indefinida (anonimizados).
                      </p>
                    </div>
                  </div>
                </div>

                {/* 4. Destinatarios */}
                <div id="destinatarios" className="space-y-3 scroll-mt-24">
                  <h2 className="text-xl md:text-2xl font-bold text-accent-warm terminal-text-warm">
                    4. Destinatarios de sus Datos (Encargados de Tratamiento)
                  </h2>
                  <p className="text-text-secondary">
                    Sus datos personales pueden ser comunicados a los siguientes prestadores de
                    servicios (encargados de tratamiento según Art. 28 RGPD), con los que tenemos
                    firmados Acuerdos de Tratamiento de Datos (DPAs):
                  </p>
                  <div className="neon-card rounded-lg p-5 bg-bg-secondary overflow-x-auto">
                    <table className="w-full text-sm text-left">
                      <thead className="text-xs text-accent-cold uppercase border-b border-border-subtle">
                        <tr>
                          <th className="py-2 px-3">Encargado</th>
                          <th className="py-2 px-3">Servicio</th>
                          <th className="py-2 px-3">Ubicación</th>
                        </tr>
                      </thead>
                      <tbody className="text-text-secondary">
                        <tr className="border-b border-border-subtle">
                          <td className="py-3 px-3 font-semibold">Vercel Inc.</td>
                          <td className="py-3 px-3">Hosting + Base de datos</td>
                          <td className="py-3 px-3">UE (Frankfurt)</td>
                        </tr>
                        <tr className="border-b border-border-subtle">
                          <td className="py-3 px-3 font-semibold">Resend Labs</td>
                          <td className="py-3 px-3">Emails transaccionales</td>
                          <td className="py-3 px-3">UE</td>
                        </tr>
                        <tr className="border-b border-border-subtle">
                          <td className="py-3 px-3 font-semibold">Cal.com</td>
                          <td className="py-3 px-3">Reservas de citas</td>
                          <td className="py-3 px-3">UE</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-3 font-semibold">Notion Labs</td>
                          <td className="py-3 px-3">CRM interno</td>
                          <td className="py-3 px-3">UE / EE.UU. (EU-US DPF)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-text-subtle">
                    <strong>NO COMPARTIMOS</strong> sus datos con terceros con fines publicitarios o
                    comerciales.
                  </p>
                </div>

                {/* 5. Derechos */}
                <div id="derechos" className="space-y-4 scroll-mt-24">
                  <h2 className="text-xl md:text-2xl font-bold text-accent-warm terminal-text-warm">
                    5. Sus Derechos
                  </h2>
                  <p className="text-text-secondary">
                    De conformidad con el RGPD, usted tiene derecho a:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="neon-card rounded-lg p-4 bg-bg-secondary space-y-2">
                      <h3 className="text-sm font-semibold text-accent-cold">
                        📄 Acceso (Art. 15)
                      </h3>
                      <p className="text-xs text-text-secondary">
                        Obtener confirmación de si tratamos sus datos y acceder a ellos.
                      </p>
                    </div>
                    <div className="neon-card rounded-lg p-4 bg-bg-secondary space-y-2">
                      <h3 className="text-sm font-semibold text-accent-cold">
                        ✏️ Rectificación (Art. 16)
                      </h3>
                      <p className="text-xs text-text-secondary">
                        Corregir datos inexactos o incompletos.
                      </p>
                    </div>
                    <div className="neon-card rounded-lg p-4 bg-bg-secondary space-y-2">
                      <h3 className="text-sm font-semibold text-accent-cold">
                        🗑️ Supresión (Art. 17)
                      </h3>
                      <p className="text-xs text-text-secondary">
                        Solicitar el borrado de sus datos personales.
                      </p>
                    </div>
                    <div className="neon-card rounded-lg p-4 bg-bg-secondary space-y-2">
                      <h3 className="text-sm font-semibold text-accent-cold">
                        📦 Portabilidad (Art. 20)
                      </h3>
                      <p className="text-xs text-text-secondary">
                        Recibir sus datos en formato machine-readable (CSV, JSON).
                      </p>
                    </div>
                    <div className="neon-card rounded-lg p-4 bg-bg-secondary space-y-2">
                      <h3 className="text-sm font-semibold text-accent-cold">
                        ⛔ Oposición (Art. 21)
                      </h3>
                      <p className="text-xs text-text-secondary">
                        Oponerse al tratamiento basado en interés legítimo.
                      </p>
                    </div>
                    <div className="neon-card rounded-lg p-4 bg-bg-secondary space-y-2">
                      <h3 className="text-sm font-semibold text-accent-cold">
                        🔓 Retirar consentimiento
                      </h3>
                      <p className="text-xs text-text-secondary">
                        Retirar el consentimiento en cualquier momento.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 6. Ejercer derechos */}
                <div id="ejercer" className="space-y-3 scroll-mt-24">
                  <h2 className="text-xl md:text-2xl font-bold text-accent-warm terminal-text-warm">
                    6. Cómo Ejercer sus Derechos
                  </h2>
                  <div className="neon-card rounded-lg p-5 bg-bg-secondary space-y-3">
                    <p className="text-sm text-text-secondary">
                      <strong>Email:</strong>{" "}
                      <a
                        href="mailto:dpo@defcon23.eu"
                        className="text-accent-cold hover:underline"
                      >
                        dpo@defcon23.eu
                      </a>
                    </p>
                    <p className="text-sm text-text-secondary">
                      <strong>Asunto:</strong> Ejercicio de Derechos RGPD — [ACCESO / RECTIFICACIÓN
                      / SUPRESIÓN / etc.]
                    </p>
                    <p className="text-sm text-text-secondary">
                      <strong>Incluya:</strong> Nombre completo, email asociado a sus datos, derecho
                      que desea ejercer, copia de su DNI/NIE/Pasaporte (para verificar identidad).
                    </p>
                    <p className="text-sm text-accent-warm font-semibold">
                      Plazo de respuesta: 1 mes desde la recepción de su solicitud.
                    </p>
                  </div>
                </div>

                {/* 7. Reclamación AEPD */}
                <div id="reclamacion" className="space-y-3 scroll-mt-24">
                  <h2 className="text-xl md:text-2xl font-bold text-accent-warm terminal-text-warm">
                    7. Reclamación ante la Autoridad de Control
                  </h2>
                  <p className="text-text-secondary">
                    Si considera que el tratamiento de sus datos personales vulnera el RGPD, puede
                    presentar una reclamación ante:
                  </p>
                  <div className="neon-card rounded-lg p-5 bg-bg-secondary space-y-2 text-sm">
                    <p>
                      <strong>AEPD (Agencia Española de Protección de Datos)</strong>
                    </p>
                    <p>C/ Jorge Juan, 6 · 28001 Madrid</p>
                    <p>
                      <strong>Website:</strong>{" "}
                      <a
                        href="https://www.aepd.es"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-cold hover:underline"
                      >
                        www.aepd.es
                      </a>
                    </p>
                    <p>
                      <strong>Teléfono:</strong> 901 100 099
                    </p>
                  </div>
                </div>

                {/* 8. Seguridad */}
                <div id="seguridad" className="space-y-3 scroll-mt-24">
                  <h2 className="text-xl md:text-2xl font-bold text-accent-warm terminal-text-warm">
                    8. Seguridad de sus Datos
                  </h2>
                  <p className="text-text-secondary">
                    Aplicamos medidas técnicas y organizativas conforme al Art. 32 RGPD:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="neon-card rounded-lg p-4 bg-bg-secondary space-y-2">
                      <h3 className="text-sm font-semibold text-accent-cold">
                        🔒 Cifrado TLS 1.3
                      </h3>
                      <p className="text-xs text-text-secondary">
                        Todas las comunicaciones cifradas.
                      </p>
                    </div>
                    <div className="neon-card rounded-lg p-4 bg-bg-secondary space-y-2">
                      <h3 className="text-sm font-semibold text-accent-cold">
                        💾 Cifrado at-rest
                      </h3>
                      <p className="text-xs text-text-secondary">
                        Base de datos cifrada (Vercel Postgres).
                      </p>
                    </div>
                    <div className="neon-card rounded-lg p-4 bg-bg-secondary space-y-2">
                      <h3 className="text-sm font-semibold text-accent-cold">
                        🔑 Control de acceso
                      </h3>
                      <p className="text-xs text-text-secondary">
                        MFA obligatorio para cuentas admin.
                      </p>
                    </div>
                    <div className="neon-card rounded-lg p-4 bg-bg-secondary space-y-2">
                      <h3 className="text-sm font-semibold text-accent-cold">📋 Audit logging</h3>
                      <p className="text-xs text-text-secondary">
                        Trazabilidad de accesos a datos.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 11. Cookies */}
                <div id="cookies" className="space-y-3 scroll-mt-24">
                  <h2 className="text-xl md:text-2xl font-bold text-accent-warm terminal-text-warm">
                    11. Cookies y Tecnologías Similares
                  </h2>
                  <p className="text-text-secondary">
                    Utilizamos <strong>Plausible Analytics</strong> para medir el tráfico web de
                    forma anónima y agregada. Plausible:
                  </p>
                  <ul className="space-y-2 text-sm text-text-secondary list-disc list-inside">
                    <li>✅ NO usa cookies</li>
                    <li>✅ NO rastrea usuarios entre sitios web</li>
                    <li>✅ Es 100% RGPD-compliant</li>
                    <li>✅ Datos alojados en la Unión Europea</li>
                  </ul>
                  <p className="text-sm text-text-subtle">
                    <strong>NO utilizamos:</strong> Cookies publicitarias, cookies de seguimiento
                    cross-site, cookies de redes sociales (Facebook Pixel, Google Ads, etc.).
                  </p>
                </div>

                {/* 15. Contacto */}
                <div id="contacto" className="space-y-3 scroll-mt-24">
                  <h2 className="text-xl md:text-2xl font-bold text-accent-warm terminal-text-warm">
                    15. Contacto
                  </h2>
                  <p className="text-text-secondary">
                    Para cualquier consulta relacionada con esta Política de Privacidad o el
                    tratamiento de sus datos personales:
                  </p>
                  <div className="neon-card rounded-lg p-5 bg-bg-secondary space-y-2 text-sm">
                    <p>
                      <strong>Email del DPO:</strong>{" "}
                      <a
                        href="mailto:dpo@defcon23.eu"
                        className="text-accent-cold hover:underline"
                      >
                        dpo@defcon23.eu
                      </a>
                    </p>
                    <p>
                      <strong>Email general:</strong>{" "}
                      <a
                        href="mailto:intel@defcon23.eu"
                        className="text-accent-cold hover:underline"
                      >
                        intel@defcon23.eu
                      </a>
                    </p>
                    <p>
                      <strong>Website:</strong>{" "}
                      <a href="https://defcon23.eu" className="text-accent-cold hover:underline">
                        https://defcon23.eu
                      </a>
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="border-t border-border-subtle pt-6 space-y-3">
                  <p className="text-xs text-text-subtle">
                    <strong>Fecha de última actualización:</strong> 11 de febrero de 2026
                  </p>
                  <p className="text-xs text-text-subtle">
                    <strong>Versión:</strong> 1.0
                  </p>
                  <p className="text-xs text-text-subtle">
                    Le recomendamos revisar periódicamente esta Política de Privacidad.
                    Notificaremos cualquier cambio sustancial por email.
                  </p>
                </div>

                {/* CTA */}
                <div className="neon-card rounded-lg p-6 bg-bg-secondary text-center space-y-4">
                  <h3 className="text-base font-semibold text-accent-warm">
                    ¿Tienes dudas sobre tus datos?
                  </h3>
                  <p className="text-sm text-text-secondary">
                    Contacta con nuestro Delegado de Protección de Datos (DPO)
                  </p>
                  <Link
                    href="mailto:dpo@defcon23.eu"
                    className="inline-block px-6 py-3 rounded-lg bg-accent-cold text-bg-primary font-semibold text-sm hover:scale-105 active:scale-95 transition-all"
                  >
                    Contactar DPO →
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
