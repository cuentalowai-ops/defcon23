import PageLayout from "@/components/layout/PageLayout";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Link from "next/link";

export const metadata = {
  title: "Términos y Condiciones | defcon23.eu",
  description: "Términos y condiciones de uso del sitio web y servicios de defcon23.eu",
};

export default function TerminosCondicionesPage() {
  return (
    <PageLayout>
      <Section className="bg-bg-primary pt-32 md:pt-40 pb-20">
        <Container>
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-invert prose-sm md:prose-base max-w-none space-y-8 text-text-secondary">
              {/* Header */}
              <header className="space-y-3 border-b border-border-subtle pb-6">
                <h1 className="text-3xl md:text-4xl font-bold text-text-primary terminal-glow mb-0">
                  Términos y Condiciones de Uso
                </h1>
                <p className="text-sm text-text-subtle">
                  <strong>defcon23.eu</strong> | Última actualización: 11 de febrero de 2026 | Versión 1.0
                </p>
              </header>

              {/* 1. Información General */}
              <section>
                <h2 className="text-2xl font-semibold text-accent-cold">1. Información General</h2>
                
                <h3 className="text-xl font-semibold text-accent-warm mt-4">1.1 Titular del Sitio Web</h3>
                <div className="bg-bg-tertiary rounded-lg p-6 not-prose space-y-2">
                  <p><strong className="text-accent-warm">Denominación social:</strong> defcon23.eu</p>
                  <p><strong className="text-accent-warm">CIF/NIF:</strong> 672324213</p>
                  <p><strong className="text-accent-warm">Domicilio social:</strong> C/ En comienda, 1 0, Madrid, España</p>
                  <p><strong className="text-accent-warm">Email:</strong> hola@defcon23.eu</p>
                  <p><strong className="text-accent-warm">Teléfono:</strong> +34 672 324 213</p>
                </div>

                <h3 className="text-xl font-semibold text-accent-warm mt-6">1.2 Objeto</h3>
                <p>
                  Los presentes Términos y Condiciones regulan el acceso y uso del sitio web <strong>defcon23.eu</strong> y de los servicios ofrecidos. 
                  El uso del Sitio Web atribuye la condición de usuario e implica la aceptación plena de todas las disposiciones aquí incluidas.
                </p>
              </section>

              {/* 2. Servicios */}
              <section>
                <h2 className="text-2xl font-semibold text-accent-cold">2. Servicios Ofrecidos</h2>
                
                <h3 className="text-xl font-semibold text-accent-warm mt-4">2.1 Calculadora de Reynolds</h3>
                <p>
                  Herramienta de autodiagnóstico que permite evaluar el nivel de madurez en ciberseguridad mediante un cuestionario de 10 preguntas.
                </p>
                <p><strong>Características:</strong></p>
                <ul className="space-y-1">
                  <li>Acceso gratuito</li>
                  <li>Requiere email y nombre de empresa</li>
                  <li>Resultados enviados por email</li>
                  <li><strong>No constituye una auditoría oficial</strong></li>
                  <li>Es una herramienta orientativa</li>
                </ul>

                <h3 className="text-xl font-semibold text-accent-warm mt-6">2.2 Servicios de Consultoría</h3>
                <ul className="space-y-1">
                  <li>Auditorías de Seguridad (ISO 27001, ENS, GDPR)</li>
                  <li>Virtual CISO (Responsable de Seguridad externalizado)</li>
                  <li>Formación en Ciberseguridad</li>
                  <li>Intelligence Brief personalizado</li>
                </ul>
                <p className="mt-2">
                  <strong>Nota:</strong> La contratación de servicios está sujeta a condiciones específicas que se formalizarán mediante contrato independiente.
                </p>
              </section>

              {/* 3. Condiciones de Acceso */}
              <section>
                <h2 className="text-2xl font-semibold text-accent-cold">3. Condiciones de Acceso y Uso</h2>
                
                <h3 className="text-xl font-semibold text-accent-warm mt-4">3.1 Carácter Gratuito</h3>
                <p>
                  El acceso al Sitio Web y el uso de la Calculadora de Reynolds son <strong>gratuitos</strong>, 
                  salvo el coste de conexión a través de la red de telecomunicaciones.
                </p>

                <h3 className="text-xl font-semibold text-accent-warm mt-6">3.2 Requisitos</h3>
                <p>Para utilizar la Calculadora de Reynolds, el Usuario debe:</p>
                <ul className="space-y-1">
                  <li>Ser mayor de 18 años</li>
                  <li>Proporcionar un email válido</li>
                  <li>Aceptar la Política de Privacidad</li>
                  <li>Proporcionar información veraz y exacta</li>
                </ul>

                <h3 className="text-xl font-semibold text-accent-warm mt-6">3.3 Uso Correcto</h3>
                <p>El Usuario se compromete a utilizar el Sitio Web de conformidad con la ley. Queda prohibido:</p>
                <ul className="space-y-2 list-none pl-0">
                  <li className="flex items-start gap-2"><span className="text-accent-danger">✗</span><span>Utilizar el Sitio Web con fines ilícitos</span></li>
                  <li className="flex items-start gap-2"><span className="text-accent-danger">✗</span><span>Provocar daños en el Sitio Web o sistemas de terceros</span></li>
                  <li className="flex items-start gap-2"><span className="text-accent-danger">✗</span><span>Introducir virus, malware o código malicioso</span></li>
                  <li className="flex items-start gap-2"><span className="text-accent-danger">✗</span><span>Intentar acceder a áreas restringidas</span></li>
                  <li className="flex items-start gap-2"><span className="text-accent-danger">✗</span><span>Realizar ingeniería inversa del código fuente</span></li>
                  <li className="flex items-start gap-2"><span className="text-accent-danger">✗</span><span>Utilizar bots o herramientas automatizadas sin autorización</span></li>
                  <li className="flex items-start gap-2"><span className="text-accent-danger">✗</span><span>Copiar o distribuir contenidos sin autorización</span></li>
                  <li className="flex items-start gap-2"><span className="text-accent-danger">✗</span><span>Suplantar la identidad de otros usuarios</span></li>
                </ul>
              </section>

              {/* 4. Propiedad Intelectual */}
              <section>
                <h2 className="text-2xl font-semibold text-accent-cold">4. Propiedad Intelectual e Industrial</h2>
                
                <h3 className="text-xl font-semibold text-accent-warm mt-4">4.1 Derechos de Autor</h3>
                <p>
                  Todos los contenidos del Sitio Web (textos, imágenes, logotipos, código fuente, diseño gráfico, bases de datos) 
                  son propiedad de <strong>defcon23.eu</strong> y están protegidos por las leyes de propiedad intelectual.
                </p>

                <h3 className="text-xl font-semibold text-accent-warm mt-6">4.2 Licencia de Uso</h3>
                <p><strong>Se autoriza:</strong></p>
                <ul className="space-y-1 list-none pl-0">
                  <li className="flex items-start gap-2"><span className="text-accent-success">✓</span><span>Visualizar los contenidos en pantalla</span></li>
                  <li className="flex items-start gap-2"><span className="text-accent-success">✓</span><span>Descargar los resultados de su Calculadora</span></li>
                  <li className="flex items-start gap-2"><span className="text-accent-success">✓</span><span>Imprimir copias para uso personal no comercial</span></li>
                </ul>

                <p className="mt-4"><strong>Queda prohibido:</strong></p>
                <ul className="space-y-1 list-none pl-0">
                  <li className="flex items-start gap-2"><span className="text-accent-danger">✗</span><span>Reproducir o distribuir contenidos sin autorización</span></li>
                  <li className="flex items-start gap-2"><span className="text-accent-danger">✗</span><span>Modificar o crear obras derivadas</span></li>
                  <li className="flex items-start gap-2"><span className="text-accent-danger">✗</span><span>Utilizar los contenidos con fines comerciales</span></li>
                  <li className="flex items-start gap-2"><span className="text-accent-danger">✗</span><span>Eliminar avisos de propiedad intelectual</span></li>
                </ul>

                <h3 className="text-xl font-semibold text-accent-warm mt-6">4.3 Marcas Registradas</h3>
                <p>
                  <strong>defcon23.eu</strong>, su logotipo y otros signos distintivos son marcas registradas. 
                  Queda prohibido su uso sin autorización expresa y por escrito.
                </p>
              </section>

              {/* 5. Limitación de Responsabilidad */}
              <section>
                <h2 className="text-2xl font-semibold text-accent-cold">5. Limitación de Responsabilidad</h2>
                
                <h3 className="text-xl font-semibold text-accent-warm mt-4">5.1 Disponibilidad del Servicio</h3>
                <p>
                  <strong>defcon23.eu</strong> no garantiza la disponibilidad ininterrumpida del Sitio Web. 
                  Pueden producirse interrupciones por mantenimientos, fallos técnicos, fuerza mayor o ciberataques.
                </p>

                <h3 className="text-xl font-semibold text-accent-warm mt-6">5.2 Exactitud de la Calculadora de Reynolds</h3>
                <p>La Calculadora de Reynolds es una <strong>herramienta orientativa</strong>. Sus resultados:</p>
                <ul className="space-y-2 list-none pl-0">
                  <li className="flex items-start gap-2"><span className="text-accent-warning">⚠️</span><span>NO constituyen una auditoría oficial</span></li>
                  <li className="flex items-start gap-2"><span className="text-accent-warning">⚠️</span><span>NO sustituyen una evaluación profesional</span></li>
                  <li className="flex items-start gap-2"><span className="text-accent-warning">⚠️</span><span>Dependen de la veracidad de las respuestas del Usuario</span></li>
                  <li className="flex items-start gap-2"><span className="text-accent-warning">⚠️</span><span>Pueden contener errores o imprecisiones</span></li>
                </ul>

                <p className="mt-4"><strong>defcon23.eu</strong> no será responsable de:</p>
                <ul className="space-y-1">
                  <li>Decisiones empresariales basadas únicamente en los resultados</li>
                  <li>Pérdidas económicas derivadas de la interpretación</li>
                  <li>Errores debidos a información incorrecta del Usuario</li>
                </ul>

                <h3 className="text-xl font-semibold text-accent-warm mt-6">5.3 Enlaces a Terceros</h3>
                <p>
                  El Sitio Web puede contener enlaces a sitios de terceros. <strong>defcon23.eu</strong> no controla 
                  ni se hace responsable del contenido o políticas de privacidad de dichos sitios.
                </p>
              </section>

              {/* 6. Protección de Datos */}
              <section>
                <h2 className="text-2xl font-semibold text-accent-cold">6. Protección de Datos Personales</h2>
                <p>
                  El tratamiento de datos personales se rige por nuestra{" "}
                  <Link href="/politica-privacidad" className="text-accent-cold hover:underline font-semibold">
                    Política de Privacidad
                  </Link>.
                </p>
                <p><strong>Resumen de derechos GDPR:</strong></p>
                <ul className="space-y-1">
                  <li>Acceso, rectificación, supresión, portabilidad</li>
                  <li>Oposición y limitación del tratamiento</li>
                  <li>Retirada del consentimiento en cualquier momento</li>
                  <li>Reclamación ante la AEPD</li>
                </ul>
                <p className="mt-3"><strong>Contacto DPO:</strong> dpo@defcon23.eu</p>
              </section>

              {/* 7. Comunicaciones Comerciales */}
              <section>
                <h2 className="text-2xl font-semibold text-accent-cold">7. Comunicaciones Comerciales</h2>
                
                <h3 className="text-xl font-semibold text-accent-warm mt-4">7.1 Newsletter (Opcional)</h3>
                <p>Si se suscribe a nuestra newsletter:</p>
                <ul className="space-y-1">
                  <li>Recibirá comunicaciones sobre ciberseguridad, compliance y nuevos servicios</li>
                  <li>Puede darse de baja mediante el enlace en cada email</li>
                  <li>Sus datos no serán cedidos a terceros con fines comerciales</li>
                </ul>

                <h3 className="text-xl font-semibold text-accent-warm mt-6">7.2 Contacto Post-Calculadora</h3>
                <p>
                  Si utiliza la Calculadora, podremos contactarle para ofrecerle servicios relacionados con sus resultados. 
                  Tiene derecho a solicitar que no le contactemos con fines comerciales.
                </p>
              </section>

              {/* 8. Duración */}
              <section>
                <h2 className="text-2xl font-semibold text-accent-cold">8. Duración y Terminación</h2>
                <p>
                  Los Términos tienen duración indefinida. <strong>defcon23.eu</strong> se reserva el derecho de 
                  suspender el acceso en caso de incumplimiento, uso fraudulento, información falsa o intentos de acceso no autorizado.
                </p>
              </section>

              {/* 9. Modificaciones */}
              <section>
                <h2 className="text-2xl font-semibold text-accent-cold">9. Modificaciones</h2>
                <p>
                  Nos reservamos el derecho de modificar estos Términos en cualquier momento. 
                  Las modificaciones entrarán en vigor desde su publicación.
                </p>
                <p><strong>Notificación:</strong></p>
                <ul className="space-y-1">
                  <li><strong>Cambios sustanciales:</strong> Notificación por email con 30 días de antelación</li>
                  <li><strong>Cambios menores:</strong> Actualización de la fecha</li>
                </ul>
                <p className="mt-3">
                  El uso continuado del Sitio Web tras la modificación implica la aceptación de los nuevos Términos.
                </p>
              </section>

              {/* 10. Legislación */}
              <section>
                <h2 className="text-2xl font-semibold text-accent-cold">10. Legislación Aplicable y Jurisdicción</h2>
                
                <h3 className="text-xl font-semibold text-accent-warm mt-4">10.1 Ley Aplicable</h3>
                <p>Los presentes Términos se rigen por la legislación española:</p>
                <ul className="space-y-1">
                  <li>Ley 34/2002 (LSSI-CE)</li>
                  <li>Reglamento (UE) 2016/679 (GDPR)</li>
                  <li>Ley Orgánica 3/2018 (LOPDGDD)</li>
                  <li>Código Civil español</li>
                </ul>

                <h3 className="text-xl font-semibold text-accent-warm mt-6">10.2 Resolución de Conflictos</h3>
                <p>
                  Para cualquier controversia, las partes se someten a los <strong>Juzgados y Tribunales de Madrid</strong>.
                </p>
                <p className="mt-3">
                  <strong>Resolución extrajudicial:</strong> El Usuario puede recurrir a la{" "}
                  <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-accent-cold hover:underline">
                    Plataforma de Resolución de Litigios en Línea de la UE
                  </a>.
                </p>
              </section>

              {/* 11. Contacto */}
              <section className="border-t border-border-subtle pt-6">
                <h2 className="text-2xl font-semibold text-accent-cold">11. Contacto</h2>
                <p>Para cualquier consulta sobre estos Términos y Condiciones:</p>
                <div className="bg-bg-tertiary rounded-lg p-6 mt-4 not-prose space-y-2">
                  <p><strong className="text-accent-warm">Email:</strong> hola@defcon23.eu</p>
                  <p><strong className="text-accent-warm">Teléfono:</strong> +34 672 324 213</p>
                  <p><strong className="text-accent-warm">Dirección:</strong> C/ En comienda, 1 0, Madrid, España</p>
                  <p className="mt-3"><strong className="text-accent-warm">Departamento Legal:</strong> legal@defcon23.eu</p>
                  <p><strong className="text-accent-warm">DPO:</strong> dpo@defcon23.eu</p>
                </div>
              </section>

              {/* Footer */}
              <footer className="border-t border-border-subtle pt-6 text-xs text-text-subtle italic">
                <p><strong>Última actualización:</strong> 11 de febrero de 2026 | <strong>Versión:</strong> 1.0</p>
                <p><strong>Firma digital:</strong> Raúl Balaguer, CEO, Representante Legal de defcon23.eu</p>
                <p className="mt-4">
                  Términos redactados en cumplimiento con la LSSI-CE (Art. 10), GDPR y legislación española vigente.
                </p>
              </footer>
            </article>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
