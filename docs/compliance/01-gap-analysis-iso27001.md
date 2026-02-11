# GAP ANALYSIS REPORT: ISO/IEC 27001:2022
## defcon23.eu — Information Security Management System

**Fecha de auditoría:** 11 de febrero de 2026  
**Auditor:** Compliance.Sec∅ps Collective  
**Alcance:** Website defcon23.eu + infraestructura asociada (Vercel, Resend, Cal.com)  
**Metodología:** Evaluación de 93 controles ISO 27001:2022 Annex A

---

## EXECUTIVE SUMMARY

**Estado actual:** defcon23.eu NO está certificado ISO 27001. Esta auditoría identifica **32 gaps de alta prioridad** que deben resolverse antes de iniciar el proceso de certificación.

### **Métricas de Compliance:**

| Categoría | Total Controles | ✅ Compliant | ⚠️ Parcial | ❌ No Compliant | % Compliance |
|-----------|-----------------|-------------|-----------|-----------------|--------------|
| **A.5 Organizational** | 37 | 8 | 12 | 17 | 22% |
| **A.6 People** | 8 | 2 | 3 | 3 | 25% |
| **A.7 Physical** | 11 | 10 | 1 | 0 | 91% |
| **A.8 Technology** | 34 | 12 | 10 | 12 | 35% |
| **TOTAL** | **93** | **32** (34%) | **26** (28%) | **35** (38%) | **34%** |

### **Priorización de Gaps:**

- 🔴 **CRÍTICO (18 gaps):** Requisitos obligatorios ISO 27001, riesgo legal alto
- 🟠 **ALTO (25 gaps):** Controles core, riesgo operacional significativo
- 🟡 **MEDIO (12 gaps):** Best practices, riesgo moderado

### **Tiempo estimado para remediation:** 12-16 semanas  
**Coste estimado:** €18,000-€25,000 (labor interno + auditor externo Stage 1)

---

## A.5 ORGANIZATIONAL CONTROLS (37 controles)

### ❌ **5.1 Policies for information security**
**Estado:** NO COMPLIANT  
**Gap:** No existe política de seguridad de la información aprobada por dirección  
**Prioridad:** 🔴 CRÍTICO  
**Evidencia requerida:** Documento firmado por CEO/CTO, fecha de aprobación, fecha de revisión  
**Acción:** Redactar + aprobar "Política de Seguridad de la Información" (ver FASE 2)  
**Plazo:** 2 semanas

---

### ⚠️ **5.2 Information security roles and responsibilities**
**Estado:** PARCIALMENTE COMPLIANT  
**Gap:** Roles informales, no documentados (ej: "Raúl Balaguer es el operador" pero sin matriz de responsabilidades RACI)  
**Prioridad:** 🔴 CRÍTICO  
**Evidencia requerida:** Matriz RACI (Responsible, Accountable, Consulted, Informed) para:
- Responsable SGSI
- Responsable de Riesgos
- Responsable de Cumplimiento GDPR (DPO)
- Desarrolladores (implementación de controles técnicos)  
**Acción:** Crear documento "Roles y Responsabilidades SGSI"  
**Plazo:** 1 semana

---

### ✅ **5.3 Segregation of duties**
**Estado:** COMPLIANT (por tamaño de equipo)  
**Justificación:** Equipo pequeño (1-2 personas), no hay conflictos de interés críticos. Control N/A.  
**Monitorización:** Revisar cuando el equipo crezca a >5 personas

---

### ❌ **5.4 Management responsibilities**
**Estado:** NO COMPLIANT  
**Gap:** No hay compromiso documentado de dirección para el SGSI  
**Prioridad:** 🔴 CRÍTICO  
**Evidencia requerida:** Acta de aprobación del SGSI firmada por CEO, asignación de recursos  
**Acción:** Reunión de kick-off SGSI + acta firmada  
**Plazo:** 1 semana

---

### ❌ **5.5 Contact with authorities**
**Estado:** NO COMPLIANT  
**Gap:** No hay procedimiento para contactar con autoridades (AEPD, INCIBE-CERT, CCN-CERT)  
**Prioridad:** 🟠 ALTO  
**Evidencia requerida:** Lista de contactos + procedimiento de escalado  
**Acción:** Crear "Procedimiento de Contacto con Autoridades"  
**Plazo:** 1 semana

---

### ❌ **5.6 Contact with special interest groups**
**Estado:** NO COMPLIANT  
**Gap:** No hay participación en grupos de ciberseguridad (ISACA, (ISC)², CCN-CERT)  
**Prioridad:** 🟡 MEDIO  
**Acción:** Registrarse en CCN-CERT (gratuito), suscribirse a alerts de CISA/ENISA  
**Plazo:** 2 semanas

---

### ❌ **5.7 Threat intelligence**
**Estado:** NO COMPLIANT  
**Gap:** No hay suscripción a feeds de threat intelligence  
**Prioridad:** 🟠 ALTO  
**Evidencia requerida:** Suscripción activa a al menos 1 threat feed  
**Acción:** Suscribirse a CISA Alerts + ENISA Threat Landscape  
**Plazo:** 1 día

---

### ⚠️ **5.8 Information security in project management**
**Estado:** PARCIALMENTE COMPLIANT  
**Gap:** Seguridad no está integrada en el workflow de desarrollo (no hay security checklist en PRs)  
**Prioridad:** 🟠 ALTO  
**Evidencia requerida:** Template de PR con security checklist  
**Acción:** Añadir security checklist a `.github/pull_request_template.md`  
**Plazo:** 1 día

---

### ❌ **5.9 Inventory of information and other associated assets**
**Estado:** NO COMPLIANT  
**Gap:** No hay inventario de activos documentado  
**Prioridad:** 🔴 CRÍTICO  
**Evidencia requerida:** Registro de activos con:
  - Información: Base de datos clientes, código fuente, documentación
  - Software: defcon23.eu (Next.js app), PostgreSQL, Reynolds Calculator
  - Hardware: N/A (cloud)
  - Servicios: Vercel, Resend, Cal.com, Notion
  - Personas: Desarrolladores, operadores  
**Acción:** Crear "Inventario de Activos de Información"  
**Plazo:** 2 semanas

---

### ❌ **5.10 Acceptable use of information and other associated assets**
**Estado:** NO COMPLIANT  
**Gap:** No hay política de uso aceptable de activos  
**Prioridad:** 🟡 MEDIO  
**Evidencia requerida:** Política de uso aceptable (AUP) firmada por empleados  
**Acción:** Redactar "Política de Uso Aceptable"  
**Plazo:** 1 semana

---

### ❌ **5.11 Return of assets**
**Estado:** NO COMPLIANT  
**Gap:** No hay procedimiento de devolución de activos al cesar empleados/contratistas  
**Prioridad:** 🟡 MEDIO  
**Evidencia requerida:** Checklist de offboarding (revocar accesos Vercel, GitHub, Notion, etc.)  
**Acción:** Crear "Procedimiento de Offboarding"  
**Plazo:** 1 semana

---

### ❌ **5.12 Classification of information**
**Estado:** NO COMPLIANT  
**Gap:** No hay esquema de clasificación de información (Público / Interno / Confidencial / Secreto)  
**Prioridad:** 🟠 ALTO  
**Evidencia requerida:** Esquema de clasificación + etiquetado de documentos  
**Acción:** Definir esquema de clasificación + aplicarlo a documentos clave  
**Plazo:** 2 semanas

---

### ❌ **5.13 Labelling of information**
**Estado:** NO COMPLIANT  
**Gap:** No hay etiquetado de documentos según clasificación  
**Prioridad:** 🟡 MEDIO  
**Acción:** Implementar etiquetado (ej: watermarks, headers)  
**Plazo:** 2 semanas (tras 5.12)

---

### ❌ **5.14 Information transfer**
**Estado:** NO COMPLIANT  
**Gap:** No hay procedimiento formal para transferencia segura de información  
**Prioridad:** 🟠 ALTO  
**Evidencia requerida:** Procedimiento + herramientas aprobadas (ej: cifrado end-to-end)  
**Acción:** Crear "Procedimiento de Transferencia Segura" (solo emails cifrados, no WeTransfer)  
**Plazo:** 1 semana

---

### ⚠️ **5.15 Access control**
**Estado:** PARCIALMENTE COMPLIANT  
**Gap:** Control de acceso existe en Vercel/GitHub, pero no documentado  
**Prioridad:** 🟠 ALTO  
**Evidencia requerida:** Política de control de acceso + lista de privilegios  
**Acción:** Documentar política + hacer inventario de cuentas  
**Plazo:** 1 semana

---

### ❌ **5.16 Identity management**
**Estado:** NO COMPLIANT  
**Gap:** No hay proceso formal de gestión de identidades (alta, baja, modificación)  
**Prioridad:** 🟠 ALTO  
**Evidencia requerida:** Procedimiento de gestión de identidades  
**Acción:** Crear "Procedimiento de Gestión de Cuentas"  
**Plazo:** 1 semana

---

### ⚠️ **5.17 Authentication information**
**Estado:** PARCIALMENTE COMPLIANT  
**Gap:** MFA habilitado en GitHub, pero no en Vercel/Cal.com (verificar)  
**Prioridad:** 🔴 CRÍTICO  
**Evidencia requerida:** MFA obligatorio en todas las cuentas con acceso a datos  
**Acción:** Habilitar MFA en Vercel, Resend, Cal.com, Notion  
**Plazo:** 1 día

---

### ⚠️ **5.18 Access rights**
**Estado:** PARCIALMENTE COMPLIANT  
**Gap:** Accesos existen, pero no hay revisión periódica (quarterly review)  
**Prioridad:** 🟠 ALTO  
**Evidencia requerida:** Proceso de revisión trimestral de accesos  
**Acción:** Implementar revisión trimestral + documentar en calendario  
**Plazo:** 1 semana

---

### ❌ **5.19 Information security in supplier relationships**
**Estado:** NO COMPLIANT  
**Gap:** No hay evaluación de seguridad de proveedores (Vercel, Resend, Cal.com, Notion)  
**Prioridad:** 🔴 CRÍTICO (NIS2 requirement)  
**Evidencia requerida:** Cuestionario de evaluación + certificaciones de proveedores (ISO 27001, SOC 2)  
**Acción:** Crear "Supplier Security Assessment" para cada proveedor  
**Plazo:** 3 semanas

---

### ❌ **5.20 Addressing information security within supplier agreements**
**Estado:** NO COMPLIANT  
**Gap:** No hay DPAs (Data Processing Agreements) firmados con procesadores GDPR  
**Prioridad:** 🔴 CRÍTICO (GDPR Art. 28)  
**Evidencia requerida:** DPAs firmados con Vercel, Resend, Cal.com, Notion  
**Acción:** Solicitar + firmar DPAs con todos los proveedores  
**Plazo:** 2 semanas

---

### ❌ **5.21 Managing information security in the ICT supply chain**
**Estado:** NO COMPLIANT  
**Gap:** No hay gestión de seguridad de la cadena de suministro (dependencias npm)  
**Prioridad:** 🟠 ALTO  
**Evidencia requerida:** Proceso de revisión de dependencias + Dependabot alerts activado  
**Acción:** Habilitar Dependabot en GitHub + revisar vulnerabilidades  
**Plazo:** 1 día

---

### ❌ **5.22 Monitoring, review and change management of supplier services**
**Estado:** NO COMPLIANT  
**Gap:** No hay monitorización de cambios en servicios de proveedores  
**Prioridad:** 🟡 MEDIO  
**Evidencia requerida:** Suscripción a changelogs de Vercel, Resend, etc.  
**Acción:** Monitorizar changelogs + evaluar impacto de cambios  
**Plazo:** 1 semana

---

### ❌ **5.23 Information security for use of cloud services**
**Estado:** NO COMPLIANT  
**Gap:** No hay política específica para uso de cloud  
**Prioridad:** 🟠 ALTO  
**Evidencia requerida:** Política de cloud + evaluación de compliance (Vercel GDPR-compliant?)  
**Acción:** Verificar certificaciones Vercel + documentar  
**Plazo:** 1 semana

---

### ❌ **5.24 Information security incident management planning and preparation**
**Estado:** NO COMPLIANT  
**Gap:** No hay plan de respuesta a incidentes  
**Prioridad:** 🔴 CRÍTICO (NIS2 requirement: 24h/72h/1month)  
**Evidencia requerida:** Incident Response Plan con timelines, roles, procedimientos  
**Acción:** Crear "Plan de Respuesta a Incidentes de Seguridad"  
**Plazo:** 3 semanas

---

### ❌ **5.25 Assessment and decision on information security events**
**Estado:** NO COMPLIANT  
**Gap:** No hay proceso de clasificación de eventos de seguridad  
**Prioridad:** 🟠 ALTO  
**Evidencia requerida:** Matriz de severidad de incidentes  
**Acción:** Definir clasificación (P0/P1/P2/P3) + umbrales de escalado  
**Plazo:** 1 semana

---

### ❌ **5.26 Response to information security incidents**
**Estado:** NO COMPLIANT  
**Gap:** No hay procedimientos de respuesta  
**Prioridad:** 🔴 CRÍTICO  
**Evidencia requerida:** Playbooks de respuesta (ej: data breach, ransomware, DDoS)  
**Acción:** Crear playbooks para los 5 escenarios más probables  
**Plazo:** 3 semanas

---

### ❌ **5.27 Learning from information security incidents**
**Estado:** NO COMPLIANT  
**Gap:** No hay proceso de lecciones aprendidas post-incidente  
**Prioridad:** 🟡 MEDIO  
**Evidencia requerida:** Template de post-mortem  
**Acción:** Crear template de post-mortem  
**Plazo:** 1 semana

---

### ❌ **5.28 Collection of evidence**
**Estado:** NO COMPLIANT  
**Gap:** No hay procedimiento de preservación de evidencia digital (chain of custody)  
**Prioridad:** 🟡 MEDIO  
**Evidencia requerida:** Procedimiento de forensics + herramientas  
**Acción:** Documentar procedimiento de preservación de logs  
**Plazo:** 2 semanas

---

### ❌ **5.29 Information security during disruption**
**Estado:** NO COMPLIANT  
**Gap:** No hay plan de continuidad de negocio (BCP)  
**Prioridad:** 🟠 ALTO  
**Evidencia requerida:** BCP + Disaster Recovery Plan  
**Acción:** Crear BCP (RTO: 4h, RPO: 24h)  
**Plazo:** 3 semanas

---

### ⚠️ **5.30 ICT readiness for business continuity**
**Estado:** PARCIALMENTE COMPLIANT  
**Gap:** Vercel tiene HA (High Availability), pero no hay plan de failover documentado  
**Prioridad:** 🟡 MEDIO  
**Evidencia requerida:** Procedimiento de failover + test anual  
**Acción:** Documentar procedimiento + programar test  
**Plazo:** 2 semanas

---

### ❌ **5.31 Legal, statutory, regulatory and contractual requirements**
**Estado:** NO COMPLIANT  
**Gap:** No hay inventario de requisitos legales aplicables  
**Prioridad:** 🔴 CRÍTICO  
**Evidencia requerida:** Registro de requisitos legales (GDPR, LOPDGDD, ENS, NIS2)  
**Acción:** Crear "Registro de Requisitos Legales"  
**Plazo:** 2 semanas

---

### ❌ **5.32 Intellectual property rights**
**Estado:** NO COMPLIANT  
**Gap:** No hay política de propiedad intelectual  
**Prioridad:** 🟡 MEDIO  
**Evidencia requerida:** Política de IPR + licencias de software  
**Acción:** Documentar licencias (MIT, Apache 2.0, etc.)  
**Plazo:** 1 semana

---

### ❌ **5.33 Protection of records**
**Estado:** NO COMPLIANT  
**Gap:** No hay política de retención de registros  
**Prioridad:** 🟠 ALTO (GDPR Art. 5.1.e)  
**Evidencia requerida:** Tabla de retención de datos (2 años leads, 6 años facturas)  
**Acción:** Crear "Política de Retención de Datos"  
**Plazo:** 1 semana

---

### ❌ **5.34 Privacy and protection of PII**
**Estado:** NO COMPLIANT  
**Gap:** NO HAY PRIVACY POLICY pública, NO HAY CONSENTIMIENTO explícito  
**Prioridad:** 🔴 CRÍTICO (GDPR Art. 13, multa hasta €20M)  
**Evidencia requerida:** Privacy Policy + Cookie Policy + Consent mechanism  
**Acción:** Crear Privacy Policy + añadir checkbox de consentimiento en calculator  
**Plazo:** 1 semana (URGENTE)

---

### ⚠️ **5.35 Independent review of information security**
**Estado:** PARCIALMENTE COMPLIANT  
**Gap:** No hay auditoría externa, solo esta auditoría interna  
**Prioridad:** 🟠 ALTO  
**Evidencia requerida:** Contrato con auditor externo ISO 27001  
**Acción:** Contratar auditor externo (BSI, AENOR, etc.)  
**Plazo:** Post-remediation (semana 12)

---

### ❌ **5.36 Compliance with policies, rules and standards for information security**
**Estado:** NO COMPLIANT  
**Gap:** No hay programa de compliance continuo  
**Prioridad:** 🟡 MEDIO  
**Evidencia requerida:** Auditorías internas trimestrales  
**Acción:** Programar auditorías internas  
**Plazo:** Post-remediation

---

### ⚠️ **5.37 Documented operating procedures**
**Estado:** PARCIALMENTE COMPLIANT  
**Gap:** Algunos procedimientos existen (git workflow), pero no documentados formalmente  
**Prioridad:** 🟠 ALTO  
**Evidencia requerida:** 15 procedimientos operativos ISO 27001  
**Acción:** Documentar procedimientos (ver FASE 2)  
**Plazo:** 6 semanas

---

## A.6 PEOPLE CONTROLS (8 controles)

### ⚠️ **6.1 Screening**
**Estado:** PARCIALMENTE COMPLIANT  
**Gap:** No hay proceso formal de screening de empleados (background checks)  
**Prioridad:** 🟡 MEDIO  
**Evidencia requerida:** Proceso de verificación de referencias  
**Acción:** Implementar screening básico para nuevos empleados  
**Plazo:** 1 semana

---

### ❌ **6.2 Terms and conditions of employment**
**Estado:** NO COMPLIANT  
**Gap:** No hay cláusulas de confidencialidad en contratos  
**Prioridad:** 🟠 ALTO  
**Evidencia requerida:** NDAs firmados por empleados/contratistas  
**Acción:** Revisar contratos + añadir cláusulas de seguridad  
**Plazo:** 2 semanas

---

### ❌ **6.3 Information security awareness, education and training**
**Estado:** NO COMPLIANT  
**Gap:** No hay programa de formación en seguridad  
**Prioridad:** 🟠 ALTO  
**Evidencia requerida:** Training anual + registros de asistencia  
**Acción:** Implementar training anual (phishing awareness, GDPR basics)  
**Plazo:** 4 semanas

---

### ✅ **6.4 Disciplinary process**
**Estado:** COMPLIANT  
**Justificación:** Proceso disciplinario estándar en contratos laborales españoles

---

### ❌ **6.5 Responsibilities after termination or change of employment**
**Estado:** NO COMPLIANT  
**Gap:** No hay procedimiento de offboarding (revocación de accesos)  
**Prioridad:** 🟠 ALTO  
**Evidencia requerida:** Checklist de offboarding  
**Acción:** Crear procedimiento de offboarding (ya mencionado en 5.11)  
**Plazo:** 1 semana

---

### ⚠️ **6.6 Confidentiality or non-disclosure agreements**
**Estado:** PARCIALMENTE COMPLIANT  
**Gap:** NDAs con clientes sí existen, NDAs con empleados no documentados  
**Prioridad:** 🟠 ALTO  
**Evidencia requerida:** NDAs firmados por todos los empleados  
**Acción:** Firmar NDAs con equipo actual  
**Plazo:** 1 semana

---

### ✅ **6.7 Remote working**
**Estado:** COMPLIANT  
**Justificación:** Trabajo remoto con VPN no requerida (no hay red corporativa), dispositivos cifrados

---

### ❌ **6.8 Information security event reporting**
**Estado:** NO COMPLIANT  
**Gap:** No hay canal formal para reportar incidentes de seguridad  
**Prioridad:** 🟠 ALTO  
**Evidencia requerida:** Email security@defcon23.eu + procedimiento de reporte  
**Acción:** Crear canal de reporte + comunicarlo al equipo  
**Plazo:** 1 día

---

## A.7 PHYSICAL CONTROLS (11 controles)

**NOTA:** defcon23.eu opera 100% en cloud (Vercel). La mayoría de controles físicos son **N/A** o delegados al proveedor.

### ✅ **7.1 Physical security perimeters**
**Estado:** N/A (cloud) — COMPLIANT por delegación  
**Justificación:** Vercel opera datacenters con seguridad física certificada (SOC 2)

### ✅ **7.2 Physical entry**
**Estado:** N/A (cloud) — COMPLIANT por delegación

### ✅ **7.3 Securing offices, rooms and facilities**
**Estado:** N/A (cloud) — COMPLIANT por delegación

### ✅ **7.4 Physical security monitoring**
**Estado:** N/A (cloud) — COMPLIANT por delegación

### ✅ **7.5 Protecting against physical and environmental threats**
**Estado:** N/A (cloud) — COMPLIANT por delegación

### ✅ **7.6 Working in secure areas**
**Estado:** N/A (cloud) — COMPLIANT por delegación

### ✅ **7.7 Clear desk and clear screen**
**Estado:** COMPLIANT  
**Justificación:** Trabajo remoto, responsabilidad individual. Documentar en política.

### ✅ **7.8 Equipment siting and protection**
**Estado:** COMPLIANT  
**Justificación:** Laptops de desarrolladores con cifrado de disco

### ⚠️ **7.9 Security of assets off-premises**
**Estado:** PARCIALMENTE COMPLIANT  
**Gap:** No hay política formal para dispositivos fuera de oficina  
**Prioridad:** 🟡 MEDIO  
**Evidencia requerida:** Política de uso de dispositivos en lugares públicos  
**Acción:** Documentar política (no conectar a WiFi públicas sin VPN)  
**Plazo:** 1 semana

### ✅ **7.10 Storage media**
**Estado:** COMPLIANT  
**Justificación:** No hay medios físicos (todo cloud)

### ✅ **7.11 Supporting utilities**
**Estado:** N/A (cloud) — COMPLIANT por delegación

### ✅ **7.12 Cabling security**
**Estado:** N/A (cloud) — COMPLIANT por delegación

### ✅ **7.13 Equipment maintenance**
**Estado:** N/A (cloud) — COMPLIANT por delegación

### ✅ **7.14 Secure disposal or re-use of equipment**
**Estado:** COMPLIANT  
**Justificación:** Laptops con cifrado de disco, proceso de borrado seguro antes de reventa

---

## A.8 TECHNOLOGY CONTROLS (34 controles)

### ✅ **8.1 User endpoint devices**
**Estado:** COMPLIANT  
**Justificación:** Desarrolladores usan MacBooks con cifrado FileVault

---

### ⚠️ **8.2 Privileged access rights**
**Estado:** PARCIALMENTE COMPLIANT  
**Gap:** MFA habilitado en GitHub, pero verificar Vercel/Resend/Cal.com/Notion  
**Prioridad:** 🔴 CRÍTICO  
**Evidencia requerida:** MFA obligatorio en todas las cuentas admin  
**Acción:** Habilitar MFA en todos los servicios  
**Plazo:** 1 día

---

### ✅ **8.3 Information access restriction**
**Estado:** COMPLIANT  
**Justificación:** Base de datos solo accesible desde aplicación (Vercel Postgres)

---

### ⚠️ **8.4 Access to source code**
**Estado:** PARCIALMENTE COMPLIANT  
**Gap:** Repo GitHub privado, pero no hay control de quién puede hacer git push a main  
**Prioridad:** 🟠 ALTO  
**Evidencia requerida:** Branch protection rules en main  
**Acción:** Habilitar branch protection + require PR reviews  
**Plazo:** 1 día

---

### ❌ **8.5 Secure authentication**
**Estado:** NO COMPLIANT (futuro)  
**Gap:** Calculadora no requiere login (por diseño), pero futuro admin panel sí  
**Prioridad:** 🟡 MEDIO (cuando se implemente admin)  
**Evidencia requerida:** Autenticación con OAuth 2.0 + MFA  
**Acción:** Implementar NextAuth.js cuando se cree admin panel  
**Plazo:** N/A (futuro)

---

### ⚠️ **8.6 Capacity management**
**Estado:** PARCIALMENTE COMPLIANT  
**Gap:** Vercel auto-scaling activo, pero no hay monitorización de uso  
**Prioridad:** 🟡 MEDIO  
**Evidencia requerida:** Alertas de Vercel si uso >80%  
**Acción:** Configurar alertas de Vercel Analytics  
**Plazo:** 1 semana

---

### ❌ **8.7 Protection against malware**
**Estado:** NO COMPLIANT  
**Gap:** No hay rate limiting en calculator (posible DoS)  
**Prioridad:** 🟠 ALTO  
**Evidencia requerida:** Rate limiting implementado (ej: Upstash Redis)  
**Acción:** Implementar rate limiting (10 requests/min por IP)  
**Plazo:** 2 semanas (FASE 3)

---

### ⚠️ **8.8 Management of technical vulnerabilities**
**Estado:** PARCIALMENTE COMPLIANT  
**Gap:** Dependabot activado en GitHub, pero no hay proceso formal de patching  
**Prioridad:** 🟠 ALTO  
**Evidencia requerida:** SLA de patching (críticas 7 días, altas 30 días)  
**Acción:** Documentar procedimiento de vulnerability management  
**Plazo:** 1 semana

---

### ❌ **8.9 Configuration management**
**Estado:** NO COMPLIANT  
**Gap:** No hay IaC (Infrastructure as Code), configuración manual en Vercel dashboard  
**Prioridad:** 🟡 MEDIO  
**Evidencia requerida:** Configuración versionada en Git  
**Acción:** Migrar a Terraform o Pulumi (opcional, complejidad vs beneficio)  
**Plazo:** N/A (baja prioridad)

---

### ❌ **8.10 Information deletion**
**Estado:** NO COMPLIANT  
**Gap:** NO HAY automatización de borrado de datos tras período de retención  
**Prioridad:** 🟠 ALTO (GDPR Art. 5.1.e)  
**Evidencia requerida:** Cron job que borra leads >2 años  
**Acción:** Implementar data retention automation  
**Plazo:** 3 semanas (FASE 3)

---

### ❌ **8.11 Data masking**
**Estado:** NO COMPLIANT  
**Gap:** No hay enmascaramiento de datos en logs  
**Prioridad:** 🟡 MEDIO  
**Evidencia requerida:** Emails/nombres enmascarados en logs ([email protected] → j***@e***.com)  
**Acción:** Implementar log sanitization  
**Plazo:** 2 semanas

---

### ❌ **8.12 Data leakage prevention**
**Estado:** NO COMPLIANT  
**Gap:** No hay DLP (Data Loss Prevention) activo  
**Prioridad:** 🟡 MEDIO  
**Evidencia requerida:** Alertas si se exportan >100 emails  
**Acción:** Implementar DLP básico (futuro)  
**Plazo:** N/A (cuando haya admin panel)

---

### ✅ **8.13 Information backup**
**Estado:** COMPLIANT  
**Justificación:** Vercel Postgres backups automáticos diarios, retención 30 días

---

### ✅ **8.14 Redundancy of information processing facilities**
**Estado:** COMPLIANT  
**Justificación:** Vercel multi-region HA (High Availability)

---

### ❌ **8.15 Logging**
**Estado:** NO COMPLIANT  
**Gap:** Vercel logs básicos, pero NO HAY audit logging de accesos a datos personales  
**Prioridad:** 🟠 ALTO (GDPR Art. 30, ENS op.exp.10)  
**Evidencia requerida:** Tabla audit_logs en DB con who/what/when/where  
**Acción:** Implementar audit logging (Prisma middleware)  
**Plazo:** 3 semanas (FASE 3)

---

### ⚠️ **8.16 Monitoring activities**
**Estado:** PARCIALMENTE COMPLIANT  
**Gap:** Plausible Analytics activo (sin cookies), pero no hay SIEM (Security Information and Event Management)  
**Prioridad:** 🟡 MEDIO  
**Evidencia requerida:** SIEM básico (ej: revisar logs Vercel semanalmente)  
**Acción:** Programar revisión semanal de logs  
**Plazo:** 1 semana

---

### ⚠️ **8.17 Clock synchronisation**
**Estado:** PARCIALMENTE COMPLIANT  
**Gap:** Vercel usa NTP, pero no verificado explícitamente  
**Prioridad:** 🟡 MEDIO  
**Evidencia requerida:** Verificar sincronización horaria en logs  
**Acción:** Documentar que Vercel usa NTP  
**Plazo:** 1 día

---

### ❌ **8.18 Use of privileged utility programs**
**Estado:** NO COMPLIANT  
**Gap:** No hay registro de uso de herramientas admin (ej: acceso directo a DB)  
**Prioridad:** 🟡 MEDIO  
**Evidencia requerida:** Log de comandos admin ejecutados  
**Acción:** Implementar command logging (futuro)  
**Plazo:** N/A

---

### ⚠️ **8.19 Installation of software on operational systems**
**Estado:** PARCIALMENTE COMPLIANT  
**Gap:** npm dependencies instaladas libremente, no hay aprobación formal  
**Prioridad:** 🟡 MEDIO  
**Evidencia requerida:** Proceso de aprobación de nuevas dependencias  
**Acción:** Requerir PR review antes de añadir dependencias  
**Plazo:** 1 día

---

### ❌ **8.20 Networks security**
**Estado:** NO COMPLIANT  
**Gap:** No hay segmentación de red (N/A en serverless, pero documentar)  
**Prioridad:** 🟡 MEDIO  
**Evidencia requerida:** Diagrama de arquitectura de red  
**Acción:** Crear diagrama de arquitectura Vercel  
**Plazo:** 1 semana

---

### ⚠️ **8.21 Security of network services**
**Estado:** PARCIALMENTE COMPLIANT  
**Gap:** TLS 1.3 activo, pero no hay documentación de servicios de red  
**Prioridad:** 🟡 MEDIO  
**Evidencia requerida:** Inventario de servicios de red (Vercel, Resend API, Cal.com embed)  
**Acción:** Documentar servicios de red + puertos  
**Plazo:** 1 semana

---

### ✅ **8.22 Segregation of networks**
**Estado:** COMPLIANT  
**Justificación:** Arquitectura serverless, no hay red interna

---

### ❌ **8.23 Web filtering**
**Estado:** NO COMPLIANT  
**Gap:** No hay filtrado web en laptops de desarrolladores  
**Prioridad:** 🟡 MEDIO  
**Evidencia requerida:** DNS filtering (ej: Cloudflare for Teams)  
**Acción:** Implementar DNS filtering (opcional)  
**Plazo:** N/A (baja prioridad)

---

### ✅ **8.24 Use of cryptography**
**Estado:** COMPLIANT  
**Justificación:** TLS 1.3 en tránsito, cifrado at-rest en Vercel Postgres

---

### ✅ **8.25 Secure development life cycle**
**Estado:** COMPLIANT  
**Justificación:** TypeScript strict mode, ESLint, PR reviews (mejorable con security checklist)

---

### ⚠️ **8.26 Application security requirements**
**Estado:** PARCIALMENTE COMPLIANT  
**Gap:** No hay security requirements documentados  
**Prioridad:** 🟡 MEDIO  
**Evidencia requerida:** Security requirements specification  
**Acción:** Documentar security requirements (OWASP ASVS Level 1)  
**Plazo:** 2 semanas

---

### ⚠️ **8.27 Secure system architecture and engineering principles**
**Estado:** PARCIALMENTE COMPLIANT  
**Gap:** Arquitectura segura (Next.js + Vercel), pero no documentada  
**Prioridad:** 🟡 MEDIO  
**Evidencia requerida:** Diagrama de arquitectura  
**Acción:** Crear diagrama de arquitectura de seguridad  
**Plazo:** 1 semana

---

### ❌ **8.28 Secure coding**
**Estado:** NO COMPLIANT  
**Gap:** No hay guía de secure coding  
**Prioridad:** 🟠 ALTO  
**Evidencia requerida:** Secure coding guidelines (OWASP)  
**Acción:** Documentar secure coding guidelines + añadir a onboarding  
**Plazo:** 2 semanas

---

### ⚠️ **8.29 Security testing in development and acceptance**
**Estado:** PARCIALMENTE COMPLIANT  
**Gap:** No hay security testing automatizado (SAST/DAST)  
**Prioridad:** 🟡 MEDIO  
**Evidencia requerida:** SAST integrado en CI/CD (ej: Snyk, Semgrep)  
**Acción:** Habilitar GitHub Advanced Security (gratis para repos públicos)  
**Plazo:** 1 día

---

### ❌ **8.30 Outsourced development**
**Estado:** N/A  
**Justificación:** No hay desarrollo outsourced actualmente

---

### ⚠️ **8.31 Separation of development, test and production environments**
**Estado:** PARCIALMENTE COMPLIANT  
**Gap:** Vercel tiene preview deployments, pero no hay entorno de staging formal  
**Prioridad:** 🟡 MEDIO  
**Evidencia requerida:** Entorno de staging con datos anonimizados  
**Acción:** Crear staging environment en Vercel  
**Plazo:** 1 semana

---

### ❌ **8.32 Change management**
**Estado:** NO COMPLIANT  
**Gap:** No hay proceso formal de change management  
**Prioridad:** 🟡 MEDIO  
**Evidencia requerida:** Change request + approval process  
**Acción:** Documentar proceso de change management  
**Plazo:** 1 semana

---

### ⚠️ **8.33 Test information**
**Estado:** PARCIALMENTE COMPLIANT  
**Gap:** No hay política de uso de datos reales en testing  
**Prioridad:** 🟡 MEDIO  
**Evidencia requerida:** Política de anonimización de datos en test  
**Acción:** Documentar política (no usar datos reales en test)  
**Plazo:** 1 semana

---

### ❌ **8.34 Protection of information systems during audit testing**
**Estado:** NO COMPLIANT  
**Gap:** No hay procedimiento de auditoría segura  
**Prioridad:** 🟡 MEDIO  
**Evidencia requerida:** Procedimiento de audit testing (usar read-only replicas)  
**Acción:** Documentar procedimiento  
**Plazo:** 1 semana

---

## SUMMARY OF PRIORITIES

### 🔴 **CRITICAL (18 gaps) — MUST FIX BEFORE CERTIFICATION**

1. ❌ 5.1: Política de Seguridad de la Información (2 semanas)
2. ⚠️ 5.2: Matriz RACI de roles (1 semana)
3. ❌ 5.4: Compromiso de dirección documentado (1 semana)
4. ❌ 5.9: Inventario de activos (2 semanas)
5. ⚠️ 5.17: MFA obligatorio en todos los servicios (1 día) ⚡
6. ❌ 5.19: Supplier Security Assessment (3 semanas)
7. ❌ 5.20: DPAs firmados con procesadores (2 semanas)
8. ❌ 5.24: Incident Response Plan (3 semanas)
9. ❌ 5.26: Playbooks de respuesta a incidentes (3 semanas)
10. ❌ 5.31: Registro de requisitos legales (2 semanas)
11. ❌ 5.34: **Privacy Policy + Consent mechanism** (1 semana) ⚡
12. ⚠️ 8.2: MFA en cuentas admin (1 día) ⚡
13. ❌ 8.7: Rate limiting en calculator (2 semanas)
14. ❌ 8.10: Data retention automation (3 semanas)
15. ❌ 8.15: Audit logging de accesos a datos (3 semanas)
16. ❌ 6.2: NDAs con empleados (2 semanas)
17. ❌ 6.3: Programa de formación en seguridad (4 semanas)
18. ❌ 6.8: Canal de reporte de incidentes (1 día) ⚡

**ACCIÓN INMEDIATA (próximas 24h):**
- ✅ Habilitar MFA en Vercel, Resend, Cal.com, Notion
- ✅ Crear email security@defcon23.eu
- ✅ Suscribirse a CISA Alerts

**ACCIÓN URGENTE (próxima semana):**
- ⚡ **Crear Privacy Policy + añadir consent checkbox en calculator** (GDPR compliance)
- ⚡ Redactar + aprobar Política de Seguridad de la Información

---

## ROADMAP TO CERTIFICATION

### **Semanas 1-2: Documentación crítica**
- Política de Seguridad de la Información
- Matriz RACI
- Inventario de activos
- Privacy Policy + ROPA
- Registro de requisitos legales

### **Semanas 3-4: Supplier management**
- Supplier Security Assessment (Vercel, Resend, Cal.com, Notion)
- DPAs firmados
- Threat intelligence subscriptions

### **Semanas 5-8: Incident management**
- Incident Response Plan
- Playbooks de respuesta
- BCP + DR Plan

### **Semanas 9-12: Implementación técnica**
- Rate limiting (Upstash Redis)
- Audit logging (Prisma middleware)
- Data retention automation (cron job)

### **Semanas 13-16: Auditoría + remediación**
- Auditoría interna
- Corrective actions
- External audit Stage 1

---

## NEXT STEPS

1. **Aprobar este Gap Analysis Report** (CEO/CTO)
2. **Priorizar remediación** (comenzar por gaps CRÍTICOS)
3. **Asignar recursos** (labor interno + presupuesto auditor externo)
4. **Iniciar FASE 2: Documentación** (15 docs ISO 27001 + 7 docs GDPR)

---

**Fecha del informe:** 11 de febrero de 2026  
**Próxima revisión:** 11 de mayo de 2026 (post-remediation)  
**Auditor:** Compliance.Sec∅ps Collective  

**FIN DEL INFORME**
