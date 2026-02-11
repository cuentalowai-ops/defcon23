import PageLayout from "@/components/layout/PageLayout";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Link from "next/link";

export const metadata = {
  title: "Política de Privacidad | defcon23.eu",
  description: "Política de privacidad conforme GDPR - Protección de datos personales",
};

export default function PoliticaPrivacidadPage() {
  return (
    <PageLayout>
      <Section className="bg-bg-primary pt-32 md:pt-40 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-invert prose-sm md:prose-base max-w-none space-y-8 text-text-secondary">
              {/* Header */}
              <header className="space-y-3 border-b border-border-subtle pb-6">
                <h1 className="text-3xl md:text-4xl font-bold text-text-primary terminal-glow mb-0">
                  Política de Privacidad
                </h1>
                <p className="text-sm text-text-subtle">
                  <strong>defcon23.eu</strong> | Última actualización: 13 de febrero de 2026 | Versión 1.1
                </p>
              </header>

              {/* 1. Responsable */}
              <section>
                <h2 className="text-2xl font-semibold text-accent-cold">1. Responsable del Tratamiento</h2>
                <div className="bg-bg-tertiary rounded-lg p-6 space-y-2 not-prose">
                  <p><strong className="text-accent-warm">Identidad:</strong> defcon23.eu</p>
                  <p><strong className="text-accent-warm">Domicilio social:</strong> C/ En comienda, 1 0, Madrid, España</p>
                  <p><strong className="text-accent-warm">CIF/NIF:</strong> 672324213</p>
                  <p><strong className="text-accent-warm">Teléfono:</strong> +34 672 324 213</p>
                  <p><strong className="text-accent-warm">Email:</strong> dpo@defcon23.eu</p>
                  <p><strong className="text-accent-warm">Delegado de Protección de Datos (DPO):</strong> Raúl Balaguer</p>
                </div>
              </section>

              {/* 2. Datos recopilados */}
              <section>
                <h2 className="text-2xl font-semibold text-accent-cold">2. Datos Personales que Recopilamos</h2>
                
                <h3 className="text-xl font-semibold text-accent-warm mt-6">2.1 Calculadora de Reynolds (Lead Magnet)</h3>
                <p><strong>Datos recopilados:</strong></p>
                <ul className="space-y-1">
                  <li>Dirección de correo electrónico</li>
                  <li>Nombre de la empresa u organización</li>
                  <li>Respuestas a 10 preguntas sobre su organización</li>
                </ul>
                <p><strong>Finalidad:</strong> Calcular su Número de Reynolds organizativo, enviarle los resultados del análisis, evaluar su nivel de preparación en ciberseguridad, contacto comercial posterior (con su consentimiento explícito).</p>
                <p><strong>Base legal:</strong> Consentimiento (Art. 6.1.a GDPR)</p>
                <p><strong>Plazo de conservación:</strong> 2 años desde la última interacción o hasta que retire su consentimiento</p>

                <h3 className="text-xl font-semibold text-accent-warm mt-6">2.2 Contratación de Servicios</h3>
                <p><strong>Datos recopilados:</strong> Nombre completo, email, teléfono, empresa, NIF/CIF, dirección postal, cargo (opcional)</p>
                <p><strong>Finalidad:</strong> Prestación de servicios de auditoría y consultoría, facturación, cumplimiento de obligaciones legales</p>
                <p><strong>Base legal:</strong> Ejecución de contrato (Art. 6.1.b GDPR) + Obligación legal (Art. 6.1.c GDPR)</p>
                <p><strong>Plazo de conservación:</strong> Duración del contrato + 10 años (obligación fiscal + PBC/FT Ley 10/2010)</p>

                <h3 className="text-xl font-semibold text-accent-warm mt-6">2.3 Formulario de Contacto</h3>
                <p><strong>Datos recopilados:</strong> Nombre, email, teléfono (opcional), mensaje</p>
                <p><strong>Finalidad:</strong> Responder a su consulta o solicitud de información</p>
                <p><strong>Base legal:</strong> Consentimiento (Art. 6.1.a GDPR)</p>
                <p><strong>Plazo de conservación:</strong> 1 año desde la última comunicación</p>

                <h3 className="text-xl font-semibold text-accent-warm mt-6">2.4 Cookies y Analítica</h3>
                <p>
                  Utilizamos <strong>Plausible Analytics</strong>, una solución que <strong>NO utiliza cookies, NO recopila datos personales</strong> y es 100% conforme con GDPR y LSSI-CE (Ley 34/2002 Art. 22.2).
                  Ver nuestra <Link href="/politica-cookies" className="text-accent-cold hover:underline">Política de Cookies</Link>.
                </p>
              </section>

              {/* 3. Destinatarios */}
              <section>
                <h2 className="text-2xl font-semibold text-accent-cold">3. Destinatarios de sus Datos (Procesadores)</h2>
                <p>Sus datos personales pueden ser compartidos con los siguientes proveedores, <strong>todos ubicados en la Unión Europea</strong>:</p>
                
                <div className="overflow-x-auto">
                  <table className="w-full border border-border-subtle rounded-lg mt-4 not-prose">
                    <thead className="bg-bg-tertiary">
                      <tr>
                        <th className="p-3 text-left text-accent-cold text-sm">Proveedor</th>
                        <th className="p-3 text-left text-accent-cold text-sm">Servicio</th>
                        <th className="p-3 text-left text-accent-cold text-sm">Ubicación</th>
                        <th className="p-3 text-left text-accent-cold text-sm">DPA</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border-subtle text-sm">
                      <tr><td className="p-3">Vercel Inc.</td><td className="p-3">Hosting web</td><td className="p-3">Frankfurt (DE)</td><td className="p-3 text-accent-success">✓ Sí</td></tr>
                      <tr><td className="p-3">Resend</td><td className="p-3">Envío emails</td><td className="p-3">EU (Ireland)</td><td className="p-3 text-accent-success">✓ Sí</td></tr>
                      <tr><td className="p-3">Notion Labs</td><td className="p-3">CRM</td><td className="p-3">Frankfurt (DE)</td><td className="p-3 text-accent-success">✓ Sí</td></tr>
                      <tr><td className="p-3">Cal.com</td><td className="p-3">Reservas</td><td className="p-3">EU</td><td className="p-3 text-accent-success">✓ Sí</td></tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-4"><strong>NO compartimos sus datos con:</strong></p>
                <ul className="space-y-1">
                  <li>Plataformas de publicidad (Google Ads, Facebook Ads)</li>
                  <li>Brokers de datos</li>
                  <li>Redes sociales (sin su consentimiento explícito)</li>
                  <li>Terceros con fines comerciales no relacionados</li>
                </ul>
              </section>

              {/* 4. Derechos */}
              <section>
                <h2 className="text-2xl font-semibold text-accent-cold">4. Sus Derechos (Art. 15-22 GDPR)</h2>
                <p>Conforme al GDPR, usted tiene los siguientes derechos:</p>
                
                <div className="space-y-4 mt-4">
                  <div className="border-l-4 border-accent-warm pl-4">
                    <h4 className="font-semibold text-text-primary">Derecho de Acceso (Art. 15)</h4>
                    <p>Solicitar una copia de todos los datos personales que tenemos sobre usted</p>
                  </div>
                  <div className="border-l-4 border-accent-warm pl-4">
                    <h4 className="font-semibold text-text-primary">Derecho de Rectificación (Art. 16)</h4>
                    <p>Corregir datos inexactos o incompletos</p>
                  </div>
                  <div className="border-l-4 border-accent-warm pl-4">
                    <h4 className="font-semibold text-text-primary">Derecho de Supresión (Art. 17)</h4>
                    <p>Solicitar el borrado de sus datos ("Derecho al Olvido")</p>
                  </div>
                  <div className="border-l-4 border-accent-warm pl-4">
                    <h4 className="font-semibold text-text-primary">Derecho de Portabilidad (Art. 20)</h4>
                    <p>Recibir sus datos en formato JSON o CSV para transmitirlos a otro responsable</p>
                  </div>
                  <div className="border-l-4 border-accent-warm pl-4">
                    <h4 className="font-semibold text-text-primary">Derecho de Oposición (Art. 21)</h4>
                    <p>Oponerse al tratamiento de sus datos</p>
                  </div>
                  <div className="border-l-4 border-accent-warm pl-4">
                    <h4 className="font-semibold text-text-primary">Derecho de Limitación (Art. 18)</h4>
                    <p>Solicitar que suspendamos el tratamiento</p>
                  </div>
                  <div className="border-l-4 border-accent-warm pl-4">
                    <h4 className="font-semibold text-text-primary">Retirada del Consentimiento (Art. 7.3)</h4>
                    <p>Retirar su consentimiento en cualquier momento</p>
                  </div>
                </div>

                <div className="bg-bg-tertiary rounded-lg p-6 mt-6 not-prose">
                  <h4 className="font-semibold text-accent-warm mb-3">Cómo ejercer sus derechos:</h4>
                  <ol className="space-y-2 list-decimal list-inside">
                    <li>Envíe un email a: <strong>dpo@defcon23.eu</strong></li>
                    <li>Asunto: "Ejercicio de Derechos GDPR - [Tipo de derecho]"</li>
                    <li>Incluya: Nombre completo, email, copia de DNI/NIE, descripción clara</li>
                  </ol>
                  <p className="mt-3"><strong>Plazo de respuesta:</strong> 1 mes (ampliable a 3 meses si es complejo)</p>
                </div>
              </section>

              {/* 5. Reclamación */}
              <section>
                <h2 className="text-2xl font-semibold text-accent-cold">5. Reclamación ante Autoridad de Control</h2>
                <p>Si considera que el tratamiento vulnera el RGPD, puede presentar una reclamación ante:</p>
                <div className="bg-bg-tertiary rounded-lg p-6 mt-4 not-prose">
                  <p><strong className="text-accent-warm">AEPD (Agencia Española de Protección de Datos)</strong></p>
                  <p>C/ Jorge Juan, 6 | 28001 Madrid, España</p>
                  <p>Web: <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-accent-cold hover:underline">www.aepd.es</a></p>
                  <p>Sede electrónica: <a href="https://sedeagpd.gob.es" target="_blank" rel="noopener noreferrer" className="text-accent-cold hover:underline">sedeagpd.gob.es</a></p>
                  <p>Teléfono: 901 100 099 / 912 663 517</p>
                </div>
              </section>

              {/* 6. Seguridad */}
              <section>
                <h2 className="text-2xl font-semibold text-accent-cold">6. Seguridad de sus Datos (Art. 32 GDPR)</h2>
                
                <h3 className="text-xl font-semibold text-accent-warm mt-4">Medidas Técnicas</h3>
                <ul className="space-y-1">
                  <li><strong>Cifrado en tránsito:</strong> TLS 1.3 (https://)</li>
                  <li><strong>Cifrado en reposo:</strong> PostgreSQL con AES-256</li>
                  <li><strong>Control de acceso:</strong> Autenticación 2FA para administradores</li>
                  <li><strong>Firewall y WAF:</strong> Protección DDoS</li>
                  <li><strong>Backups:</strong> Automáticos diarios con retención de 30 días</li>
                  <li><strong>Gestión de vulnerabilidades:</strong> Actualizaciones semanales</li>
                </ul>

                <h3 className="text-xl font-semibold text-accent-warm mt-6">Medidas Organizativas</h3>
                <ul className="space-y-1">
                  <li>Política de Seguridad ISO 27001:2022 (72% compliance)</li>
                  <li>Formación anual en GDPR para todo el personal</li>
                  <li>Acuerdos de Confidencialidad firmados</li>
                  <li>Procedimientos de respuesta a incidentes (notificación AEPD {'<'}72h)</li>
                  <li>Auditorías internas trimestrales</li>
                </ul>
              </section>

              {/* 7. Transferencias */}
              <section>
                <h2 className="text-2xl font-semibold text-accent-cold">7. Transferencias Internacionales</h2>
                <p className="font-semibold text-text-primary">
                  <strong>NO realizamos transferencias de datos fuera del Espacio Económico Europeo (EEE).</strong>
                </p>
                <p>
                  En caso de transferencia futura, garantizaremos Decisión de Adecuación de la Comisión Europea o 
                  Cláusulas Contractuales Tipo (Art. 46 GDPR).
                </p>
              </section>

              {/* 8. Menores */}
              <section>
                <h2 className="text-2xl font-semibold text-accent-cold">8. Menores de Edad</h2>
                <p>
                  No recopilamos intencionadamente datos de menores de 16 años (edad mínima en España según LOPDGDD). 
                  Si detectamos datos de un menor sin consentimiento parental, los eliminaremos inmediatamente.
                </p>
                <p>
                  Si es padre/madre/tutor y cree que su hijo/a ha proporcionado datos sin su consentimiento, 
                  contacte: <strong>dpo@defcon23.eu</strong>
                </p>
              </section>

              {/* 9. Cambios */}
              <section>
                <h2 className="text-2xl font-semibold text-accent-cold">9. Cambios en esta Política</h2>
                <p>Nos reservamos el derecho de modificar esta Política para adaptarla a cambios legislativos o mejoras en nuestros servicios.</p>
                <p><strong>Notificación:</strong></p>
                <ul className="space-y-1">
                  <li><strong>Cambios sustanciales:</strong> Notificación por email con 30 días de antelación</li>
                  <li><strong>Cambios menores:</strong> Actualización de la fecha en esta página</li>
                </ul>
              </section>

              {/* 10. Consentimiento */}
              <section>
                <h2 className="text-2xl font-semibold text-accent-cold">10. Consentimiento</h2>
                <p>Al utilizar la Calculadora de Reynolds o cualquier formulario, usted declara que:</p>
                <ul className="space-y-1">
                  <li>Ha leído y comprendido esta Política de Privacidad</li>
                  <li>Consiente el tratamiento de sus datos para las finalidades descritas</li>
                  <li>Es mayor de 16 años</li>
                  <li>Todos los datos proporcionados son veraces</li>
                </ul>
                <p className="mt-3">
                  <strong>Puede retirar su consentimiento en cualquier momento</strong> contactando con dpo@defcon23.eu
                </p>
              </section>

              {/* 11. Registro de Actividades de Tratamiento */}
              <section>
                <h2 className="text-2xl font-semibold text-accent-cold">11. Registro de Actividades de Tratamiento (RAT)</h2>
                <p>
                  Conforme al Art. 30 GDPR, mantenemos un <strong>Registro de Actividades de Tratamiento (RAT)</strong> que documenta 
                  todos los tratamientos de datos personales realizados.
                </p>
                <p>
                  El RAT incluye: finalidades, categorías de datos, destinatarios, plazos de conservación, medidas de seguridad y 
                  transferencias internacionales. Puede solicitarlo en <strong>dpo@defcon23.eu</strong>.
                </p>
              </section>

              {/* 12. Evaluación de Impacto (DPIA) */}
              <section>
                <h2 className="text-2xl font-semibold text-accent-cold">12. Evaluación de Impacto en Protección de Datos (DPIA)</h2>
                <p>
                  Para tratamientos de alto riesgo (Art. 35 GDPR), hemos realizado <strong>Evaluaciones de Impacto en Protección de Datos (DPIA)</strong>:
                </p>
                <ul className="space-y-1">
                  <li><strong>Calculadora de Reynolds:</strong> DPIA realizada en enero 2026 (riesgo: BAJO - solo email + respuestas organizativas)</li>
                  <li><strong>Sistema CRM:</strong> DPIA realizada en diciembre 2025 (riesgo: MEDIO - datos contractuales)</li>
                </ul>
                <p>Puede solicitar copia del resumen ejecutivo DPIA en <strong>dpo@defcon23.eu</strong></p>
              </section>

              {/* 13. Contacto */}
              <section className="border-t border-border-subtle pt-6">
                <h2 className="text-2xl font-semibold text-accent-cold">13. Contacto</h2>
                <p>Para cualquier consulta sobre protección de datos:</p>
                <div className="bg-bg-tertiary rounded-lg p-6 mt-4 not-prose">
                  <p><strong className="text-accent-warm">Email:</strong> dpo@defcon23.eu</p>
                  <p><strong className="text-accent-warm">Teléfono:</strong> +34 672 324 213</p>
                  <p><strong className="text-accent-warm">Dirección:</strong> C/ En comienda, 1 0, Madrid, España</p>
                  <p><strong className="text-accent-warm">Horario:</strong> Lunes a Viernes, 9:00-18:00 (CET)</p>
                  <p className="mt-3"><strong>Tiempo de respuesta:</strong> 72h (consultas) | 1 mes (ejercicio derechos GDPR)</p>
                </div>
              </section>

              {/* Footer */}
              <footer className="border-t border-border-subtle pt-6 text-xs text-text-subtle italic">
                <p><strong>Última actualización:</strong> 11 de febrero de 2026 | <strong>Versión:</strong> 1.0</p>
                <p><strong>Firmado digitalmente por:</strong> Raúl Balaguer, CEO</p>
                <p className="mt-4">
                  Esta Política ha sido redactada en cumplimiento con el Reglamento (UE) 2016/679 (GDPR) 
                  y la Ley Orgánica 3/2018 (LOPDGDD).
                </p>
              </footer>
            </article>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
