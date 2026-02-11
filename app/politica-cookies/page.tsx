import PageLayout from "@/components/layout/PageLayout";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export const metadata = {
  title: "Política de Cookies | defcon23.eu",
  description: "Política de cookies de defcon23.eu - No utilizamos cookies de seguimiento",
};

export default function PoliticaCookiesPage() {
  return (
    <PageLayout>
      <Section className="bg-bg-primary pt-32 md:pt-40">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8 text-text-secondary">
            {/* Header */}
            <div className="space-y-3 border-b border-border-subtle pb-6">
              <h1 className="text-3xl md:text-4xl font-bold text-text-primary terminal-glow">
                Política de Cookies
              </h1>
              <p className="text-sm text-text-subtle">
                <strong>defcon23.eu</strong> | Última actualización: 11 de febrero de 2026 | Versión 1.0
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-invert prose-sm md:prose-base max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-accent-cold mb-4">1. ¿Qué son las Cookies?</h2>
                <p>
                  Las cookies son pequeños archivos de texto que los sitios web almacenan en su navegador o dispositivo cuando los visita. 
                  Permiten que el sitio web recuerde sus acciones y preferencias durante un período de tiempo.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-accent-cold mb-4">2. Nuestra Política: NO Utilizamos Cookies</h2>
                <p className="font-semibold text-text-primary">
                  <strong>defcon23.eu</strong> ha optado por <strong>NO utilizar cookies</strong> en su sitio web.
                </p>
                
                <h3 className="text-xl font-semibold text-accent-warm mt-6 mb-3">¿Por qué no usamos cookies?</h3>
                <p>
                  Creemos en una web más privada y respetuosa. Por eso hemos implementado <strong>Plausible Analytics</strong>, 
                  una solución de analítica web que:
                </p>
                <ul className="space-y-2 list-none pl-0">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-success">✓</span>
                    <span><strong>No utiliza cookies</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-success">✓</span>
                    <span><strong>No recopila datos personales</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-success">✓</span>
                    <span><strong>No rastrea usuarios entre sitios web</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-success">✓</span>
                    <span><strong>Es 100% conforme con GDPR, CCPA y PECR</strong></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-success">✓</span>
                    <span><strong>No requiere banner de consentimiento de cookies</strong></span>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-accent-cold mb-4">3. Analítica Web Sin Cookies (Plausible Analytics)</h2>
                
                <h3 className="text-xl font-semibold text-accent-warm mt-6 mb-3">¿Qué información recopilamos?</h3>
                <p>Recopilamos <strong>únicamente datos agregados y anónimos</strong> para mejorar nuestro sitio web:</p>
                
                <div className="overflow-x-auto">
                  <table className="w-full border border-border-subtle rounded-lg mt-4">
                    <thead className="bg-bg-tertiary">
                      <tr>
                        <th className="p-3 text-left text-accent-cold">Dato recopilado</th>
                        <th className="p-3 text-left text-accent-cold">Ejemplo</th>
                        <th className="p-3 text-left text-accent-cold">¿Es personal?</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border-subtle">
                      <tr><td className="p-3">Páginas visitadas</td><td className="p-3">/calculadora-reynolds</td><td className="p-3 text-accent-danger">❌ No</td></tr>
                      <tr><td className="p-3">Duración de la visita</td><td className="p-3">3 minutos</td><td className="p-3 text-accent-danger">❌ No</td></tr>
                      <tr><td className="p-3">Dispositivo</td><td className="p-3">Desktop / Mobile</td><td className="p-3 text-accent-danger">❌ No</td></tr>
                      <tr><td className="p-3">Sistema operativo</td><td className="p-3">Windows / macOS / iOS</td><td className="p-3 text-accent-danger">❌ No</td></tr>
                      <tr><td className="p-3">Navegador</td><td className="p-3">Chrome / Safari / Firefox</td><td className="p-3 text-accent-danger">❌ No</td></tr>
                      <tr><td className="p-3">País</td><td className="p-3">España</td><td className="p-3 text-accent-danger">❌ No (basado en IP, sin almacenar IP)</td></tr>
                      <tr><td className="p-3">Referrer</td><td className="p-3">google.com</td><td className="p-3 text-accent-danger">❌ No</td></tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold text-accent-warm mt-6 mb-3">¿Qué NO recopilamos?</h3>
                <ul className="space-y-2 list-none pl-0">
                  <li className="flex items-start gap-2"><span className="text-accent-danger">✗</span><span>Dirección IP completa (solo país)</span></li>
                  <li className="flex items-start gap-2"><span className="text-accent-danger">✗</span><span>Identificadores únicos (User ID)</span></li>
                  <li className="flex items-start gap-2"><span className="text-accent-danger">✗</span><span>Cookies o almacenamiento local</span></li>
                  <li className="flex items-start gap-2"><span className="text-accent-danger">✗</span><span>Historial de navegación completo</span></li>
                  <li className="flex items-start gap-2"><span className="text-accent-danger">✗</span><span>Datos personales (nombre, email, etc.)</span></li>
                </ul>

                <p className="mt-4">
                  <strong>Más información:</strong> Puede consultar la política de privacidad de Plausible Analytics en{" "}
                  <a href="https://plausible.io/data-policy" target="_blank" rel="noopener noreferrer" className="text-accent-cold hover:underline">
                    https://plausible.io/data-policy
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-accent-cold mb-4">4. Cookies de Terceros</h2>
                <p>
                  <strong>No utilizamos ningún servicio de terceros que instale cookies en su navegador</strong>, incluyendo pero no limitado a:
                </p>
                <ul className="space-y-2 list-none pl-0">
                  <li className="flex items-start gap-2"><span className="text-accent-danger">✗</span><span>Google Analytics</span></li>
                  <li className="flex items-start gap-2"><span className="text-accent-danger">✗</span><span>Facebook Pixel</span></li>
                  <li className="flex items-start gap-2"><span className="text-accent-danger">✗</span><span>Google Ads / Meta Ads</span></li>
                  <li className="flex items-start gap-2"><span className="text-accent-danger">✗</span><span>Hotjar / Crazy Egg</span></li>
                  <li className="flex items-start gap-2"><span className="text-accent-danger">✗</span><span>Cookies de redes sociales</span></li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-accent-cold mb-4">5. ¿Necesita Aceptar Cookies?</h2>
                <p className="font-semibold text-text-primary">
                  <strong>NO.</strong> Como no utilizamos cookies, no necesita aceptar ningún banner de consentimiento.
                </p>
                <p>
                  Puede navegar por nuestro sitio web con total libertad y privacidad desde el primer momento.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-accent-cold mb-4">6. Local Storage y Session Storage</h2>
                <p>
                  Nuestro sitio web utiliza <strong>almacenamiento local del navegador (localStorage)</strong> únicamente para:
                </p>
                <ul className="space-y-2">
                  <li><strong>Recordar el tema visual</strong> (modo claro/oscuro) - Solo en su dispositivo, no se envía a nuestros servidores</li>
                  <li><strong>Formularios no enviados</strong> - Para no perder su progreso si cierra la página accidentalmente</li>
                </ul>
                <p className="mt-4"><strong>Estos datos:</strong></p>
                <ul className="space-y-2">
                  <li>Se almacenan ÚNICAMENTE en su dispositivo</li>
                  <li>NO se envían a nuestros servidores</li>
                  <li>NO se comparten con terceros</li>
                  <li>Puede eliminarlos en cualquier momento limpiando los datos del navegador</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-accent-cold mb-4">7. Sus Derechos</h2>
                <p>Aunque no utilizamos cookies, usted tiene derecho a:</p>
                <ul className="space-y-2">
                  <li><strong>Desactivar JavaScript:</strong> Esto deshabilitará Plausible Analytics</li>
                  <li><strong>Usar bloqueadores de scripts:</strong> uBlock Origin, Privacy Badger, etc.</li>
                  <li><strong>Navegar en modo incógnito:</strong> Ningún dato persistirá en su navegador</li>
                  <li><strong>Solicitar información:</strong> Contacte con nosotros en dpo@defcon23.eu</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-accent-cold mb-4">8. Cambios en Esta Política</h2>
                <p>
                  Nos reservamos el derecho a modificar esta Política de Cookies en cualquier momento. 
                  Cualquier cambio será publicado en esta página con la fecha de "Última actualización" actualizada.
                </p>
              </section>

              <section className="border-t border-border-subtle pt-6">
                <h2 className="text-2xl font-semibold text-accent-cold mb-4">9. Contacto</h2>
                <p>
                  Para cualquier consulta sobre esta Política de Cookies, puede contactarnos en:
                </p>
                <div className="bg-bg-tertiary rounded-lg p-6 mt-4 space-y-2">
                  <p><strong className="text-accent-warm">Email:</strong> dpo@defcon23.eu</p>
                  <p><strong className="text-accent-warm">Teléfono:</strong> +34 672 324 213</p>
                  <p><strong className="text-accent-warm">Dirección:</strong> C/ En comienda, 1 0, Madrid, España</p>
                </div>
              </section>
            </div>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
