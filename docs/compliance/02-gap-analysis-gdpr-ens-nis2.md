# GAP ANALYSIS REPORT: GDPR + ENS + NIS2
## defcon23.eu — Data Protection & Spanish Compliance

**Fecha de auditoría:** 11 de febrero de 2026  
**Auditor:** Compliance.Sec∅ps Collective  
**Alcance:** GDPR (UE 2016/679) + LOPDGDD + ENS (RD 311/2022) + NIS2 (UE 2022/2555)

---

## 1. GDPR/RGPD COMPLIANCE ASSESSMENT

### **ESTADO ACTUAL: NO COMPLIANT ❌**

**Riesgo:** CRÍTICO — Operación ILÍCITA de tratamiento de datos personales  
**Multa potencial:** Hasta €20,000,000 o 4% facturación global (Art. 83 GDPR)  
**Autoridad de control:** AEPD (Agencia Española de Protección de Datos)

---

### **1.1 PERSONAL DATA INVENTORY**

| Dato Personal | Dónde se captura | Base legal | ¿Documentada? | Consentimiento | Retención |
|---------------|------------------|------------|---------------|----------------|-----------|
| **Email** | Calculadora Reynolds | Consentimiento (Art. 6.1.a) | ❌ NO | ❌ NO HAY CHECKBOX | ❌ Indefinida |
| **Nombre de empresa** | Calculadora Reynolds | Interés legítimo (Art. 6.1.f) | ❌ NO | N/A | ❌ Indefinida |
| **Respuestas cuestionario** (10 preguntas) | Calculadora Reynolds | Consentimiento | ❌ NO | ❌ NO HAY CHECKBOX | ❌ Indefinida |
| **IP Address** | Logs Vercel | Interés legítimo (seguridad) | ❌ NO | N/A | ❌ Indefinida |

**CONCLUSIÓN:** defcon23.eu procesa datos personales SIN:
- Privacy Policy pública (Art. 13 GDPR) ❌
- Consent mechanism explícito (Art. 7 GDPR) ❌
- ROPA (Registro de Actividades de Tratamiento) (Art. 30 GDPR) ❌
- Data retention policy (Art. 5.1.e GDPR) ❌

**IMPACTO:** Tratamiento ILÍCITO de datos. AEPD puede ordenar SUSPENSIÓN del servicio + multa.

---

### **1.2 GDPR ARTICLE-BY-ARTICLE ASSESSMENT**

#### **Art. 5: Principles of Data Processing**

| Principio | Requisito | Estado | Gap |
|-----------|-----------|--------|-----|
| **5.1.a Licitud** | Base legal válida | ❌ NO | Consentimiento no documentado |
| **5.1.b Limitación de finalidad** | Finalidades específicas | ⚠️ PARCIAL | Finalidad clara (lead generation) pero no documentada |
| **5.1.c Minimización** | Solo datos necesarios | ✅ SÍ | Solo email + empresa (mínimo necesario) |
| **5.1.d Exactitud** | Datos actualizados | ⚠️ PARCIAL | No hay proceso de actualización |
| **5.1.e Limitación plazo** | Retention period | ❌ NO | NO HAY data retention automation |
| **5.1.f Integridad y confidencialidad** | Seguridad | ⚠️ PARCIAL | TLS 1.3 ✅, pero no audit logging ❌ |

**Prioridad:** 🔴 CRÍTICO — Implementar retention policy (2 años para leads inactivos)

---

#### **Art. 6: Lawfulness of Processing**

**Base legal para cada dato:**

1. **Email + respuestas cuestionario:** Consentimiento (Art. 6.1.a)
   - ❌ **GAP:** NO HAY checkbox de consentimiento en formulario
   - ❌ **GAP:** NO HAY registro de consentimientos (timestamp, IP, versión Privacy Policy)
   - **Acción:** Añadir checkbox + tabla `consents` en DB

2. **Nombre de empresa:** Interés legítimo (Art. 6.1.f)
   - ⚠️ **GAP:** No hay Legitimate Interest Assessment (LIA) documentado
   - **Acción:** Documentar LIA (balance entre interés negocio vs derechos individuales)

3. **IP Address (logs):** Interés legítimo (seguridad, fraud prevention)
   - ⚠️ **GAP:** No documentado en ROPA
   - **Acción:** Añadir a ROPA

**Prioridad:** 🔴 CRÍTICO — Implementar consent checkbox inmediatamente

---

#### **Art. 7: Conditions for Consent**

| Requisito | Estado | Gap |
|-----------|--------|-----|
| **7.1 Demostrar consentimiento** | ❌ NO | No hay registro de consents |
| **7.2 Solicitud inteligible** | ❌ NO | No hay Privacy Policy |
| **7.3 Retirada fácil** | ❌ NO | No hay mecanismo de opt-out |
| **7.4 No condicionado** | ⚠️ PARCIAL | Calculadora requiere email (aceptable si consent checkbox presente) |

**Acción:** Implementar consent management system (tabla `consents` + checkbox + email de confirmación)

---

#### **Art. 12-14: Information to Data Subjects (Transparency)**

**Art. 13: Information when data is collected directly**

| Elemento requerido | ¿Presente? | ¿Dónde? |
|--------------------|------------|---------|
| Identidad del responsable | ❌ NO | No hay Privacy Policy |
| Datos de contacto del DPO | ❌ NO | No hay DPO designado |
| Finalidades del tratamiento | ❌ NO | No documentadas |
| Base legal | ❌ NO | No documentada |
| Destinatarios de datos (procesadores) | ❌ NO | Vercel, Resend no mencionados |
| Transferencias internacionales | ✅ SÍ (implícito) | Todos los proveedores en UE |
| Plazo de conservación | ❌ NO | No documentado |
| Derechos ARCO | ❌ NO | No mencionados |
| Derecho a retirar consentimiento | ❌ NO | No mencionado |
| Derecho a reclamar ante AEPD | ❌ NO | No mencionado |

**Prioridad:** 🔴 CRÍTICO — Crear Privacy Policy pública URGENTE

---

#### **Art. 15-22: Data Subject Rights (ARCO + Portability + Objection)**

| Derecho | ¿Procedimiento? | ¿Plazo SLA? | Estado |
|---------|-----------------|-------------|--------|
| **Art. 15 Acceso** | ❌ NO | N/A | NO COMPLIANT |
| **Art. 16 Rectificación** | ❌ NO | N/A | NO COMPLIANT |
| **Art. 17 Supresión ("derecho al olvido")** | ❌ NO | N/A | NO COMPLIANT |
| **Art. 18 Limitación del tratamiento** | ❌ NO | N/A | NO COMPLIANT |
| **Art. 20 Portabilidad** | ❌ NO | N/A | NO COMPLIANT |
| **Art. 21 Oposición** | ❌ NO | N/A | NO COMPLIANT |

**IMPACTO:** Si un usuario solicita sus datos o supresión, defcon23.eu NO puede responder legalmente (plazo: 1 mes desde solicitud).

**Acción:** Crear procedimientos ARCO + email template + SLA 30 días

---

#### **Art. 25: Data Protection by Design and by Default**

| Principio | Implementación | Estado |
|-----------|----------------|--------|
| **Privacy by design** | Datos minimizados (solo email + empresa) | ✅ SÍ |
| **Privacy by default** | No hay opt-in default a newsletters adicionales | ✅ SÍ |
| **Pseudonimización** | No implementada (email en texto claro) | ⚠️ OPCIONAL |

**Estado:** PARCIALMENTE COMPLIANT (arquitectura correcta, falta documentación)

---

#### **Art. 28: Processors (DPAs)**

**Procesadores identificados:**

| Procesador | Servicio | Ubicación | DPA firmado | Certificaciones |
|------------|----------|-----------|-------------|-----------------|
| **Vercel** | Hosting + DB | UE (Frankfurt) | ❌ NO | SOC 2, ISO 27001 |
| **Resend** | Email transaccional | UE | ❌ NO | SOC 2 |
| **Cal.com** | Booking system | UE | ❌ NO | GDPR-compliant (self-hosted option) |
| **Notion** | CRM (potencial) | UE/US | ❌ NO | SOC 2, ISO 27001, EU-US DPF |

**GAP CRÍTICO:** NO HAY DPAs firmados con ningún procesador.

**Requisitos Art. 28:**
1. DPA por escrito antes de iniciar tratamiento
2. Procesador solo trata datos según instrucciones del responsable
3. Medidas de seguridad adecuadas (Art. 32)
4. Subprocesadores solo con autorización escrita
5. Asistencia en respuesta a derechos ARCO
6. Notificación de brechas de seguridad

**Acción:** Solicitar DPAs a todos los proveedores (templates disponibles en sus websites)

**Prioridad:** 🔴 CRÍTICO

---

#### **Art. 30: Records of Processing Activities (ROPA)**

**Estado:** ❌ NO EXISTE

**Requisito:** Registro interno de actividades de tratamiento con:
- Nombre y datos de contacto del responsable
- Finalidades del tratamiento
- Categorías de interesados (leads, clientes)
- Categorías de datos (email, empresa, respuestas)
- Categorías de destinatarios (Vercel, Resend, etc.)
- Transferencias internacionales (N/A)
- Plazos de supresión (2 años)
- Medidas de seguridad (TLS 1.3, cifrado at-rest)

**Acción:** Crear ROPA (ver FASE 2)

**Prioridad:** 🔴 CRÍTICO

---

#### **Art. 32: Security of Processing**

| Medida técnica | Implementación | Estado |
|----------------|----------------|--------|
| **Cifrado en tránsito** | TLS 1.3 | ✅ COMPLIANT |
| **Cifrado en reposo** | Vercel Postgres encrypted | ✅ COMPLIANT |
| **Pseudonimización** | No implementada | ⚠️ OPCIONAL |
| **Control de acceso** | MFA en GitHub, pendiente en otros | ⚠️ PARCIAL |
| **Audit logging** | NO implementado | ❌ NO COMPLIANT |
| **Testing de seguridad** | No hay pentesting regular | ⚠️ PARCIAL |
| **Business continuity** | Vercel HA + backups diarios | ✅ COMPLIANT |

**GAP:** NO HAY audit logging de accesos a datos personales (quién accedió, cuándo, desde dónde).

**Prioridad:** 🟠 ALTO — Implementar audit logging (FASE 3)

---

#### **Art. 33-34: Data Breach Notification**

**Estado:** ❌ NO HAY PROCEDIMIENTO

**Requisitos:**
- **72 horas:** Notificar a AEPD (salvo que el riesgo sea bajo)
- **Sin demora indebida:** Notificar a interesados (si riesgo alto para sus derechos)

**Escenarios de breach:**
1. Base de datos expuesta (emails de leads filtrados)
2. Acceso no autorizado a cuenta Vercel
3. Ransomware en laptop de desarrollador

**GAP:**
- ❌ No hay Data Breach Response Plan
- ❌ No hay template de notificación a AEPD
- ❌ No hay template de notificación a usuarios
- ❌ No hay contacto designado para breaches

**Acción:** Crear Data Breach Response Plan (ver FASE 2)

**Prioridad:** 🔴 CRÍTICO

---

#### **Art. 35: Data Protection Impact Assessment (DPIA)**

**¿Se requiere DPIA para defcon23.eu?**

**Criterios Art. 35.3:**
- Evaluación sistemática y exhaustiva de aspectos personales (perfiling) → ❌ NO (solo 10 preguntas de negocio)
- Tratamiento a gran escala de categorías especiales de datos → ❌ NO (no hay datos sensibles)
- Observación sistemática a gran escala → ❌ NO (no hay tracking)

**CONCLUSIÓN:** DPIA NO REQUERIDA (pero documentar decisión)

**Acción:** Crear documento "DPIA Assessment — Not Required" justificando la decisión

**Prioridad:** 🟡 MEDIO

---

### **1.3 COOKIE POLICY**

**Estado:** ⚠️ PARCIALMENTE COMPLIANT

**Cookies actuales:**
- Plausible Analytics: Sin cookies ✅
- Cal.com embed: Posibles cookies de sesión (verificar)

**Requisito ePrivacy Directive:** Consent para cookies no esenciales.

**Acción:** Verificar si Cal.com embed usa cookies → si sí, añadir cookie banner (ej: CookieYes)

**Prioridad:** 🟡 MEDIO

---

### **1.4 GDPR COMPLIANCE ROADMAP**

#### **Semana 1 (URGENTE):**
1. ✅ Crear Privacy Policy pública (GDPR Art. 13 compliant)
2. ✅ Añadir consent checkbox en calculator + link a Privacy Policy
3. ✅ Crear tabla `consents` en DB (user_id, timestamp, ip_address, policy_version, consent_given)
4. ✅ Designar DPO o punto de contacto (dpo@defcon23.eu)

#### **Semana 2:**
1. ✅ Crear ROPA (Registro de Actividades de Tratamiento)
2. ✅ Solicitar DPAs a Vercel, Resend, Cal.com, Notion
3. ✅ Crear Data Breach Response Plan

#### **Semana 3:**
1. ✅ Crear procedimientos ARCO (email templates + SLA 30 días)
2. ✅ Documentar data retention policy (2 años para leads, 6 años para facturas)
3. ✅ Implementar data retention automation (cron job)

#### **Semana 4:**
1. ✅ Auditoría de cookies (verificar Cal.com)
2. ✅ Implementar cookie banner si necesario
3. ✅ Training interno GDPR para equipo

---

## 2. ENS (ESQUEMA NACIONAL DE SEGURIDAD) ASSESSMENT

**Estado:** ❌ NO COMPLIANT

**Aplicabilidad:** ENS es OBLIGATORIO para:
- Organismos del sector público español
- Proveedores de servicios al sector público

**¿defcon23.eu necesita ENS?**
- Si tiene contratos con administraciones públicas → SÍ
- Si es puramente B2B privado → NO (pero recomendable para credibilidad)

**Asumimos:** defcon23.eu busca contratos públicos → ENS requerido.

---

### **2.1 ENS CATEGORIZATION (RD 311/2022)**

**Metodología:** Evaluar 5 dimensiones de seguridad de la información:

| Dimensión | Definición | Nivel | Justificación |
|-----------|------------|-------|---------------|
| **Disponibilidad** | Impacto si servicio no disponible | **BAJO** | Downtime = inconveniente menor (no es servicio crítico) |
| **Integridad** | Impacto si datos corrompidos | **MEDIO** | Datos corrompidos = pérdida de confianza, leads incorrectos |
| **Confidencialidad** | Impacto si datos expuestos | **MEDIO** | Emails de clientes expuestos = GDPR breach + reputación |
| **Trazabilidad** | Necesidad de audit trail | **MEDIO** | Auditoría requerida para compliance (ISO 27001, GDPR) |
| **Autenticidad** | Verificación de identidad | **MEDIO** | B2B requiere KYC (Know Your Client) |

**CATEGORIZACIÓN ENS:** **NIVEL MEDIO** (la dimensión más alta determina el nivel)

**Implicaciones:**
- Auditoría externa ENS cada **2 años**
- Implementar 75 medidas de seguridad ENS
- Plan de Seguridad aprobado por responsable
- Coste auditoría: €3,000-€6,000

---

### **2.2 ENS CONTROLS MAPPING (75 medidas)**

**Estructura ENS:**
- **org (organizativas):** Políticas, roles, formación
- **op (operacionales):** Gestión de incidentes, backups, logs
- **mp (medidas de protección):** Cifrado, control de acceso, segmentación

**Gap Analysis ENS (resumen):**

| Control | Estado | Gap |
|---------|--------|-----|
| **org.1 Política de seguridad** | ❌ NO | No hay política aprobada |
| **org.2 Normativa de seguridad** | ❌ NO | No hay procedimientos documentados |
| **org.3 Procedimientos de seguridad** | ❌ NO | No hay procedimientos operativos |
| **org.4 Proceso de autorización** | ❌ NO | No hay proceso de autorización de sistemas |
| **op.pl.1 Análisis de riesgos** | ❌ NO | No hay análisis de riesgos ENS |
| **op.pl.2 Arquitectura de seguridad** | ⚠️ PARCIAL | Arquitectura segura, no documentada |
| **op.acc.1 Control de acceso** | ⚠️ PARCIAL | Control de acceso implementado, no documentado |
| **op.acc.5 Mecanismo de autenticación** | ⚠️ PARCIAL | MFA en GitHub, pendiente en otros |
| **op.exp.1 Inventario de activos** | ❌ NO | No hay inventario ENS |
| **op.exp.8 Registro de actividad** | ❌ NO | No hay audit logging |
| **op.exp.10 Protección de logs** | ❌ NO | Logs no protegidos contra manipulación |
| **mp.if.3 Cifrado** | ✅ SÍ | TLS 1.3 + cifrado at-rest |
| **mp.if.9 Prevención de código dañino** | ⚠️ PARCIAL | No hay rate limiting (DoS protection) |
| **mp.com.4 Seguridad de la red** | ✅ SÍ | Vercel network security |

**Compliance ENS:** ~40% (similar a ISO 27001)

---

### **2.3 ENS DOCUMENTATION REQUIREMENTS**

**Documentos obligatorios ENS:**

1. **Declaración de Aplicabilidad (DdA):** Selección de controles aplicables
2. **Plan de Seguridad:** Políticas, procedimientos, responsables
3. **Informe del Estado de Seguridad:** Revisión anual del cumplimiento
4. **Análisis de Riesgos:** Metodología MAGERIT (CCN-STIC-803)
5. **Plan de Adecuación:** Roadmap para implementar controles faltantes

**Prioridad:** 🟠 ALTO — Si se buscan contratos públicos, ENS es obligatorio

**Acción:** Iniciar categorización ENS + Plan de Seguridad (FASE 2)

---

## 3. NIS2 DIRECTIVE (EU 2022/2555) READINESS

**Estado:** ⚠️ PREPARACIÓN RECOMENDADA (no directamente aplicable aún)

**Entrada en vigor:** 17 de octubre de 2024  
**Aplicabilidad:**

| Categoría | Criterios | ¿Aplica a defcon23.eu? |
|-----------|-----------|------------------------|
| **Essential entities** | >250 empleados O >€50M revenue | ❌ NO (empresa pequeña) |
| **Important entities** | >50 empleados O >€10M revenue | ⚠️ POTENCIALMENTE (si escala) |
| **Managed Security Service Providers** | Proveedores de servicios de ciberseguridad | ⚠️ POSIBLEMENTE (es consultora de ciberseguridad) |

**Análisis:**
- defcon23.eu es una **consultora de ciberseguridad** → podría considerarse "managed security service provider"
- Si NIS2 aplica → requisitos similares a ISO 27001 + NIS2-específicos (incident reporting 24h/72h)

---

### **3.1 NIS2 KEY REQUIREMENTS**

Si defcon23.eu fuera sujeto a NIS2:

| Requisito | Estado actual | Gap |
|-----------|---------------|-----|
| **Risk management measures** | ❌ NO | No hay gestión de riesgos documentada |
| **Incident handling** | ❌ NO | No hay Incident Response Plan |
| **Business continuity (BCP)** | ⚠️ PARCIAL | Vercel HA, pero no hay BCP documentado |
| **Supply chain security** | ❌ NO | No hay evaluación de seguridad de proveedores |
| **Vulnerability disclosure** | ❌ NO | No hay security.txt ni vulnerability disclosure policy |
| **Incident reporting (24h early warning)** | ❌ NO | No hay proceso de notificación 24h |
| **Incident reporting (72h notification)** | ❌ NO | No hay proceso de notificación 72h |
| **Incident reporting (1 month final report)** | ❌ NO | No hay template de final report |
| **Top management accountability** | ⚠️ PARCIAL | CEO/CTO responsable, pero no documentado |

---

### **3.2 NIS2 INCIDENT REPORTING TIMELINE**

**Timeline obligatorio NIS2:**

1. **24 horas:** Early warning (incidente significativo detectado)
   - Formato: Email a CSIRT nacional (INCIBE-CERT en España)
   - Contenido: Naturaleza del incidente, impacto potencial

2. **72 horas:** Incident notification (informe detallado)
   - Formato: Formulario oficial INCIBE
   - Contenido: Causa, impacto, medidas tomadas

3. **1 mes:** Final report (informe post-mortem)
   - Formato: Informe completo
   - Contenido: Análisis raíz, lecciones aprendidas, acciones correctivas

**Gap:** defcon23.eu NO tiene estos procedimientos implementados.

**Acción (preparación):** Crear Incident Response Plan compatible con NIS2 (ver FASE 2)

---

### **3.3 NIS2 SUPPLY CHAIN SECURITY**

**Requisito NIS2:** Evaluar seguridad de la cadena de suministro.

**Proveedores críticos defcon23.eu:**
- Vercel (hosting)
- Resend (email)
- Cal.com (bookings)
- Notion (CRM)
- npm dependencies (código)

**Gap:** No hay Supplier Security Assessment.

**Acción:** Crear cuestionario de evaluación de proveedores (ver ISO 27001 5.19)

---

### **3.4 NIS2 VULNERABILITY DISCLOSURE**

**Requisito NIS2:** Coordinated Vulnerability Disclosure (CVD).

**Estado:** ❌ NO EXISTE

**Elementos requeridos:**
1. **security.txt** en `/.well-known/security.txt`
2. Email de contacto: security@defcon23.eu
3. PGP key (opcional pero recomendado)
4. Vulnerability disclosure policy (SLA respuesta, bug bounty, etc.)

**Acción:** Crear security.txt + Vulnerability Disclosure Policy

**Prioridad:** 🟡 MEDIO

---

### **3.5 NIS2 READINESS SCORE**

| Requisito | Implementado | Score |
|-----------|-------------|-------|
| Risk management | ❌ 0% | 0/10 |
| Incident handling | ❌ 0% | 0/10 |
| Business continuity | ⚠️ 50% | 5/10 |
| Supply chain security | ❌ 0% | 0/10 |
| Vulnerability management | ⚠️ 40% | 4/10 |
| Incident reporting (24h/72h) | ❌ 0% | 0/10 |
| Top management accountability | ⚠️ 30% | 3/10 |

**NIS2 Readiness:** **12/70 (17%)** — BAJO

**Recomendación:** Aunque NIS2 no aplique directamente hoy, **prepararse ahora** para:
- Escala futura (>€10M revenue)
- Requisito de clientes (clientes sujetos a NIS2 exigirán compliance a proveedores)
- Ventaja competitiva (poder decir "NIS2-ready")

---

## 4. eIDAS 2.0 & EUDI WALLET (2026 PREPARATION)

**Estado:** ⚠️ PREPARACIÓN RECOMENDADA (obligatorio 2027)

**Timeline:**
- **2025:** Piloto EUDI Wallet (Large Scale Pilot)
- **2026:** Rollout progresivo en estados miembros UE
- **2027:** Obligatorio que todos los servicios públicos y privados acepten EUDI Wallet

---

### **4.1 EUDI WALLET OVERVIEW**

**¿Qué es EUDI Wallet?**
- App móvil de identidad digital EU-wide
- Contiene:
  - **PID (Person Identification Data):** Nombre, fecha nacimiento, nacionalidad
  - **QEAA (Qualified Electronic Attestation of Attributes):** Cualificaciones profesionales, registro mercantil

**Use case para defcon23.eu:**
- Reemplazar formulario "Email + Empresa" por "Sign in with EUDI Wallet"
- Obtener datos verificados instantáneamente (KYC automático)
- Firmas electrónicas cualificadas para contratos

---

### **4.2 TECHNICAL INTEGRATION REQUIREMENTS**

**Protocolo:** OpenID4VC (OpenID for Verifiable Credentials)

**Arquitectura:**
1. Usuario abre EUDI Wallet app
2. Escanea QR code en defcon23.eu
3. Wallet solicita consentimiento para compartir PID
4. defcon23.eu recibe Verifiable Credential firmado
5. Backend valida credential (verificación criptográfica)

**Tech stack requerido:**
- OpenID4VC library (ej: `oid4vc` npm package)
- DID resolver (Decentralized Identifiers)
- Verifiable Credential verification

**Complejidad:** ALTA (pero librerías disponibles)

---

### **4.3 EUDI WALLET ROADMAP FOR defcon23.eu**

**Q2 2026 (Pilot):**
- Investigar OpenID4VC libraries
- Crear PoC: "Sign in with EUDI Wallet" en staging

**Q4 2026 (Production):**
- Implementar EUDI Wallet login en calculadora
- Mantener fallback tradicional (email + empresa) para usuarios sin wallet

**2027 (Obligatorio):**
- EUDI Wallet como método principal
- Email fallback solo para usuarios fuera de UE

**Prioridad:** 🟡 MEDIO (2026, no urgente ahora)

---

## EXECUTIVE SUMMARY: COMPLIANCE SCORE

| Framework | Compliance % | Gaps Críticos | Prioridad | Timeline |
|-----------|--------------|---------------|-----------|----------|
| **GDPR** | 25% | 8 | 🔴 CRÍTICO | 4 semanas |
| **ISO 27001** | 34% | 18 | 🔴 CRÍTICO | 16 semanas |
| **ENS** | 40% | 15 | 🟠 ALTO | 12 semanas |
| **NIS2** | 17% | 7 | 🟡 MEDIO | 8 semanas |
| **eIDAS 2.0** | 0% | N/A | 🟢 BAJO | 2026 |

---

## IMMEDIATE ACTIONS (NEXT 7 DAYS) ⚡

### **DAY 1:**
1. ✅ Habilitar MFA en Vercel, Resend, Cal.com, Notion
2. ✅ Crear email dpo@defcon23.eu + security@defcon23.eu
3. ✅ Suscribirse a CISA Alerts + ENISA Threat Landscape

### **DAYS 2-7:**
1. ✅ Redactar Privacy Policy GDPR-compliant (Art. 13)
2. ✅ Añadir consent checkbox en calculator
3. ✅ Crear tabla `consents` en DB
4. ✅ Solicitar DPAs a Vercel, Resend, Cal.com
5. ✅ Crear ROPA (Registro de Actividades de Tratamiento)
6. ✅ Redactar Política de Seguridad de la Información (ISO 27001 5.1)

---

## NEXT STEPS

1. **Aprobar Gap Analysis Reports** (ISO 27001 + GDPR/ENS/NIS2)
2. **Priorizar remediación:** GDPR primero (riesgo legal inmediato)
3. **Iniciar FASE 2:** Documentación compliance (50+ documentos)
4. **Asignar recursos:** 1 FTE durante 12 semanas + presupuesto auditor externo

---

**Fecha del informe:** 11 de febrero de 2026  
**Próxima revisión:** Post-remediation (mayo 2026)  
**Auditor:** Compliance.Sec∅ps Collective

**FIN DEL INFORME**
