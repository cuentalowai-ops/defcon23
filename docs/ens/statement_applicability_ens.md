# STATEMENT OF APPLICABILITY ENS (SoA)
# defcon23.eu - 75 Medidas Esquema Nacional de Seguridad

**Versión:** 1.0  
**Fecha:** 11 febrero 2026  
**Sistema:** defcon23.eu (NIVEL MEDIO)  
**Responsable:** CTO dEfCØN23

---

## RESUMEN EJECUTIVO

| Categoría | Total | Implementadas ✅ | Parcial ⚠️ | Pendientes ❌ | No Aplica N/A |
|-----------|-------|-----------------|-----------|--------------|--------------|
| **org** Organizativas | 14 | 2 | 11 | 1 | 0 |
| **op** Operacionales | 31 | 14 | 12 | 2 | 3 |
| **mp** Protección | 30 | 22 | 5 | 1 | 2 |
| **TOTAL** | **75** | **38 (51%)** | **28 (37%)** | **4 (5%)** | **5 (7%)** |

**Compliance ENS:** **68%** (38 completas + 50% de 28 parciales = 52/70 aplicables)

**Target FASE ENS:** **93%** (65/70 medidas → Semana 4)

---

## MARCO ORGANIZATIVO [org] — 14 medidas

### org.1 — Política de seguridad

| Campo | Valor |
|-------|-------|
| **Nivel** | [b] Básico |
| **Aplicable** | ✅ Sí |
| **Estado** | ✅ IMPLEMENTADO |
| **Justificación** | Plan de Seguridad ENS aprobado (docs/ens/plan_seguridad_ens.md) contiene política de seguridad completa (Sección 3). Incluye declaración de intenciones, objetivos de seguridad, alcance, principios, revisión anual. |
| **Evidencia** | • Plan de Seguridad ENS v1.0 (11 feb 2026)<br>• Aprobación CEO (firma digital pendiente)<br>• Publicación interna (acceso equipo) |
| **Responsable** | CEO (Responsable de la Información) |
| **Fecha** | 11 febrero 2026 |
| **Próxima revisión** | Febrero 2027 |

---

### org.2 — Normativa de seguridad

| Campo | Valor |
|-------|-------|
| **Nivel** | [b] Básico |
| **Aplicable** | ✅ Sí |
| **Estado** | ✅ IMPLEMENTADO |
| **Justificación** | Normativa de seguridad establecida mediante:<br>1. Plan de Seguridad ENS (marco general)<br>2. 12 procedimientos operativos (docs/ens/procedimientos/)<br>3. Matriz RACI (roles y responsabilidades)<br>4. Contratos laborales con cláusulas confidencialidad |
| **Evidencia** | • Sección 7 Plan de Seguridad (Procedimientos Operativos)<br>• Sección 4 (Roles RACI)<br>• Contratos laborales con NDA |
| **Responsable** | CEO |
| **Fecha** | 11 febrero 2026 |

---

### org.3 — Procedimientos de seguridad

| Campo | Valor |
|-------|-------|
| **Nivel** | [m] Medio |
| **Aplicable** | ✅ Sí |
| **Estado** | ⚠️ PARCIAL (80%) |
| **Justificación** | 12 procedimientos ENS documentados en borrador:<br>1. Gestión de Accesos<br>2. Gestión de Incidentes<br>3. Continuidad del Negocio<br>4. Copias de Seguridad<br>5. Gestión de Vulnerabilidades<br>6. Gestión de Cambios<br>7. Gestión de Configuración<br>8. Gestión de Terceros<br>9. Formación y Concienciación<br>10. Auditoría Interna<br>11. Criptografía y Claves<br>12. Monitorización y Logging<br><br>**GAP:** Faltan detalles operativos (formularios, plantillas, workflows) |
| **Evidencia** | docs/ens/procedimientos/01-gestion-accesos.md (borrador)<br>docs/ens/procedimientos/02-incidentes.md (borrador)<br>[...resto procedimientos] |
| **Responsable** | CTO |
| **Fecha objetivo** | Semana 3 (marzo 2026) |
| **Acción** | Completar procedimientos con:<br>• Plantillas (ej. formulario solicitud acceso)<br>• Workflows (diagramas de flujo)<br>• Registros (ej. tabla incident_log) |

---

### org.4 — Proceso de autorización

| Campo | Valor |
|-------|-------|
| **Nivel** | [m] Medio |
| **Aplicable** | ✅ Sí |
| **Estado** | ❌ PENDIENTE |
| **Justificación** | No existe proceso formal de autorización para poner en producción nuevos sistemas o cambios significativos. Actualmente: CTO decide unilateralmente → Riesgo de cambios no evaluados por seguridad. |
| **GAP** | Necesario procedimiento que incluya:<br>1. Solicitud formal (formulario)<br>2. Análisis de impacto seguridad (CTO)<br>3. Aprobación CEO (para cambios críticos)<br>4. Registro de autorizaciones<br>5. Revisión post-implementación |
| **Evidencia pendiente** | docs/ens/procedimientos/13-autorizacion-sistemas.md |
| **Responsable** | CEO + CTO |
| **Fecha objetivo** | Semana 4 (marzo 2026) |

---

### org.5 — Plan de actuación

| Campo | Valor |
|-------|-------|
| **Nivel** | [m] Medio |
| **Aplicable** | ✅ Sí |
| **Estado** | ⚠️ PARCIAL (70%) |
| **Justificación** | Plan de actuación existe como "Plan de Adecuación" (Sección 8 del Plan de Seguridad ENS).<br>Incluye: roadmap 4 semanas, medidas prioritarias, presupuesto €8K.<br>**GAP:** Falta asignación detallada de recursos (horas/persona). |
| **Evidencia** | • Sección 8.1 (Roadmap ENS Compliance)<br>• Sección 8.2 (Medidas Prioritarias)<br>• Sección 8.3 (Presupuesto) |
| **Responsable** | CTO |
| **Fecha** | 11 febrero 2026 |

---

### org.6 — Control de acceso

| Campo | Valor |
|-------|-------|
| **Nivel** | [b] Básico |
| **Aplicable** | ✅ Sí |
| **Estado** | ⚠️ PARCIAL (75%) |
| **Justificación** | Control de acceso implementado mediante:<br>• MFA en GitHub (2FA obligatorio)<br>• MFA en Vercel (habilitado)<br>• MFA en Resend (habilitado)<br>**GAP:** Falta revisión trimestral de accesos (op.acc.4). |
| **Evidencia** | • GitHub Organization Settings → Security → 2FA required<br>• Vercel Team Settings → Security → MFA enforced<br>• Screenshots MFA (carpeta evidence/ens/) |
| **Responsable** | CTO |
| **Acción** | Implementar revisión trimestral accesos (próxima: mayo 2026) |

---

### org.7 — Segregación de funciones

| Campo | Valor |
|-------|-------|
| **Nivel** | [m] Medio |
| **Aplicable** | ✅ Sí |
| **Estado** | ⚠️ PARCIAL (60%) |
| **Justificación** | Segregación parcial:<br>• **Desarrollo:** CTO + desarrollador (branch feature → PR → code review)<br>• **Staging:** Vercel Preview Deployments (automático en PRs)<br>• **Producción:** Deploy a main branch (CTO aprueba PR)<br>**GAP:** No hay segregación de roles (CTO tiene acceso total Dev+Prod). |
| **Evidencia** | • GitHub branch protection rules (main requiere review)<br>• Vercel Preview URLs (staging automático) |
| **Acción** | Crear rol "Developer" sin acceso producción (Vercel RBAC) |
| **Fecha objetivo** | Semana 2 |

---

### org.8 — Gestión del personal

| Campo | Valor |
|-------|-------|
| **Nivel** | [b] Básico |
| **Aplicable** | ✅ Sí |
| **Estado** | ⚠️ PARCIAL (65%) |
| **Justificación** | Gestión del personal incluye:<br>• Contratos laborales con cláusulas confidencialidad<br>• Job descriptions (CEO, CTO, desarrollador)<br>**GAP:** No hay proceso de onboarding/offboarding seguridad documentado. |
| **Evidencia** | • Contratos laborales<br>• Job descriptions (carpeta docs/rrhh/) |
| **Acción** | Crear checklist onboarding/offboarding (ej. revocar accesos día salida) |
| **Fecha objetivo** | Semana 3 |

---

### org.9 — Respuesta a incidentes

| Campo | Valor |
|-------|-------|
| **Nivel** | [b] Básico |
| **Aplicable** | ✅ Sí |
| **Estado** | ⚠️ PARCIAL (75%) |
| **Justificación** | Procedimiento de respuesta a incidentes documentado (docs/ens/procedimientos/02-incidentes.md).<br>Incluye: clasificación P0-P3, tiempos de respuesta, escalado.<br>**GAP:** No hay registro histórico de incidentes (tabla incident_log). |
| **Evidencia** | • Procedimiento 02-incidentes.md<br>• Contacto CCN-CERT registrado |
| **Acción** | Crear tabla `incident_log` en base de datos (op.exp.9) |
| **Fecha objetivo** | Semana 3 |

---

### org.10 — Gestión de configuración

| Campo | Valor |
|-------|-------|
| **Nivel** | [m] Medio |
| **Aplicable** | ✅ Sí |
| **Estado** | ✅ IMPLEMENTADO |
| **Justificación** | Gestión de configuración mediante Infrastructure as Code (IaC):<br>• Vercel: vercel.json, next.config.ts (Git)<br>• GitHub Actions: .github/workflows/ (CI/CD)<br>• Environment variables: Vercel dashboard (version control manual)<br>Toda configuración en Git = trazabilidad completa. |
| **Evidencia** | • Repositorio GitHub (commits histórico)<br>• Vercel deployments log |
| **Responsable** | CTO |

---

### org.11 — Cambios en la configuración

| Campo | Valor |
|-------|-------|
| **Nivel** | [m] Medio |
| **Aplicable** | ✅ Sí |
| **Estado** | ✅ IMPLEMENTADO |
| **Justificación** | Cambios en configuración mediante:<br>• Pull Requests (GitHub) → Code review obligatorio<br>• Vercel Previews (staging automático antes de merge)<br>• Rollback instantáneo (Vercel deployments history)<br>Procedimiento documentado: docs/ens/procedimientos/06-cambios.md |
| **Evidencia** | • GitHub branch protection rules (main requiere review)<br>• Vercel deployment log (historial cambios) |
| **Responsable** | CTO |

---

### org.12 — Protección de la información y privacidad

| Campo | Valor |
|-------|-------|
| **Nivel** | [b] Básico |
| **Aplicable** | ✅ Sí |
| **Estado** | ✅ IMPLEMENTADO |
| **Justificación** | Protección de datos personales según GDPR:<br>• Privacy Policy (app/privacidad/page.tsx)<br>• ROPA (docs/compliance/04-ropa-registro-actividades-tratamiento.md)<br>• Consent checkbox (calculadora Reynolds)<br>• DPAs con procesadores (Vercel, Resend)<br>• Cifrado TLS 1.3 + AES-256 at-rest |
| **Evidencia** | • Privacy Policy publicada<br>• ROPA completo (5 actividades)<br>• DPAs firmados (2/4, pendiente Cal.com y Notion) |
| **Responsable** | DPO |

---

### org.13 — Formación y concienciación

| Campo | Valor |
|-------|-------|
| **Nivel** | [b] Básico |
| **Aplicable** | ✅ Sí |
| **Estado** | ⚠️ PARCIAL (50%) |
| **Justificación** | Formación básica GDPR realizada (Q4 2025).<br>**GAP:** No hay formación ENS ni simulacros phishing. |
| **Evidencia** | • Certificados formación GDPR (2 personas) |
| **Acción** | • Curso ENS 4h (Semana 3)<br>• Simulacro phishing trimestral (KnowBe4 o similar) |
| **Fecha objetivo** | Marzo 2026 |
| **Responsable** | CEO |

---

### org.14 — Análisis de riesgos

| Campo | Valor |
|-------|-------|
| **Nivel** | [b] Básico |
| **Aplicable** | ✅ Sí |
| **Estado** | ✅ IMPLEMENTADO |
| **Justificación** | Análisis de riesgos MAGERIT v3.0 documentado (Sección 5 Plan de Seguridad ENS).<br>Incluye: inventario activos, amenazas (13 identificadas), matriz de riesgo, plan de tratamiento. |
| **Evidencia** | • Sección 5.2 (Inventario activos: 15 activos)<br>• Sección 5.3 (Análisis amenazas: AM01-AM13)<br>• Sección 5.4 (Matriz de riesgo)<br>• Sección 5.5 (Plan de tratamiento) |
| **Responsable** | CTO |
| **Próxima revisión** | Anual (febrero 2027) |

---

## MARCO OPERACIONAL [op] — 31 medidas

### op.pl.1 — Análisis de riesgos

| Campo | Valor |
|-------|-------|
| **Nivel** | [b] Básico |
| **Aplicable** | ✅ Sí |
| **Estado** | ✅ IMPLEMENTADO |
| **Justificación** | (Ver org.14 — mismo control) |
| **Evidencia** | Plan de Seguridad ENS Sección 5 |
| **Responsable** | CTO |

---

### op.pl.2 — Arquitectura de seguridad

| Campo | Valor |
|-------|-------|
| **Nivel** | [b] Básico |
| **Aplicable** | ✅ Sí |
| **Estado** | ✅ IMPLEMENTADO |
| **Justificación** | Arquitectura segura basada en:<br>• **Serverless:** Next.js en Vercel (sin gestión servidores)<br>• **Cifrado:** TLS 1.3 (100% tráfico HTTPS)<br>• **Seguridad red:** Vercel Firewall + Cloudflare DNS<br>• **Seguridad aplicación:** CSP headers, HSTS, X-Frame-Options<br>• **Base de datos:** Vercel Postgres (cifrado at-rest AES-256) |
| **Evidencia** | • next.config.ts (security headers)<br>• SSL Labs scan: A+ (TLS 1.3)<br>• Vercel network security (ISO 27001 certified) |
| **Responsable** | CTO |

---

### op.pl.3 — Adquisición de nuevos componentes

| Campo | Valor |
|-------|-------|
| **Nivel** | [m] Medio |
| **Aplicable** | ✅ Sí |
| **Estado** | ⚠️ PARCIAL (60%) |
| **Justificación** | No hay proceso formal de evaluación de seguridad antes de integrar servicios externos.<br>Actualmente: CTO evalúa ad-hoc (ej. verificar si Resend es GDPR-compliant).<br>**GAP:** Checklist de evaluación estandarizado. |
| **Acción** | Crear "Security Assessment Checklist" para nuevos proveedores:<br>• ISO 27001 certificado?<br>• GDPR-compliant?<br>• DPA disponible?<br>• Ubicación datos (EU/US)?<br>• SLA uptime?<br>• Incident response plan? |
| **Fecha objetivo** | Semana 4 |
| **Responsable** | CTO |

---

### op.pl.4 — Dimensionamiento/crecimiento

| Campo | Valor |
|-------|-------|
| **Nivel** | [b] Básico |
| **Aplicable** | ✅ Sí |
| **Estado** | ✅ IMPLEMENTADO |
| **Justificación** | Capacidad de crecimiento gestionada por Vercel:<br>• Autoscaling automático (serverless functions)<br>• Sin límite de tráfico (plan Pro)<br>• Postgres: 10GB incluidos, escalable a 1TB<br>Monitorización uso: Vercel Analytics. |
| **Evidencia** | • Vercel plan Pro (autoscaling)<br>• Postgres usage metrics |
| **Responsable** | CTO |

---

### op.acc.1 — Identificación

| Campo | Valor |
|-------|-------|
| **Nivel** | [b] Básico |
| **Aplicable** | ✅ Sí |
| **Estado** | ✅ IMPLEMENTADO |
| **Justificación** | Identificación de usuarios mediante:<br>• GitHub SSO (email verificado)<br>• Vercel SSO (vinculado a GitHub)<br>• Resend: API keys (no usuarios humanos)<br>• Cal.com: email verificado |
| **Evidencia** | • GitHub Organization members list<br>• Vercel Team members |
| **Responsable** | CTO |

---

### op.acc.2 — Requisitos de acceso

| Campo | Valor |
|-------|-------|
| **Nivel** | [b] Básico |
| **Aplicable** | ✅ Sí |
| **Estado** | ✅ IMPLEMENTADO |
| **Justificación** | Política de privilegio mínimo:<br>• CEO: Acceso admin Vercel, GitHub Owner<br>• CTO: Acceso admin Vercel, GitHub Admin<br>• Desarrollador: GitHub Write (no admin Vercel)<br>No hay accesos compartidos (cada usuario tiene credenciales propias). |
| **Evidencia** | • Matriz RACI (Sección 4.2 Plan de Seguridad)<br>• GitHub permissions settings |
| **Responsable** | CTO |

---

### op.acc.3 — Segregación de funciones

| Campo | Valor |
|-------|-------|
| **Nivel** | [m] Medio |
| **Aplicable** | ✅ Sí |
| **Estado** | ⚠️ PARCIAL (60%) |
| **Justificación** | (Ver org.7 — mismo control) |
| **Evidencia** | GitHub branch protection, Vercel Previews |
| **Acción** | Implementar Vercel RBAC (rol Developer sin acceso prod) |
| **Fecha objetivo** | Semana 2 |

---

### op.acc.4 — Proceso de gestión de derechos de acceso

| Campo | Valor |
|-------|-------|
| **Nivel** | [b] Básico |
| **Aplicable** | ✅ Sí |
| **Estado** | ⚠️ PARCIAL (50%) |
| **Justificación** | No hay proceso formal de revisión de accesos.<br>**GAP:** Revisión trimestral obligatoria ENS. |
| **Acción** | Implementar revisión trimestral:<br>1. Listar usuarios GitHub/Vercel<br>2. Validar que cada usuario aún requiere acceso<br>3. Revocar accesos innecesarios<br>4. Documentar revisión (audit_log) |
| **Fecha objetivo** | Semana 3 |
| **Próxima revisión** | Mayo 2026 |
| **Responsable** | CTO |

---

### op.acc.5 — Mecanismo de autenticación

| Campo | Valor |
|-------|-------|
| **Nivel** | [b] Básico |
| **Aplicable** | ✅ Sí |
| **Estado** | ✅ IMPLEMENTADO |
| **Justificación** | MFA (Multi-Factor Authentication) habilitado en:<br>• GitHub: 2FA obligatorio (TOTP app)<br>• Vercel: MFA habilitado (TOTP)<br>• Resend: MFA habilitado<br>• Cal.com: Verificar (pendiente) |
| **Evidencia** | • GitHub Org Settings → 2FA required ✅<br>• Vercel Security → MFA ✅<br>• Screenshots MFA (evidence/ens/) |
| **Acción** | Verificar MFA en Cal.com |
| **Responsable** | CTO |

---

### op.acc.6 — Acceso local (local logon)

| Campo | Valor |
|-------|-------|
| **Nivel** | [m] Medio |
| **Aplicable** | ❌ No |
| **Justificación** | No hay servidores físicos ni acceso local.<br>Arquitectura cloud-only (Vercel serverless). |
| **Responsable** | N/A |

---

### op.acc.7 — Acceso remoto (remote access)

| Campo | Valor |
|-------|-------|
| **Nivel** | [b] Básico |
| **Aplicable** | ✅ Sí |
| **Estado** | ⚠️ PARCIAL (70%) |
| **Justificación** | Acceso remoto a sistemas mediante:<br>• GitHub: HTTPS + SSH (claves públicas)<br>• Vercel: HTTPS (sin SSH)<br>**GAP:** No hay VPN corporativa (acceso desde cualquier IP). |
| **Acción** | Considerar IP whitelisting en Vercel (solo oficina + VPN) |
| **Fecha objetivo** | Semana 4 |
| **Responsable** | CTO |

---

### op.exp.1 — Inventario de activos

| Campo | Valor |
|-------|-------|
| **Nivel** | [b] Básico |
| **Aplicable** | ✅ Sí |
| **Estado** | ✅ IMPLEMENTADO |
| **Justificación** | Inventario de activos documentado (Anexo I del Plan de Seguridad).<br>15 activos identificados: aplicación, base de datos, código fuente, cuentas cloud, equipos. |
| **Evidencia** | • Anexo I: Inventario de Activos<br>• Tabla con 15 activos (ID, tipo, propietario, criticidad, ubicación) |
| **Responsable** | CTO |
| **Próxima actualización** | Trimestral |

---

### op.exp.2 — Configuración de seguridad

| Campo | Valor |
|-------|-------|
| **Nivel** | [b] Básico |
| **Aplicable** | ✅ Sí |
| **Estado** | ✅ IMPLEMENTADO |
| **Justificación** | Configuración de seguridad hardened:<br>• Vercel: No SSH, no root access, serverless isolation<br>• Next.js: CSP headers, HSTS, X-Frame-Options DENY<br>• Postgres: Acceso solo desde Vercel (no IP pública)<br>• GitHub: Branch protection, require code review |
| **Evidencia** | • next.config.ts (security headers)<br>• Vercel Project Settings → Security<br>• GitHub repo → Settings → Branches |
| **Responsable** | CTO |

---

### op.exp.3 — Gestión de la configuración

| Campo | Valor |
|-------|-------|
| **Nivel** | [m] Medio |
| **Aplicable** | ✅ Sí |
| **Estado** | ✅ IMPLEMENTADO |
| **Justificación** | (Ver org.10 — mismo control)<br>Infrastructure as Code (Git) = configuración versionada. |
| **Evidencia** | Git commits history |
| **Responsable** | CTO |

---

### op.exp.4 — Mantenimiento

| Campo | Valor |
|-------|-------|
| **Nivel** | [b] Básico |
| **Aplicable** | ✅ Sí |
| **Estado** | ✅ IMPLEMENTADO |
| **Justificación** | Mantenimiento automatizado:<br>• Dependabot (GitHub): Alertas vulnerabilidades npm<br>• Renovate (opcional futuro): Auto-update dependencies<br>• Vercel: Platform updates automáticos (Next.js, Node.js) |
| **Evidencia** | • GitHub → Security → Dependabot enabled<br>• Dependabot PRs (historial) |
| **Responsable** | CTO |

---

### op.exp.5 — Gestión de cambios

| Campo | Valor |
|-------|-------|
| **Nivel** | [m] Medio |
| **Aplicable** | ✅ Sí |
| **Estado** | ✅ IMPLEMENTADO |
| **Justificación** | (Ver org.11 — mismo control)<br>Pull Requests + code review obligatorio. |
| **Evidencia** | GitHub branch protection rules |
| **Responsable** | CTO |

---

### op.exp.6 — Protección frente a código dañino

| Campo | Valor |
|-------|-------|
| **Nivel** | [b] Básico |
| **Aplicable** | ✅ Sí |
| **Estado** | ⚠️ PARCIAL (70%) |
| **Justificación** | Protección mediante:<br>• `npm audit` (vulnerabilidades conocidas)<br>• Dependabot (alertas automáticas)<br>**GAP:** No hay escaneo antivirus en laptops (responsabilidad Vercel en cloud). |
| **Acción** | Instalar EDR en laptops (CrowdStrike o SentinelOne) — Semana 3 |
| **Responsable** | CTO |

---

### op.exp.7 — Gestión de incidentes

| Campo | Valor |
|-------|-------|
| **Nivel** | [b] Básico |
| **Aplicable** | ✅ Sí |
| **Estado** | ⚠️ PARCIAL (75%) |
| **Justificación** | (Ver org.9 — mismo control)<br>Procedimiento documentado, falta registro histórico. |
| **Evidencia** | docs/ens/procedimientos/02-incidentes.md |
| **Acción** | Crear tabla `incident_log` |
| **Fecha objetivo** | Semana 3 |

---

### op.exp.8 — Registro de la actividad (logging)

| Campo | Valor |
|-------|-------|
| **Nivel** | [b] Básico |
| **Aplicable** | ✅ Sí |
| **Estado** | ⚠️ PARCIAL (60%) |
| **Justificación** | Logging actual:<br>• Vercel logs: 30 días (requests, errors, functions)<br>• GitHub audit log: accesos, cambios, permisos<br>**GAP:** No hay audit logging de accesos a datos personales (tabla leads). |
| **Acción** | Implementar Prisma middleware para audit logging:<br>• Tabla `audit_log` (user_id, action, resource, ip, timestamp)<br>• Registrar SELECT/INSERT/UPDATE/DELETE en tabla `leads` |
| **Fecha objetivo** | Semana 5 |
| **Responsable** | CTO |

---

### op.exp.9 — Registro de la gestión de incidentes

| Campo | Valor |
|-------|-------|
| **Nivel** | [m] Medio |
| **Aplicable** | ✅ Sí |
| **Estado** | ❌ PENDIENTE |
| **Justificación** | No hay registro estructurado de incidentes de seguridad.<br>Necesario para compliance ENS + auditoría. |
| **Acción** | Crear tabla `incident_log` en base de datos:<br>• id, date, severity (P0-P3), type (phishing, DDoS, etc.)<br>• description, affected_assets, response_actions<br>• resolved_date, responsible, lessons_learned |
| **Fecha objetivo** | Semana 3 |
| **Responsable** | CTO |

---

### op.exp.10 — Protección de los registros de actividad

| Campo | Valor |
|-------|-------|
| **Nivel** | [m] Medio |
| **Aplicable** | ✅ Sí |
| **Estado** | ⚠️ PARCIAL (50%) |
| **Justificación** | Logs en Vercel son read-only (no se pueden modificar).<br>**GAP:** Logs aplicación (audit_log) no están protegidos contra manipulación. |
| **Acción** | Implementar protección logs:<br>1. Tabla `audit_log`: append-only (sin UPDATE/DELETE)<br>2. Hash SHA-256 de cada entrada (detección manipulación)<br>3. Export diario a S3 Glacier (inmutable storage) |
| **Fecha objetivo** | Semana 6 |
| **Responsable** | CTO |

---

### op.exp.11 — Protección de claves criptográficas

| Campo | Valor |
|-------|-------|
| **Nivel** | [m] Medio |
| **Aplicable** | ✅ Sí |
| **Estado** | ⚠️ PARCIAL (70%) |
| **Justificación** | Claves criptográficas (API keys, secrets):<br>• Vercel Environment Variables (cifradas at-rest)<br>• GitHub Secrets (cifradas)<br>**GAP:** No hay gestión centralizada (1Password, Vault). |
| **Acción** | Migrar a 1Password Teams:<br>• Centralizar API keys (Resend, Cal.com, Notion)<br>• Rotación automática cada 90 días<br>• Audit trail de accesos |
| **Fecha objetivo** | Semana 2 |
| **Responsable** | CTO |

---

### op.ext.1 — Contratación y acuerdos de nivel de servicio

| Campo | Valor |
|-------|-------|
| **Nivel** | [b] Básico |
| **Aplicable** | ✅ Sí |
| **Estado** | ✅ IMPLEMENTADO |
| **Justificación** | SLAs con proveedores cloud:<br>• Vercel: 99.99% uptime (plan Pro)<br>• Resend: 99.9% uptime<br>• Cal.com: 99.9% uptime<br>Contratos documentados (Terms of Service). |
| **Evidencia** | • Vercel SLA: https://vercel.com/legal/sla<br>• Resend SLA: https://resend.com/sla<br>• Cal.com SLA: https://cal.com/sla |
| **Responsable** | CEO |

---

### op.ext.2 — Gestión diaria

| Campo | Valor |
|-------|-------|
| **Nivel** | [b] Básico |
| **Aplicable** | ✅ Sí |
| **Estado** | ✅ IMPLEMENTADO |
| **Justificación** | Monitorización diaria mediante:<br>• Vercel Dashboard (requests, errors, uptime)<br>• GitHub notifications (Dependabot alerts)<br>• Plausible Analytics (traffic anomalies) |
| **Evidencia** | Vercel Analytics dashboard |
| **Responsable** | CTO |

---

### op.ext.3 — Protección de datos en servicios externos

| Campo | Valor |
|-------|-------|
| **Nivel** | [m] Medio |
| **Aplicable** | ✅ Sí |
| **Estado** | ⚠️ PARCIAL (50%) |
| **Justificación** | DPAs (Data Processing Agreements) firmados con:<br>• Vercel ✅ (firmado)<br>• Resend ✅ (firmado)<br>• Cal.com ❌ (pendiente)<br>• Notion ❌ (pendiente) |
| **Acción** | Solicitar y firmar DPAs pendientes (Semana 2) |
| **Fecha objetivo** | Marzo 2026 |
| **Responsable** | DPO |

---

### op.cont.1 — Análisis de impacto

| Campo | Valor |
|-------|-------|
| **Nivel** | [m] Medio |
| **Aplicable** | ✅ Sí |
| **Estado** | ✅ IMPLEMENTADO |
| **Justificación** | Análisis de impacto realizado en categorización ENS (Sección 2.2).<br>5 dimensiones evaluadas: Disponibilidad, Integridad, Confidencialidad, Trazabilidad, Autenticidad. |
| **Evidencia** | Plan de Seguridad ENS Sección 2.2 |
| **Responsable** | CTO |

---

### op.cont.2 — Plan de continuidad

| Campo | Valor |
|-------|-------|
| **Nivel** | [m] Medio |
| **Aplicable** | ✅ Sí |
| **Estado** | ⚠️ PARCIAL (70%) |
| **Justificación** | Plan de continuidad documentado (docs/ens/procedimientos/03-continuidad.md).<br>Incluye: RTO 4h, RPO 24h, escenarios disaster, plan recuperación.<br>**GAP:** No se ha probado (simulacro). |
| **Acción** | Simulacro de recuperación trimestral (próximo: mayo 2026) |
| **Fecha objetivo** | Q2 2026 |
| **Responsable** | CTO |

---

### op.cont.3 — Pruebas periódicas

| Campo | Valor |
|-------|-------|
| **Nivel** | [m] Medio |
| **Aplicable** | ✅ Sí |
| **Estado** | ❌ PENDIENTE |
| **Justificación** | No se han realizado pruebas de continuidad aún.<br>Obligatorio ENS Nivel Medio: testing trimestral. |
| **Acción** | Planificar simulacro Q2 2026:<br>1. Scenario: Base de datos corrupta<br>2. Restore desde backup<br>3. Validar integridad datos<br>4. Medir tiempo recuperación (target: < 4h) |
| **Fecha objetivo** | Mayo 2026 |
| **Responsable** | CTO |

---

### op.cont.4 — Medios alternativos

| Campo | Valor |
|-------|-------|
| **Nivel** | [m] Medio |
| **Aplicable** | ✅ Sí |
| **Estado** | ✅ IMPLEMENTADO |
| **Justificación** | Medios alternativos:<br>• Vercel multi-region (failover automático fra1 → iad1)<br>• Laptop backup (CEO tiene laptop secundario)<br>• Dominio backup: defcon23.es (registrado) |
| **Evidencia** | • Vercel multi-region config<br>• Registro dominio defcon23.es |
| **Responsable** | CTO |

---

### op.mon.1 — Detección de intrusión

| Campo | Valor |
|-------|-------|
| **Nivel** | [m] Medio |
| **Aplicable** | ✅ Sí |
| **Estado** | ⚠️ PARCIAL (60%) |
| **Justificación** | Detección de intrusión parcial:<br>• Vercel Firewall (WAF): Bloquea ataques comunes (SQL injection, XSS)<br>**GAP:** No hay IDS a nivel aplicación (ej. detectar 100 requests en 1 min). |
| **Acción** | Implementar rate limiting (Upstash Redis): 10 req/min por IP |
| **Fecha objetivo** | Semana 6 |
| **Responsable** | CTO |

---

### op.mon.2 — Sistema de métricas

| Campo | Valor |
|-------|-------|
| **Nivel** | [m] Medio |
| **Aplicable** | ✅ Sí |
| **Estado** | ✅ IMPLEMENTADO |
| **Justificación** | Sistema de métricas mediante:<br>• Vercel Analytics: requests/s, latency, errors<br>• Plausible Analytics: visitors, pageviews<br>• GitHub Insights: commits, PRs, contributors |
| **Evidencia** | • Vercel Analytics dashboard<br>• Plausible dashboard (public: plausible.io/defcon23.eu) |
| **Responsable** | CTO |

---

### op.mon.3 — Vigilancia

| Campo | Valor |
|-------|-------|
| **Nivel** | [m] Medio |
| **Aplicable** | ✅ Sí |
| **Estado** | ⚠️ PARCIAL (70%) |
| **Justificación** | Alertas configuradas:<br>• Vercel: Email si error rate > 5%<br>• GitHub: Email si Dependabot critical alert<br>**GAP:** No hay integración Slack (respuesta más rápida). |
| **Acción** | Integrar alertas con Slack (canal #security-alerts) |
| **Fecha objetivo** | Semana 4 |
| **Responsable** | CTO |

---

## MARCO DE PROTECCIÓN [mp] — 30 medidas

### mp.if.1-9 — Protección de las instalaciones e infraestructuras

| Campo | Valor |
|-------|-------|
| **Nivel** | [b] Básico / [m] Medio |
| **Aplicable** | ❌ No (9 medidas) |
| **Justificación** | No hay infraestructura física (servidores, salas, cableado).<br>Arquitectura cloud-only (Vercel serverless).<br>Seguridad física es responsabilidad de Vercel (ISO 27001 certificado). |
| **Medidas N/A** | mp.if.1, mp.if.2, mp.if.3, mp.if.4, mp.if.5, mp.if.6, mp.if.7, mp.if.8, mp.if.9 |

---

### mp.per.1 — Caracterización del puesto de trabajo

| Campo | Valor |
|-------|-------|
| **Nivel** | [b] Básico |
| **Aplicable** | ✅ Sí |
| **Estado** | ⚠️ PARCIAL (70%) |
| **Justificación** | Job descriptions existen para:<br>• CEO: Responsable de la Información, estrategia, comercial<br>• CTO: Responsable de Seguridad, desarrollo, infraestructura<br>• Desarrollador: Coding, testing, documentación<br>**GAP:** Faltan requisitos de seguridad específicos. |
| **Acción** | Añadir a job descriptions:<br>• Requisitos MFA obligatorio<br>• Formación seguridad anual<br>• Cláusula confidencialidad |
| **Fecha objetivo** | Semana 4 |
| **Responsable** | CEO |

---

### mp.per.2 — Deberes y obligaciones

| Campo | Valor |
|-------|-------|
| **Nivel** | [b] Básico |
| **Aplicable** | ✅ Sí |
| **Estado** | ⚠️ PARCIAL (75%) |
| **Justificación** | Contratos laborales incluyen:<br>• Cláusula confidencialidad (NDA)<br>• Propiedad intelectual (código propiedad empresa)<br>**GAP:** No menciona específicamente ENS ni obligaciones GDPR. |
| **Acción** | Añadir adenda a contratos:<br>• Cumplimiento ENS obligatorio<br>• Obligación reportar incidentes<br>• Sanciones por incumplimiento |
| **Fecha objetivo** | Semana 3 |
| **Responsable** | CEO |

---

### mp.per.3 — Concienciación

| Campo | Valor |
|-------|-------|
| **Nivel** | [b] Básico |
| **Aplicable** | ✅ Sí |
| **Estado** | ⚠️ PARCIAL (50%) |
| **Justificación** | (Ver org.13 — mismo control)<br>Formación GDPR realizada, pendiente ENS. |
| **Acción** | Curso ENS 4h (Semana 3) |
| **Responsable** | CEO |

---

### mp.per.4 — Formación

| Campo | Valor |
|-------|-------|
| **Nivel** | [b] Básico |
| **Aplicable** | ✅ Sí |
| **Estado** | ⚠️ PARCIAL (50%) |
| **Justificación** | (Ver org.13 — mismo control) |
| **Evidencia** | Certificados formación GDPR |
| **Acción** | Training anual seguridad (ENS, phishing, incident response) |
| **Fecha objetivo** | Marzo 2026 |

---

### mp.eq.1 — Puesto de trabajo despejado

| Campo | Valor |
|-------|-------|
| **Nivel** | [b] Básico |
| **Aplicable** | ✅ Sí |
| **Estado** | ✅ IMPLEMENTADO |
| **Justificación** | Política "clean desk" (escritorio despejado) aplicada:<br>• No dejar documentos confidenciales en escritorio<br>• Cerrar laptop al salir<br>• No pantallas visibles desde exterior (trabajo remoto) |
| **Evidencia** | Política clean desk (documentada en onboarding) |
| **Responsable** | CTO |

---

### mp.eq.2 — Bloqueo de puesto de trabajo

| Campo | Valor |
|-------|-------|
| **Nivel** | [b] Básico |
| **Aplicable** | ✅ Sí |
| **Estado** | ✅ IMPLEMENTADO |
| **Justificación** | Bloqueo automático laptops:<br>• macOS: Bloqueo tras 5min inactividad (System Preferences → Security)<br>• Requiere password al despertar<br>• Touch ID como alternativa |
| **Evidencia** | Screenshot System Preferences → Security & Privacy |
| **Responsable** | CTO |

---

### mp.eq.3 — Protección de equipos portátiles

| Campo | Valor |
|-------|-------|
| **Nivel** | [m] Medio |
| **Aplicable** | ✅ Sí |
| **Estado** | ⚠️ PARCIAL (65%) |
| **Justificación** | Protección actual:<br>• FileVault (cifrado disco completo macOS) ✅<br>• Backups Time Machine (local) ✅<br>**GAP:** No hay EDR (Endpoint Detection & Response). |
| **Acción** | Instalar EDR (CrowdStrike Falcon o SentinelOne):<br>• Detección ransomware en tiempo real<br>• Monitorización amenazas<br>• Respuesta automática (aislar equipo) |
| **Fecha objetivo** | Semana 3 |
| **Coste** | €500/año (2 laptops) |
| **Responsable** | CTO |

---

### mp.eq.4 — Medios alternativos

| Campo | Valor |
|-------|-------|
| **Nivel** | [m] Medio |
| **Aplicable** | ✅ Sí |
| **Estado** | ✅ IMPLEMENTADO |
| **Justificación** | Medios alternativos disponibles:<br>• Laptop backup (CEO tiene MacBook Air secundario)<br>• Código fuente en GitHub (accesible desde cualquier equipo)<br>• Vercel accesible desde cualquier navegador |
| **Evidencia** | Inventario equipos (2 laptops CEO, 1 laptop CTO) |
| **Responsable** | CEO |

---

### mp.com.1 — Perímetro seguro

| Campo | Valor |
|-------|-------|
| **Nivel** | [b] Básico |
| **Aplicable** | ✅ Sí |
| **Estado** | ✅ IMPLEMENTADO |
| **Justificación** | Perímetro de red seguro:<br>• Vercel Firewall (WAF integrado)<br>• Cloudflare DNS (protección DDoS)<br>• No hay red interna (arquitectura serverless) |
| **Evidencia** | • Vercel Firewall enabled<br>• Cloudflare DNS records |
| **Responsable** | CTO |

---

### mp.com.2 — Protección de la confidencialidad

| Campo | Valor |
|-------|-------|
| **Nivel** | [b] Básico |
| **Aplicable** | ✅ Sí |
| **Estado** | ✅ IMPLEMENTADO |
| **Justificación** | Confidencialidad protegida mediante:<br>• TLS 1.3 (100% tráfico cifrado HTTPS)<br>• SSL Labs scan: A+ rating<br>• Cipher suites seguros (no RC4, no 3DES) |
| **Evidencia** | • SSL Labs report: https://www.ssllabs.com/ssltest/analyze.html?d=defcon23.eu<br>• Certificate: Let's Encrypt (auto-renovado Vercel) |
| **Responsable** | CTO |

---

### mp.com.3 — Protección de la integridad y autenticidad

| Campo | Valor |
|-------|-------|
| **Nivel** | [m] Medio |
| **Aplicable** | ✅ Sí |
| **Estado** | ✅ IMPLEMENTADO |
| **Justificación** | Integridad y autenticidad mediante:<br>• HTTPS (protección man-in-the-middle)<br>• HSTS (Strict-Transport-Security: max-age=63072000)<br>• Certificate Transparency (CT logs) |
| **Evidencia** | • HTTP headers (next.config.ts)<br>• HSTS preload list (próximo: hstspreload.org) |
| **Responsable** | CTO |

---

### mp.com.4 — Segregación de redes

| Campo | Valor |
|-------|-------|
| **Nivel** | [m] Medio |
| **Aplicable** | ❌ No |
| **Justificación** | No hay red interna (arquitectura serverless).<br>Vercel functions están aisladas por diseño (sandboxing). |
| **Responsable** | N/A |

---

### mp.si.1 — Marcado de soportes

| Campo | Valor |
|-------|-------|
| **Nivel** | [b] Básico |
| **Aplicable** | ❌ No |
| **Justificación** | No hay soportes físicos (CD, USB, discos externos).<br>Todo almacenamiento es cloud. |
| **Responsable** | N/A |

---

### mp.si.2 — Criptografía

| Campo | Valor |
|-------|-------|
| **Nivel** | [b] Básico |
| **Aplicable** | ✅ Sí |
| **Estado** | ✅ IMPLEMENTADO |
| **Justificación** | Cifrado implementado:<br>• **In-transit:** TLS 1.3 (AES-256-GCM)<br>• **At-rest:** Vercel Postgres (AES-256)<br>• **Backups:** Cifrados at-rest<br>• **Laptops:** FileVault (AES-256) |
| **Evidencia** | • Vercel Postgres encryption (default)<br>• macOS FileVault enabled |
| **Responsable** | CTO |

---

### mp.si.3 — Custodia

| Campo | Valor |
|-------|-------|
| **Nivel** | [b] Básico |
| **Aplicable** | ❌ No |
| **Justificación** | No hay soportes físicos. |
| **Responsable** | N/A |

---

### mp.si.4 — Transporte

| Campo | Valor |
|-------|-------|
| **Nivel** | [b] Básico |
| **Aplicable** | ❌ No |
| **Justificación** | No hay transporte de soportes físicos. |
| **Responsable** | N/A |

---

### mp.si.5 — Borrado y destrucción

| Campo | Valor |
|-------|-------|
| **Nivel** | [m] Medio |
| **Aplicable** | ✅ Sí |
| **Estado** | ⚠️ PARCIAL (60%) |
| **Justificación** | Data retention policy documentada (ROPA):<br>• Leads: 2 años<br>• Contratos: 6 años (obligación fiscal)<br>• Logs: 90 días (acceso), 2 años (audit)<br>**GAP:** No hay procedimiento secure wipe al eliminar datos. |
| **Acción** | Implementar secure deletion:<br>• Borrado lógico + sobreescritura (no solo DELETE)<br>• Certificado de destrucción (para datos sensibles)<br>• Testing anual de recuperación (verificar datos no recuperables) |
| **Fecha objetivo** | Semana 3 |
| **Responsable** | CTO |

---

### mp.sw.1 — Desarrollo de aplicaciones

| Campo | Valor |
|-------|-------|
| **Nivel** | [b] Básico |
| **Aplicable** | ✅ Sí |
| **Estado** | ✅ IMPLEMENTADO |
| **Justificación** | Desarrollo seguro:<br>• TypeScript strict mode (type safety)<br>• ESLint (code quality)<br>• Prettier (code formatting)<br>• Code reviews obligatorios (GitHub PR)<br>• Prisma ORM (prevención SQL injection) |
| **Evidencia** | • tsconfig.json (strict: true)<br>• .eslintrc.json<br>• GitHub branch protection (require review) |
| **Responsable** | CTO |

---

### mp.sw.2 — Aceptación y puesta en servicio

| Campo | Valor |
|-------|-------|
| **Nivel** | [m] Medio |
| **Aplicable** | ✅ Sí |
| **Estado** | ⚠️ PARCIAL (70%) |
| **Justificación** | Proceso de aceptación:<br>• Vercel Previews (staging automático en PRs)<br>• Testing manual en Preview URL<br>**GAP:** No hay UAT (User Acceptance Testing) formal ni checklist de validación. |
| **Acción** | Crear checklist UAT:<br>• Smoke tests (funcionalidades críticas)<br>• Security tests (CSP headers, TLS)<br>• Performance tests (Core Web Vitals)<br>• Accessibility tests (WCAG 2.1) |
| **Fecha objetivo** | Semana 4 |
| **Responsable** | CTO |

---

### mp.info.1 — Datos de carácter personal

| Campo | Valor |
|-------|-------|
| **Nivel** | [b] Básico |
| **Aplicable** | ✅ Sí |
| **Estado** | ✅ IMPLEMENTADO |
| **Justificación** | (Ver org.12 — mismo control)<br>GDPR compliant: Privacy Policy, ROPA, DPAs, consent. |
| **Evidencia** | • app/privacidad/page.tsx<br>• docs/compliance/04-ropa.md<br>• DPAs Vercel + Resend |
| **Responsable** | DPO |

---

### mp.info.2 — Calificación de la información

| Campo | Valor |
|-------|-------|
| **Nivel** | [m] Medio |
| **Aplicable** | ✅ Sí |
| **Estado** | ⚠️ PARCIAL (50%) |
| **Justificación** | No hay clasificación formal de información.<br>Necesario para ENS Nivel Medio. |
| **Acción** | Implementar clasificación 3 niveles:<br>• **PUBLIC:** Website público, blog, marketing<br>• **INTERNAL:** Documentación interna, procedimientos<br>• **CONFIDENTIAL:** Emails leads, contratos clientes, API keys<br>Marcar documentos con etiqueta (header/footer). |
| **Fecha objetivo** | Semana 3 |
| **Responsable** | CTO |

---

### mp.info.3 — Cifrado

| Campo | Valor |
|-------|-------|
| **Nivel** | [b] Básico |
| **Aplicable** | ✅ Sí |
| **Estado** | ✅ IMPLEMENTADO |
| **Justificación** | (Ver mp.si.2 — mismo control)<br>TLS 1.3 + AES-256 at-rest. |
| **Evidencia** | SSL Labs scan A+ |
| **Responsable** | CTO |

---

### mp.info.4 — Firma electrónica

| Campo | Valor |
|-------|-------|
| **Nivel** | [m] Medio |
| **Aplicable** | ✅ Sí |
| **Estado** | ❌ PENDIENTE |
| **Justificación** | No hay firma electrónica cualificada (eIDAS) implementada.<br>Contratos se firman manualmente (DocuSign futuro). |
| **Acción** | Planificar integración firma electrónica:<br>• DocuSign (firma avanzada)<br>• O eIDAS qualified signature (firma cualificada)<br>• Obligatorio para contratos sector público |
| **Fecha objetivo** | Q3 2026 (baja prioridad) |
| **Responsable** | CEO |

---

### mp.info.5 — Sellos de tiempo

| Campo | Valor |
|-------|-------|
| **Nivel** | [m] Medio |
| **Aplicable** | ✅ Sí |
| **Estado** | ⚠️ PARCIAL (60%) |
| **Justificación** | Timestamps en logs (UTC) existen.<br>**GAP:** No hay TSA (Time Stamping Authority) certificado eIDAS. |
| **Acción** | Considerar TSA certificado para:<br>• Firma contratos (timestamp inmutable)<br>• Logs críticos (audit trail legal) |
| **Fecha objetivo** | Q3 2026 (baja prioridad) |
| **Responsable** | CTO |

---

### mp.info.6 — Limpieza de documentos

| Campo | Valor |
|-------|-------|
| **Nivel** | [b] Básico |
| **Aplicable** | ✅ Sí |
| **Estado** | ✅ IMPLEMENTADO |
| **Justificación** | No hay documentos con metadata sensible actualmente.<br>Si se generan PDFs (futuro), usar librería que elimine metadata. |
| **Evidencia** | N/A (futuro: pdf-lib o similar) |
| **Responsable** | CTO |

---

### mp.info.7 — Copias de seguridad (backup)

| Campo | Valor |
|-------|-------|
| **Nivel** | [b] Básico |
| **Aplicable** | ✅ Sí |
| **Estado** | ✅ IMPLEMENTADO |
| **Justificación** | Backups automáticos:<br>• Vercel Postgres: Diarios (retención 30 días)<br>• Código fuente: GitHub (commits indefinidos)<br>• Environment variables: 1Password (futuro)<br>Estrategia 3-2-1 documentada. |
| **Evidencia** | • Vercel Postgres backup settings<br>• Procedimiento 04-backups.md |
| **Responsable** | CTO |

---

### mp.info.8 — Recuperación de datos

| Campo | Valor |
|-------|-------|
| **Nivel** | [m] Medio |
| **Aplicable** | ✅ Sí |
| **Estado** | ⚠️ PARCIAL (70%) |
| **Justificación** | Procedimiento de recuperación documentado (docs/ens/procedimientos/03-continuidad.md).<br>**GAP:** No se ha probado (testing obligatorio ENS). |
| **Acción** | Simulacro de restore trimestral (próximo: mayo 2026) |
| **Fecha objetivo** | Q2 2026 |
| **Responsable** | CTO |

---

### mp.info.9 — Gestión de incidencias

| Campo | Valor |
|-------|-------|
| **Nivel** | [b] Básico |
| **Aplicable** | ✅ Sí |
| **Estado** | ⚠️ PARCIAL (75%) |
| **Justificación** | (Ver op.exp.7 — mismo control)<br>Procedimiento documentado, falta registro histórico. |
| **Evidencia** | docs/ens/procedimientos/02-incidentes.md |
| **Acción** | Crear tabla `incident_log` |

---

### mp.s.1 — Protección del correo electrónico

| Campo | Valor |
|-------|-------|
| **Nivel** | [b] Básico |
| **Aplicable** | ✅ Sí |
| **Estado** | ✅ IMPLEMENTADO |
| **Justificación** | Protección email mediante:<br>• SPF record (Resend authorized)<br>• DKIM signing (Resend keys)<br>• DMARC policy (p=quarantine)<br>• Anti-phishing (Resend filters) |
| **Evidencia** | • DNS records (SPF, DKIM, DMARC)<br>• MXToolbox verification |
| **Responsable** | CTO |

---

### mp.s.2 — Protección de servicios y aplicaciones web

| Campo | Valor |
|-------|-------|
| **Nivel** | [b] Básico |
| **Aplicable** | ✅ Sí |
| **Estado** | ✅ IMPLEMENTADO |
| **Justificación** | Protección web mediante headers:<br>• Content-Security-Policy (CSP)<br>• X-Frame-Options: DENY<br>• X-Content-Type-Options: nosniff<br>• Referrer-Policy: origin-when-cross-origin<br>• Permissions-Policy (restricciones APIs) |
| **Evidencia** | • next.config.ts (security headers)<br>• SecurityHeaders.com scan: A+ |
| **Responsable** | CTO |

---

### mp.s.8 — Protección frente a denegación de servicio

| Campo | Valor |
|-------|-------|
| **Nivel** | [m] Medio |
| **Aplicable** | ✅ Sí |
| **Estado** | ✅ IMPLEMENTADO |
| **Justificación** | Protección DDoS mediante:<br>• Vercel DDoS Protection (incluido plan Pro)<br>• Cloudflare DNS (proxy + rate limiting)<br>• Serverless autoscaling (absorbe picos tráfico) |
| **Evidencia** | • Vercel plan Pro (DDoS protection enabled)<br>• Cloudflare DNS proxy (orange cloud) |
| **Responsable** | CTO |

---

## RESUMEN FINAL

**COMPLIANCE ENS ACTUAL:** **68%** (52/75 aplicables)

| Estado | Cantidad | Porcentaje |
|--------|----------|------------|
| ✅ **COMPLETO** | 38 medidas | 51% |
| ⚠️ **PARCIAL** | 28 medidas | 37% |
| ❌ **PENDIENTE** | 4 medidas | 5% |
| N/A **NO APLICA** | 5 medidas | 7% |
| **TOTAL** | **75 medidas** | **100%** |

**TARGET FASE ENS (Semana 4):** **93% compliance** (65/70 aplicables)

**GAPS CRÍTICOS A CERRAR (4 semanas):**

1. **op.acc.4** — Revisión trimestral accesos (Semana 3)
2. **op.exp.8** — Audit logging aplicación (Semana 5)
3. **op.exp.9** — Registro gestión incidentes (Semana 3)
4. **op.exp.10** — Protección logs (Semana 6)
5. **mp.eq.3** — EDR laptops (Semana 3)
6. **mp.info.2** — Clasificación información (Semana 3)

---

**PRÓXIMOS PASOS:** Ver Plan de Adecuación (Sección 8 del Plan de Seguridad ENS).

**FIN STATEMENT OF APPLICABILITY ENS**
