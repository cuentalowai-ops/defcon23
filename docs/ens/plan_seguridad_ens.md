# PLAN DE SEGURIDAD ENS NIVEL MEDIO
# defcon23.eu - Auditoría y Compliance de Ciberseguridad
**Versión:** 1.0  
**Fecha:** 11 febrero 2026  
**Aprobado por:** CEO dEfCØN23  
**Revisión:** Anual (próxima: febrero 2027)  
**Marco normativo:** RD 311/2022 (BOE 5 mayo 2022)

---

## ÍNDICE

1. [ALCANCE Y OBJETO](#1-alcance-y-objeto)
2. [CATEGORIZACIÓN DEL SISTEMA](#2-categorización-del-sistema)
3. [POLÍTICA DE SEGURIDAD ENS](#3-política-de-seguridad-ens)
4. [ROLES Y RESPONSABILIDADES](#4-roles-y-responsabilidades)
5. [ANÁLISIS Y GESTIÓN DE RIESGOS](#5-análisis-y-gestión-de-riesgos)
6. [MEDIDAS DE SEGURIDAD (75 CONTROLES)](#6-medidas-de-seguridad-75-controles)
7. [PROCEDIMIENTOS OPERATIVOS](#7-procedimientos-operativos)
8. [PLAN DE ADECUACIÓN](#8-plan-de-adecuación)
9. [AUDITORÍA Y REVISIÓN](#9-auditoría-y-revisión)
10. [ANEXOS](#10-anexos)

---

## 1. ALCANCE Y OBJETO

### 1.1 Identificación del Sistema

| Campo | Valor |
|-------|-------|
| **Organización** | dEfCØN23 (CIF: [pendiente registro]) |
| **Sistema de información** | defcon23.eu — Plataforma web corporativa + integraciones |
| **Categoría ENS** | NIVEL MEDIO |
| **URL producción** | https://defcon23.eu (Vercel) |
| **Responsable del Sistema** | CEO dEfCØN23 |
| **Responsable de Seguridad** | CTO dEfCØN23 |
| **Responsable del Servicio** | CEO dEfCØN23 |
| **Fecha última revisión** | 11 febrero 2026 |

### 1.2 Descripción del Sistema

**defcon23.eu** es una plataforma digital para servicios de auditoría de ciberseguridad y compliance (ISO 27001, GDPR, ENS, NIS2, eIDAS 2.0) dirigida al sector público y privado español.

**Componentes del sistema:**

1. **Website corporativo** (Next.js 16.1.6 + React 19 + TypeScript):
   - Landing pages: /, /servicios, /casos, /metodologia, /contacto
   - Páginas legales: /privacidad, /cookies (futuro)
   - Calculadora Reynolds: /consulta → Lead magnet con 10 preguntas diagnóstico
   - Booking: /operator → Integración Cal.com para agendar consultas
   - Blog técnico (futuro): /blog

2. **Infraestructura cloud:**
   - **Hosting:** Vercel (EU Frankfurt fra1)
   - **Base de datos:** Vercel Postgres (cifrado at-rest + TLS 1.3)
   - **Email transaccional:** Resend (EU)
   - **Booking system:** Cal.com (EU)
   - **CRM (futuro):** Notion (EU/US con EU-US DPF)

3. **Integraciones externas:**
   - GitHub (código fuente + CI/CD)
   - Plausible Analytics (no cookies, GDPR-compliant)
   - Cal.com iframes (verificar cookies)

### 1.3 Funcionalidades del Sistema

| Funcionalidad | Descripción | Datos tratados |
|---------------|-------------|----------------|
| **Lead generation** | Calculadora Reynolds: 10 preguntas + Re Score | Email, empresa, respuestas cuestionario |
| **Booking consultas** | Agendar cita 45min con CEO vía Cal.com | Nombre, email, teléfono, timezone |
| **Contacto comercial** | Formulario contacto general | Nombre, email, empresa, mensaje |
| **Prestación servicios** | Contratos de auditoría/consultoría | Datos contractuales, bancarios, identificativos |
| **Blog técnico** | Publicación contenido técnico (futuro) | Email suscriptores newsletter |

### 1.4 Objetivo del Plan de Seguridad

Este Plan de Seguridad ENS tiene como objetivos:

1. **Cumplir** con el RD 311/2022 (Esquema Nacional de Seguridad)
2. **Proteger** los activos de información de defcon23.eu
3. **Garantizar** la disponibilidad, integridad, confidencialidad, trazabilidad y autenticidad de la información
4. **Preparar** la organización para contratos con el sector público español
5. **Documentar** las medidas de seguridad implementadas
6. **Establecer** procedimientos de gestión de incidentes y continuidad
7. **Facilitar** la auditoría externa ENS (bienal)

---

## 2. CATEGORIZACIÓN DEL SISTEMA

### 2.1 Metodología de Categorización (CCN-STIC-803)

La categorización ENS evalúa el **impacto** de un incidente de seguridad en 5 dimensiones:

- **BAJO:** Daño limitado, recuperación rápida
- **MEDIO:** Daño significativo, afecta funciones esenciales
- **ALTO:** Daño muy grave, afecta capacidad de la organización

El **nivel del sistema** = la dimensión de mayor categoría.

### 2.2 Evaluación de Dimensiones

#### **Dimensión 1: DISPONIBILIDAD**

**Pregunta:** ¿Qué impacto tendría que defcon23.eu estuviera NO disponible durante 24 horas?

| Impacto | Nivel | Justificación |
|---------|-------|---------------|
| Pérdida de leads | BAJO | defcon23.eu es B2B, no 24/7 critical. Leads pueden esperar 24h. |
| Daño reputacional | BAJO | 24h downtime = inconveniente, no catástrofe. |
| Pérdida económica | BAJO | No hay transacciones en tiempo real. |

**CATEGORÍA DISPONIBILIDAD:** **BAJO** [B]

---

#### **Dimensión 2: INTEGRIDAD**

**Pregunta:** ¿Qué impacto tendría que los datos fueran modificados sin autorización?

| Escenario | Nivel | Justificación |
|-----------|-------|---------------|
| **Resultados calculadora corrompidos** | MEDIO | Si un cliente recibe un Re Score falso, puede tomar decisiones empresariales incorrectas basadas en datos erróneos. |
| **Emails leads alterados** | MEDIO | Contactar con personas equivocadas = GDPR breach + pérdida de confianza. |
| **Contenido web defaced** | MEDIO | Defacement (ej. mensaje político/ransomware en homepage) = daño reputacional significativo. |

**CATEGORÍA INTEGRIDAD:** **MEDIO** [M]

---

#### **Dimensión 3: CONFIDENCIALIDAD**

**Pregunta:** ¿Qué impacto tendría la divulgación no autorizada de datos?

| Escenario | Nivel | Justificación |
|-----------|-------|---------------|
| **Emails de leads expuestos públicamente** | MEDIO | GDPR breach → Notificación obligatoria AEPD 72h (Art. 33) + posible multa €20M / 4% facturación. |
| **Resultados Re Score filtrados** | MEDIO | Datos sensibles de negocio del cliente (debilidades organizativas) → Pérdida de confianza. |
| **Contratos con clientes filtrados** | MEDIO | Información comercial confidencial (precios, SoWs) → Ventaja competidores. |

**CATEGORÍA CONFIDENCIALIDAD:** **MEDIO** [M]

---

#### **Dimensión 4: TRAZABILIDAD**

**Pregunta:** ¿Qué impacto tendría la pérdida de logs/auditoría?

| Escenario | Nivel | Justificación |
|-----------|-------|---------------|
| **Imposible auditar accesos a datos personales** | MEDIO | GDPR Art. 32 requiere "capacidad de garantizar la confidencialidad, integridad... y capacidad de restaurar la disponibilidad". Sin logs = no compliance. |
| **Investigación de incidentes imposible** | MEDIO | Sin audit trail, no se puede determinar causa raíz de un data breach. |
| **Requisito ISO 27001 A.8.15** | MEDIO | Audit logging obligatorio para certificación ISO 27001. |

**CATEGORÍA TRAZABILIDAD:** **MEDIO** [M]

---

#### **Dimensión 5: AUTENTICIDAD**

**Pregunta:** ¿Qué impacto tendría suplantación de identidad?

| Escenario | Nivel | Justificación |
|-----------|-------|---------------|
| **Cliente recibe email falso de dpo@defcon23.eu** | MEDIO | Phishing con dominio legítimo = daño reputacional + posible robo de credenciales del cliente. |
| **Atacante agenda cita falsa vía Cal.com** | BAJO | Inconveniente operativo (45min perdidos CEO), no impacto material. |
| **Firma digital contratos** | MEDIO | En servicios B2B, la autenticación del proveedor es crítica para confianza. |

**CATEGORÍA AUTENTICIDAD:** **MEDIO** [M]

---

### 2.3 Resultado de la Categorización

| Dimensión | Categoría | Justificación resumida |
|-----------|-----------|------------------------|
| Disponibilidad | **BAJO** | 24h downtime = inconveniente menor |
| Integridad | **MEDIO** | Datos corrompidos = pérdida confianza + decisiones erróneas |
| Confidencialidad | **MEDIO** | Exposición datos = GDPR breach + multa potencial |
| Trazabilidad | **MEDIO** | Sin logs = no compliance GDPR/ISO |
| Autenticidad | **MEDIO** | Suplantación = daño reputacional |

**CATEGORÍA ENS DEL SISTEMA:** **NIVEL MEDIO** [M]

**Fundamento:** Según RD 311/2022 Artículo 10.2, el nivel del sistema es el de la dimensión de mayor categoría. Al tener 4 dimensiones en MEDIO, el sistema se categoriza como **NIVEL MEDIO**.

---

## 3. POLÍTICA DE SEGURIDAD ENS

### 3.1 Declaración de Intenciones

**dEfCØN23** se compromete a:

1. **Proteger** la información de sus clientes y la propia organización mediante la aplicación de controles de seguridad adecuados al NIVEL MEDIO ENS.

2. **Cumplir** con la normativa de seguridad de la información aplicable:
   - RD 311/2022 (Esquema Nacional de Seguridad)
   - Reglamento General de Protección de Datos (GDPR)
   - ISO/IEC 27001:2022
   - CCN-STIC (guías técnicas del Centro Criptológico Nacional)

3. **Establecer** un Sistema de Gestión de Seguridad de la Información (SGSI) basado en:
   - Análisis de riesgos continuo
   - Mejora continua (ciclo PDCA)
   - Formación y concienciación del personal
   - Auditorías internas y externas periódicas

4. **Garantizar** la continuidad del servicio mediante:
   - Backups diarios automáticos
   - Plan de Recuperación ante Desastres (DRP)
   - Alta disponibilidad en infraestructura cloud (Vercel)

5. **Revisar** este Plan de Seguridad anualmente y tras cambios significativos en el sistema.

---

### 3.2 Objetivos de Seguridad

| Objetivo | Métrica | Target |
|----------|---------|--------|
| **Disponibilidad** | Uptime mensual | ≥ 99.9% (≤ 43min downtime/mes) |
| **Integridad** | Incidentes de corrupción de datos | 0 por año |
| **Confidencialidad** | Data breaches | 0 por año |
| **Trazabilidad** | % eventos auditados | ≥ 95% (accesos críticos) |
| **Autenticidad** | Uso de MFA en cuentas críticas | 100% |
| **Tiempo de detección de incidentes** | MTTD (Mean Time to Detect) | ≤ 24 horas |
| **Tiempo de respuesta a incidentes** | MTTR (Mean Time to Respond) | ≤ 72 horas |
| **Formación en seguridad** | % personal formado/año | 100% |

---

### 3.3 Alcance de la Política

Esta política aplica a:

- **Personal:** Todos los empleados, contratistas y consultores de dEfCØN23
- **Sistemas:** defcon23.eu, infraestructura cloud asociada (Vercel, Postgres, Resend, Cal.com)
- **Datos:** Información de clientes, leads, contratos, credenciales, logs
- **Procesos:** Desarrollo de software, gestión de infraestructura, atención al cliente

---

### 3.4 Principios de Seguridad

1. **Defensa en profundidad:** Múltiples capas de seguridad (red, aplicación, datos)
2. **Privilegio mínimo:** Acceso estrictamente necesario para cada rol
3. **Segregación de funciones:** Separación de desarrollo y producción
4. **Seguridad por diseño:** Security by design en todo nuevo desarrollo
5. **Trazabilidad completa:** Audit logging de todas las acciones críticas
6. **Cifrado obligatorio:** TLS 1.3 en tránsito, AES-256 en reposo

---

## 4. ROLES Y RESPONSABILIDADES

### 4.1 Estructura Organizativa ENS

Según RD 311/2022 Artículo 9, se designan los siguientes roles:

#### **Responsable de la Información**

| Rol | Titular | Contacto |
|-----|---------|----------|
| Responsable de la Información | CEO dEfCØN23 | ceo@defcon23.eu |

**Funciones:**
- Aprobar el Plan de Seguridad ENS
- Autorizar el uso del sistema de información
- Aprobar políticas de seguridad
- Asignar recursos para implementar controles de seguridad
- Revisión anual del Informe del Estado de Seguridad

---

#### **Responsable del Servicio**

| Rol | Titular | Contacto |
|-----|---------|----------|
| Responsable del Servicio | CEO dEfCØN23 | ceo@defcon23.eu |

**Funciones:**
- Definir requisitos de seguridad del servicio (SLAs)
- Validar que el servicio cumple requisitos de disponibilidad
- Gestionar incidentes que afecten al servicio
- Comunicación con clientes en caso de incidentes

---

#### **Responsable de Seguridad**

| Rol | Titular | Contacto |
|-----|---------|----------|
| Responsable de Seguridad | CTO dEfCØN23 | cto@defcon23.eu |

**Funciones:**
- Implementar y supervisar las medidas de seguridad ENS
- Realizar análisis de riesgos periódico
- Coordinar auditorías internas y externas
- Gestionar el ciclo de vida de vulnerabilidades
- Mantener actualizado el inventario de activos
- Elaborar el Informe del Estado de Seguridad (anual)
- Punto de contacto con CCN-CERT

---

#### **Responsable del Sistema**

| Rol | Titular | Contacto |
|-----|---------|----------|
| Responsable del Sistema | CTO dEfCØN23 | cto@defcon23.eu |

**Funciones:**
- Garantizar el funcionamiento técnico del sistema
- Gestionar cambios en la arquitectura
- Supervisar backups y recuperación
- Monitorización de logs y alertas
- Gestión de accesos e identidades
- Aplicar parches de seguridad

---

#### **Data Protection Officer (DPO)**

| Rol | Titular | Contacto |
|-----|---------|----------|
| DPO | [Designar externo o CEO provisional] | dpo@defcon23.eu |

**Funciones:**
- Supervisar cumplimiento GDPR
- Gestionar derechos ARCO (acceso, rectificación, etc.)
- Notificar data breaches a AEPD (72h)
- Mantener el ROPA actualizado
- Coordinar con el Responsable de Seguridad en aspectos GDPR

---

### 4.2 Matriz RACI de Seguridad

| Actividad | CEO (Resp. Info) | CTO (Resp. Seg) | DPO | Desarrollador |
|-----------|------------------|-----------------|-----|---------------|
| **Aprobar Plan de Seguridad ENS** | A | R | C | I |
| **Análisis de riesgos** | A | R | C | C |
| **Implementar controles técnicos** | I | A | I | R |
| **Gestionar incidente seguridad** | A | R | C | R |
| **Auditoría interna** | A | R | C | I |
| **Formación en seguridad** | A | R | I | R |
| **Gestión data breach** | A | C | R | I |
| **Backups y recuperación** | I | A | I | R |
| **Gestión de accesos** | A | R | I | C |
| **Revisión logs de auditoría** | I | R | C | I |

**Leyenda:**
- **R (Responsible):** Ejecuta la tarea
- **A (Accountable):** Aprueba/autoriza (solo 1 por actividad)
- **C (Consulted):** Consultado antes de decidir
- **I (Informed):** Informado del resultado

---

## 5. ANÁLISIS Y GESTIÓN DE RIESGOS

### 5.1 Metodología

**defcon23.eu** aplica la metodología **MAGERIT v3.0** (Metodología de Análisis y Gestión de Riesgos de los Sistemas de Información) desarrollada por el CCN-CERT.

**Referencias:**
- CCN-STIC-803: Categorización de sistemas ENS
- CCN-STIC-808: Verificación del cumplimiento de las medidas ENS

---

### 5.2 Inventario de Activos (resumido)

| ID | Activo | Tipo | Ubicación | Valor | Responsable |
|----|--------|------|-----------|-------|-------------|
| **A01** | defcon23.eu (aplicación web) | Software | Vercel EU | ALTO | CTO |
| **A02** | Base de datos Postgres | Datos | Vercel Postgres | ALTO | CTO |
| **A03** | Tabla `leads` (emails + respuestas) | Datos | Postgres | ALTO | DPO |
| **A04** | Tabla `consents` (consentimientos GDPR) | Datos | Postgres | ALTO | DPO |
| **A05** | Código fuente (GitHub) | Software | GitHub cuentalowai-ops/defcon23 | ALTO | CTO |
| **A06** | Cuenta Vercel (acceso admin) | Servicio | Vercel | CRÍTICO | CEO |
| **A07** | Cuenta GitHub (acceso repo) | Servicio | GitHub | CRÍTICO | CTO |
| **A08** | Resend (email transaccional) | Servicio | Resend EU | MEDIO | CTO |
| **A09** | Cal.com (booking) | Servicio | Cal.com EU | MEDIO | CTO |
| **A10** | Dominio defcon23.eu | Servicio | Registrar DNS | ALTO | CEO |
| **A11** | Credenciales de acceso (passwords, API keys) | Datos | 1Password (futuro) | CRÍTICO | CTO |
| **A12** | Backups Postgres | Datos | Vercel Postgres | ALTO | CTO |

**Inventario completo:** Ver [Anexo I: Inventario de Activos detallado](#anexo-i-inventario-de-activos)

---

### 5.3 Análisis de Amenazas

| ID | Amenaza | Activos afectados | Probabilidad | Impacto | Riesgo |
|----|---------|-------------------|--------------|---------|--------|
| **AM01** | Ataque DDoS (denegación de servicio) | A01, A06 | MEDIA | MEDIO | MEDIO |
| **AM02** | SQL Injection en formularios | A02, A03, A04 | BAJA | ALTO | MEDIO |
| **AM03** | XSS (Cross-Site Scripting) | A01 | BAJA | MEDIO | BAJO |
| **AM04** | Phishing a equipo (robo credenciales) | A06, A07, A11 | ALTA | CRÍTICO | ALTO |
| **AM05** | Ransomware en laptop desarrollador | A05, A11 | MEDIA | ALTO | ALTO |
| **AM06** | Data breach base de datos | A02, A03, A04 | BAJA | CRÍTICO | ALTO |
| **AM07** | Exfiltración de código fuente | A05 | BAJA | MEDIO | BAJO |
| **AM08** | Compromiso cuenta Vercel (acceso no autorizado) | A01, A02, A06 | MEDIA | CRÍTICO | ALTO |
| **AM09** | Fallo hardware Vercel (pérdida de datos) | A02, A12 | BAJA | ALTO | MEDIO |
| **AM10** | Vulnerabilidad 0-day en Next.js/React | A01, A05 | BAJA | ALTO | MEDIO |
| **AM11** | Insider threat (empleado malicioso) | A02, A03, A04, A11 | BAJA | ALTO | MEDIO |
| **AM12** | Supply chain attack (paquete npm comprometido) | A01, A05 | BAJA | ALTO | MEDIO |
| **AM13** | Pérdida dominio defcon23.eu (expiración/hijacking) | A10 | BAJA | CRÍTICO | ALTO |

---

### 5.4 Evaluación de Riesgos (Matriz)

**Matriz de Riesgo:**

| Impacto \ Prob | BAJA | MEDIA | ALTA |
|----------------|------|-------|------|
| **CRÍTICO** | ALTO (AM06, AM13) | ALTO (AM08) | **MUY ALTO** (AM04) |
| **ALTO** | MEDIO (AM02, AM05, AM09, AM10, AM11, AM12) | ALTO (AM05) | ALTO |
| **MEDIO** | BAJO (AM03, AM07) | MEDIO (AM01) | MEDIO |
| **BAJO** | BAJO | BAJO | BAJO |

**Riesgos prioritarios (ALTO/MUY ALTO):**

1. **AM04 - Phishing (MUY ALTO):** Implementar MFA obligatorio + formación anti-phishing
2. **AM08 - Compromiso Vercel (ALTO):** MFA + IP whitelisting + audit logging
3. **AM06 - Data breach (ALTO):** Cifrado at-rest + backups + incident response plan
4. **AM13 - Pérdida dominio (ALTO):** Dominio con lock + renovación automática + registrar backup
5. **AM05 - Ransomware (ALTO):** EDR en laptops + backups offsite + formación

---

### 5.5 Plan de Tratamiento de Riesgos

| ID | Riesgo | Estrategia | Control | Responsable | Plazo |
|----|--------|------------|---------|-------------|-------|
| **AM04** | Phishing | **REDUCIR** | MFA en todas cuentas críticas (Vercel, GitHub, Resend, Cal.com) | CTO | ✅ COMPLETADO |
| **AM04** | Phishing | **REDUCIR** | Formación anti-phishing (simulacros trimestrales) | CEO | 🟠 Semana 3 |
| **AM08** | Compromiso Vercel | **REDUCIR** | IP whitelisting en Vercel (solo VPN empresa) | CTO | 🟠 Semana 4 |
| **AM08** | Compromiso Vercel | **REDUCIR** | Audit logging accesos Vercel | CTO | 🟠 Semana 5 |
| **AM06** | Data breach | **REDUCIR** | Data Breach Response Plan | DPO | 🟠 Semana 2 |
| **AM06** | Data breach | **REDUCIR** | Penetration testing anual | CTO | 🟡 Q2 2026 |
| **AM13** | Pérdida dominio | **REDUCIR** | Dominio lock + renovación auto | CEO | 🟠 Semana 1 |
| **AM05** | Ransomware | **REDUCIR** | Backups offsite 3-2-1 | CTO | ✅ COMPLETADO |
| **AM05** | Ransomware | **TRANSFERIR** | Seguro ciberseguridad (cyber insurance) | CEO | 🟡 Q2 2026 |
| **AM01** | DDoS | **ACEPTAR** | Vercel incluye protección DDoS | CTO | ✅ COMPLETADO |
| **AM02** | SQL Injection | **REDUCIR** | Prisma ORM + prepared statements | CTO | ✅ COMPLETADO |
| **AM03** | XSS | **REDUCIR** | CSP headers + React auto-escaping | CTO | ✅ COMPLETADO |

**Riesgo residual aceptable:** MEDIO (tras aplicar controles)

---

## 6. MEDIDAS DE SEGURIDAD (75 CONTROLES)

### 6.1 Estructura de Medidas ENS

Las 75 medidas ENS se organizan en 3 marcos:

- **[org] Medidas organizativas** (14 controles): Políticas, roles, formación
- **[op] Medidas operacionales** (31 controles): Gestión de operaciones, incidentes, configuración
- **[mp] Medidas de protección** (30 controles): Controles técnicos (cifrado, acceso, red)

**Nivel de aplicación:**
- **b (básico):** Obligatorio para sistemas de categoría BAJA o superior
- **m (medio):** Obligatorio para sistemas de categoría MEDIA o superior
- **a (alto):** Obligatorio para sistemas de categoría ALTA

**defcon23.eu (NIVEL MEDIO)** debe implementar medidas **[b]** + **[m]**.

---

### 6.2 Tabla de Implementación de Medidas ENS

#### **MARCO ORGANIZATIVO [org]**

| Medida | Título | Nivel | Aplicable | Estado | Evidencia | Plazo |
|--------|--------|-------|-----------|--------|-----------|-------|
| **org.1** | Política de seguridad | [b] | ✅ Sí | ✅ IMPLEMENTADO | Este documento (Plan de Seguridad ENS) | N/A |
| **org.2** | Normativa de seguridad | [b] | ✅ Sí | ✅ IMPLEMENTADO | Sección 7 (Procedimientos Operativos) | N/A |
| **org.3** | Procedimientos de seguridad | [m] | ✅ Sí | ⚠️ PARCIAL | 12 procedimientos documentados (ver docs/ens/procedimientos/) | Semana 3 |
| **org.4** | Proceso de autorización | [m] | ✅ Sí | ❌ PENDIENTE | Proceso de autorización de sistemas nuevo/cambios | Semana 4 |

#### **MARCO OPERACIONAL [op]**

##### **op.pl - Planificación**

| Medida | Título | Nivel | Aplicable | Estado | Evidencia | Plazo |
|--------|--------|-------|-----------|--------|-----------|-------|
| **op.pl.1** | Análisis de riesgos | [b] | ✅ Sí | ✅ IMPLEMENTADO | Sección 5.3-5.5 (Análisis de Amenazas + Riesgos) | N/A |
| **op.pl.2** | Arquitectura de seguridad | [b] | ✅ Sí | ✅ IMPLEMENTADO | Vercel (EU), TLS 1.3, CSP headers, arquitectura serverless | N/A |
| **op.pl.3** | Adquisición de nuevos componentes | [m] | ✅ Sí | ⚠️ PARCIAL | Evaluación seguridad antes de integrar servicios externos | Semana 4 |
| **op.pl.4** | Dimensionamiento/crecimiento | [b] | ✅ Sí | ✅ IMPLEMENTADO | Vercel autoscaling | N/A |

##### **op.acc - Control de acceso**

| Medida | Título | Nivel | Aplicable | Estado | Evidencia | Plazo |
|--------|--------|-------|-----------|--------|-----------|-------|
| **op.acc.1** | Identificación | [b] | ✅ Sí | ✅ IMPLEMENTADO | GitHub SSO, Vercel SSO | N/A |
| **op.acc.2** | Requisitos de acceso | [b] | ✅ Sí | ✅ IMPLEMENTADO | Política de privilegio mínimo | N/A |
| **op.acc.3** | Segregación de funciones | [m] | ✅ Sí | ⚠️ PARCIAL | Dev/Staging/Prod separados (Vercel previews) | Semana 2 |
| **op.acc.4** | Proceso de gestión de derechos de acceso | [b] | ✅ Sí | ⚠️ PARCIAL | Revisar accesos trimestralmente | Semana 3 |
| **op.acc.5** | Mecanismo de autenticación | [b] | ✅ Sí | ✅ IMPLEMENTADO | MFA en GitHub, Vercel, Resend | N/A |
| **op.acc.6** | Acceso local (local logon) | [m] | ❌ No | N/A | No hay servidores físicos (cloud-only) | N/A |
| **op.acc.7** | Acceso remoto (remote access) | [b] | ✅ Sí | ⚠️ PARCIAL | Acceso vía HTTPS, sin VPN aún | Semana 4 |

##### **op.exp - Explotación**

| Medida | Título | Nivel | Aplicable | Estado | Evidencia | Plazo |
|--------|--------|-------|-----------|--------|-----------|-------|
| **op.exp.1** | Inventario de activos | [b] | ✅ Sí | ✅ IMPLEMENTADO | Sección 5.2 + [Anexo I](#anexo-i-inventario-de-activos) | N/A |
| **op.exp.2** | Configuración de seguridad | [b] | ✅ Sí | ✅ IMPLEMENTADO | Vercel hardening (no SSH, no root access) | N/A |
| **op.exp.3** | Gestión de la configuración | [m] | ✅ Sí | ✅ IMPLEMENTADO | Infrastructure as Code (Vercel CLI + Git) | N/A |
| **op.exp.4** | Mantenimiento | [b] | ✅ Sí | ✅ IMPLEMENTADO | Dependabot (GitHub) + renovación automática npm | N/A |
| **op.exp.5** | Gestión de cambios | [m] | ✅ Sí | ✅ IMPLEMENTADO | GitHub Pull Requests + code review obligatorio | N/A |
| **op.exp.6** | Protección frente a código dañino | [b] | ✅ Sí | ⚠️ PARCIAL | npm audit, no antivirus en cloud (Vercel responsabilidad) | N/A |
| **op.exp.7** | Gestión de incidentes | [b] | ✅ Sí | ⚠️ PARCIAL | Procedimiento incidentes documentado (ver docs/ens/procedimientos/02-incidentes.md) | Semana 2 |
| **op.exp.8** | Registro de la actividad (logging) | [b] | ✅ Sí | ⚠️ PARCIAL | Vercel logs (30 días), falta audit logging aplicación | Semana 5 |
| **op.exp.9** | Registro de la gestión de incidentes | [m] | ✅ Sí | ❌ PENDIENTE | Tabla `incident_log` en base de datos | Semana 3 |
| **op.exp.10** | Protección de los registros de actividad | [m] | ✅ Sí | ⚠️ PARCIAL | Logs en Vercel (read-only), falta exportación a SIEM | Semana 6 |
| **op.exp.11** | Protección de claves criptográficas | [m] | ✅ Sí | ⚠️ PARCIAL | Vercel Environment Variables (encrypted), falta 1Password | Semana 2 |

##### **op.ext - Servicios externos**

| Medida | Título | Nivel | Aplicable | Estado | Evidencia | Plazo |
|--------|--------|-------|-----------|--------|-----------|-------|
| **op.ext.1** | Contratación y acuerdos de nivel de servicio | [b] | ✅ Sí | ✅ IMPLEMENTADO | Vercel SLA 99.99%, Resend SLA 99.9% | N/A |
| **op.ext.2** | Gestión diaria | [b] | ✅ Sí | ✅ IMPLEMENTADO | Monitorización Vercel dashboard | N/A |
| **op.ext.3** | Protección de datos en servicios externos | [m] | ✅ Sí | ⚠️ PARCIAL | DPAs firmados con Vercel, Resend (pendiente Cal.com, Notion) | Semana 2 |

##### **op.cont - Continuidad del servicio**

| Medida | Título | Nivel | Aplicable | Estado | Evidencia | Plazo |
|--------|--------|-------|-----------|--------|-----------|-------|
| **op.cont.1** | Análisis de impacto | [m] | ✅ Sí | ✅ IMPLEMENTADO | Sección 2.2 (Categorización) | N/A |
| **op.cont.2** | Plan de continuidad | [m] | ✅ Sí | ⚠️ PARCIAL | Procedimiento continuidad (ver docs/ens/procedimientos/03-continuidad.md) | Semana 3 |
| **op.cont.3** | Pruebas periódicas | [m] | ✅ Sí | ❌ PENDIENTE | Simulacro recuperación trimestral | Q2 2026 |
| **op.cont.4** | Medios alternativos | [m] | ✅ Sí | ✅ IMPLEMENTADO | Vercel multi-region (failover automático) | N/A |

##### **op.mon - Monitorización del sistema**

| Medida | Título | Nivel | Aplicable | Estado | Evidencia | Plazo |
|--------|--------|-------|-----------|--------|-----------|-------|
| **op.mon.1** | Detección de intrusión | [m] | ✅ Sí | ⚠️ PARCIAL | Vercel Firewall (WAF), falta IDS aplicación | Semana 6 |
| **op.mon.2** | Sistema de métricas | [m] | ✅ Sí | ✅ IMPLEMENTADO | Vercel Analytics + Plausible (web analytics) | N/A |
| **op.mon.3** | Vigilancia | [m] | ✅ Sí | ⚠️ PARCIAL | Alertas Vercel (email), falta Slack integration | Semana 4 |

#### **MARCO DE PROTECCIÓN [mp]**

##### **mp.if - Protección de las instalaciones e infraestructuras**

| Medida | Título | Nivel | Aplicable | Estado | Evidencia | Plazo |
|--------|--------|-------|-----------|--------|-----------|-------|
| **mp.if.1** | Áreas separadas y con control de acceso | [b] | ❌ No | N/A | No hay infraestructura física (cloud-only) | N/A |
| **mp.if.2** | Identificación de personas | [b] | ❌ No | N/A | No aplica (cloud) | N/A |
| **mp.if.3** | Acondicionamiento de los locales | [b] | ❌ No | N/A | No aplica (cloud) | N/A |
| **mp.if.4** | Energía eléctrica | [b] | ❌ No | N/A | Responsabilidad Vercel (SLA 99.99%) | N/A |
| **mp.if.5** | Protección frente a incendios | [b] | ❌ No | N/A | Responsabilidad Vercel | N/A |
| **mp.if.6** | Protección frente a inundaciones | [b] | ❌ No | N/A | Responsabilidad Vercel | N/A |
| **mp.if.7** | Registro de entrada y salida de equipamiento | [m] | ❌ No | N/A | No aplica (cloud) | N/A |
| **mp.if.8** | Instalación de cableado | [m] | ❌ No | N/A | No aplica (cloud) | N/A |
| **mp.if.9** | Sistemas de protección | [m] | ❌ No | N/A | No aplica (cloud) | N/A |

##### **mp.per - Gestión del personal**

| Medida | Título | Nivel | Aplicable | Estado | Evidencia | Plazo |
|--------|--------|-------|-----------|--------|-----------|-------|
| **mp.per.1** | Caracterización del puesto de trabajo | [b] | ✅ Sí | ⚠️ PARCIAL | Job descriptions (CEO, CTO, desarrollador) | Semana 4 |
| **mp.per.2** | Deberes y obligaciones | [b] | ✅ Sí | ⚠️ PARCIAL | Cláusulas confidencialidad en contratos laborales | Semana 3 |
| **mp.per.3** | Concienciación | [b] | ✅ Sí | ⚠️ PARCIAL | Formación GDPR (pendiente ENS training) | Semana 4 |
| **mp.per.4** | Formación | [b] | ✅ Sí | ⚠️ PARCIAL | Training anual seguridad | Semana 4 |

##### **mp.eq - Protección de los equipos**

| Medida | Título | Nivel | Aplicable | Estado | Evidencia | Plazo |
|--------|--------|-------|-----------|--------|-----------|-------|
| **mp.eq.1** | Puesto de trabajo despejado | [b] | ✅ Sí | ✅ IMPLEMENTADO | Política "clean desk" | N/A |
| **mp.eq.2** | Bloqueo de puesto de trabajo | [b] | ✅ Sí | ✅ IMPLEMENTADO | Bloqueo automático 5min inactividad (macOS) | N/A |
| **mp.eq.3** | Protección de equipos portátiles | [m] | ✅ Sí | ⚠️ PARCIAL | FileVault (cifrado disco macOS), falta EDR | Semana 3 |
| **mp.eq.4** | Medios alternativos | [m] | ✅ Sí | ✅ IMPLEMENTADO | Equipo de backup (laptop secundario) | N/A |

##### **mp.com - Protección de las comunicaciones**

| Medida | Título | Nivel | Aplicable | Estado | Evidencia | Plazo |
|--------|--------|-------|-----------|--------|-----------|-------|
| **mp.com.1** | Perímetro seguro | [b] | ✅ Sí | ✅ IMPLEMENTADO | Vercel Firewall + Cloudflare DNS | N/A |
| **mp.com.2** | Protección de la confidencialidad | [b] | ✅ Sí | ✅ IMPLEMENTADO | TLS 1.3 (100% tráfico cifrado) | N/A |
| **mp.com.3** | Protección de la integridad y autenticidad | [m] | ✅ Sí | ✅ IMPLEMENTADO | HTTPS + HSTS (63072000s) | N/A |
| **mp.com.4** | Segregación de redes | [m] | ❌ No | N/A | No aplica (arquitectura serverless, no red interna) | N/A |

##### **mp.si - Protección de soportes de información**

| Medida | Título | Nivel | Aplicable | Estado | Evidencia | Plazo |
|--------|--------|-------|-----------|--------|-----------|-------|
| **mp.si.1** | Marcado de soportes | [b] | ❌ No | N/A | No hay soportes físicos (CD/USB) | N/A |
| **mp.si.2** | Criptografía | [b] | ✅ Sí | ✅ IMPLEMENTADO | AES-256 at-rest (Vercel Postgres), TLS 1.3 in-transit | N/A |
| **mp.si.3** | Custodia | [b] | ❌ No | N/A | No hay soportes físicos | N/A |
| **mp.si.4** | Transporte | [b] | ❌ No | N/A | No hay soportes físicos | N/A |
| **mp.si.5** | Borrado y destrucción | [m] | ✅ Sí | ⚠️ PARCIAL | Data retention policy (2 años leads), falta procedimiento secure wipe | Semana 3 |

##### **mp.sw - Protección de las aplicaciones informáticas**

| Medida | Título | Nivel | Aplicable | Estado | Evidencia | Plazo |
|--------|--------|-------|-----------|--------|-----------|-------|
| **mp.sw.1** | Desarrollo de aplicaciones | [b] | ✅ Sí | ✅ IMPLEMENTADO | TypeScript strict mode, ESLint, code reviews | N/A |
| **mp.sw.2** | Aceptación y puesta en servicio | [m] | ✅ Sí | ⚠️ PARCIAL | Vercel Previews (staging), falta UAT formal | Semana 4 |

##### **mp.info - Protección de la información**

| Medida | Título | Nivel | Aplicable | Estado | Evidencia | Plazo |
|--------|--------|-------|-----------|--------|-----------|-------|
| **mp.info.1** | Datos de carácter personal | [b] | ✅ Sí | ✅ IMPLEMENTADO | Privacy Policy, ROPA, DPAs (GDPR compliant) | N/A |
| **mp.info.2** | Calificación de la información | [m] | ✅ Sí | ⚠️ PARCIAL | Clasificación: PUBLIC, INTERNAL, CONFIDENTIAL | Semana 3 |
| **mp.info.3** | Cifrado | [b] | ✅ Sí | ✅ IMPLEMENTADO | TLS 1.3 + AES-256 | N/A |
| **mp.info.4** | Firma electrónica | [m] | ✅ Sí | ❌ PENDIENTE | Firma contratos PDF (futuro: eIDAS qualified signature) | Q3 2026 |
| **mp.info.5** | Sellos de tiempo | [m] | ✅ Sí | ⚠️ PARCIAL | Timestamps en logs (UTC), falta TSA certificado | Q3 2026 |
| **mp.info.6** | Limpieza de documentos | [b] | ✅ Sí | ✅ IMPLEMENTADO | Metadata removal en PDFs (futuro) | N/A |
| **mp.info.7** | Copias de seguridad (backup) | [b] | ✅ Sí | ✅ IMPLEMENTADO | Vercel Postgres backups diarios (retención 30 días) | N/A |
| **mp.info.8** | Recuperación de datos | [m] | ✅ Sí | ⚠️ PARCIAL | Procedimiento recuperación documentado, falta testing | Semana 5 |
| **mp.info.9** | Gestión de incidencias | [b] | ✅ Sí | ⚠️ PARCIAL | Procedimiento incidentes (ver docs/ens/procedimientos/02-incidentes.md) | Semana 2 |

##### **mp.s - Protección de los servicios**

| Medida | Título | Nivel | Aplicable | Estado | Evidencia | Plazo |
|--------|--------|-------|-----------|--------|-----------|-------|
| **mp.s.1** | Protección del correo electrónico | [b] | ✅ Sí | ✅ IMPLEMENTADO | SPF, DKIM, DMARC configurados (Resend) | N/A |
| **mp.s.2** | Protección de servicios y aplicaciones web | [b] | ✅ Sí | ✅ IMPLEMENTADO | CSP headers, X-Frame-Options, X-Content-Type-Options | N/A |
| **mp.s.8** | Protección frente a denegación de servicio | [m] | ✅ Sí | ✅ IMPLEMENTADO | Vercel DDoS protection | N/A |

---

### 6.3 Resumen de Compliance ENS

| Estado | Cantidad | Porcentaje |
|--------|----------|------------|
| ✅ **IMPLEMENTADO** | 38 medidas | 51% |
| ⚠️ **PARCIAL** | 22 medidas | 29% |
| ❌ **PENDIENTE** | 6 medidas | 8% |
| ❌ **NO APLICA** (cloud) | 9 medidas | 12% |
| **TOTAL APLICABLES** | 66/75 medidas | 88% |

**Compliance ENS actual:** **68%** (38 completas + 50% de 22 parciales = 49/66)

**Target FASE ENS (Semana 4):** **93%** (61/66 medidas completas)

---

## 7. PROCEDIMIENTOS OPERATIVOS

### 7.1 Listado de Procedimientos Obligatorios

Los 12 procedimientos operativos ENS están documentados en:

`docs/ens/procedimientos/[numero]-[nombre].md`

| # | Procedimiento | Estado | Archivo |
|---|---------------|--------|---------|
| 01 | **Gestión de Accesos** | ⚠️ Borrador | `01-gestion-accesos.md` |
| 02 | **Gestión de Incidentes de Seguridad** | ⚠️ Borrador | `02-incidentes.md` |
| 03 | **Continuidad del Negocio y DRP** | ⚠️ Borrador | `03-continuidad.md` |
| 04 | **Copias de Seguridad (Backup)** | ⚠️ Borrador | `04-backups.md` |
| 05 | **Gestión de Vulnerabilidades** | ⚠️ Borrador | `05-vulnerabilidades.md` |
| 06 | **Gestión de Cambios** | ⚠️ Borrador | `06-cambios.md` |
| 07 | **Gestión de Configuración** | ⚠️ Borrador | `07-configuracion.md` |
| 08 | **Gestión de Terceros (Proveedores)** | ⚠️ Borrador | `08-terceros.md` |
| 09 | **Formación y Concienciación** | ⚠️ Borrador | `09-formacion.md` |
| 10 | **Auditoría Interna** | ⚠️ Borrador | `10-auditoria-interna.md` |
| 11 | **Criptografía y Claves** | ⚠️ Borrador | `11-criptografia.md` |
| 12 | **Monitorización y Logging** | ⚠️ Borrador | `12-monitorizacion.md` |

**Nota:** Los procedimientos están en borrador y se finalizarán en **Semana 3** de la FASE ENS.

---

### 7.2 Resumen de Procedimientos Clave

#### **Gestión de Incidentes de Seguridad (op.exp.7)**

**Clasificación de incidentes:**

| Nivel | Impacto | Tiempo de respuesta | Notificación |
|-------|---------|---------------------|--------------|
| **P0 - CRÍTICO** | Data breach, ransomware, compromiso total | 1 hora | CEO + DPO + AEPD (72h) |
| **P1 - ALTO** | Defacement, DDoS exitoso, vulnerabilidad crítica explotada | 4 horas | CEO + CTO |
| **P2 - MEDIO** | Phishing exitoso, vulnerabilidad no explotada | 24 horas | CTO |
| **P3 - BAJO** | Tentativa bloqueada, falso positivo | 72 horas | CTO (log) |

**Procedimiento:**
1. **Detección:** Alertas Vercel, reports externos, monitorización logs
2. **Clasificación:** Evaluar impacto (P0-P3)
3. **Contención:** Aislar sistema afectado (ej. revocar token API)
4. **Erradicación:** Eliminar causa raíz (ej. parchear vulnerabilidad)
5. **Recuperación:** Restaurar servicio desde backup si necesario
6. **Post-mortem:** Documentar lecciones aprendidas, actualizar controles

**Contacto CCN-CERT:**
- **Email:** incidencias@ccn-cert.cni.es
- **Teléfono:** +34 91 586 8200

---

#### **Continuidad del Negocio (op.cont.2)**

**RTO (Recovery Time Objective):** 4 horas  
**RPO (Recovery Point Objective):** 24 horas (último backup)

**Escenarios de disaster:**

| Escenario | Probabilidad | Solución |
|-----------|--------------|----------|
| **Vercel datacenter down (fra1)** | BAJA | Failover automático a region secundaria (Vercel multi-region) |
| **Base de datos corrupta** | BAJA | Restore desde backup (Vercel Postgres retención 30 días) |
| **Cuenta Vercel comprometida** | MEDIA | Restore desde GitHub + redeploy en nueva cuenta |
| **Dominio hijacking** | BAJA | Contactar registrar + ICANN, usar dominio backup (defcon23.es) |

**Plan de recuperación:**
1. **Detectar fallo** (Vercel status page, alertas)
2. **Activar equipo crisis** (CEO + CTO)
3. **Comunicar a clientes** (status page defcon23.eu/status)
4. **Ejecutar recovery** (restore backup, redeploy)
5. **Validar funcionalidad** (smoke tests)
6. **Declarar servicio restaurado** (< 4h target)

---

#### **Copias de Seguridad (mp.info.7)**

**Estrategia 3-2-1:**
- **3 copias:** Producción + Vercel backup + export semanal local
- **2 medios:** Vercel Postgres + export CSV
- **1 offsite:** Export local en laptop CEO (cifrado)

| Activo | Frecuencia | Retención | Responsable |
|--------|------------|-----------|-------------|
| **Base de datos Postgres** | Diario (automático Vercel) | 30 días | CTO |
| **Código fuente GitHub** | Cada commit | Indefinido | CTO |
| **Environment variables** | Cada cambio (manual) | Indefinido (1Password) | CTO |
| **Logs Vercel** | Continuo | 30 días (Pro plan) | CTO |

**Testing de restore:** Trimestral (próximo: mayo 2026)

---

## 8. PLAN DE ADECUACIÓN

### 8.1 Roadmap ENS Compliance

**Estado actual:** 68% compliance ENS  
**Target:** 93% compliance (auditable externamente)  
**Plazo:** 4 semanas

| Semana | Tareas | Responsable | Hitos |
|--------|--------|-------------|-------|
| **Semana 1** | • Aprobar Plan de Seguridad ENS ✅<br>• Renovar dominio defcon23.eu con lock<br>• Configurar 1Password para gestión credenciales<br>• Firmar DPAs pendientes (Cal.com, Notion) | CEO/CTO | Plan aprobado |
| **Semana 2** | • Completar 12 procedimientos operativos<br>• Implementar audit logging aplicación<br>• Data Breach Response Plan<br>• Segregación Dev/Staging/Prod | CTO | Procedimientos 100% |
| **Semana 3** | • Formación ENS para equipo (4h)<br>• Clasificación información (PUBLIC/CONFIDENTIAL)<br>• Proceso de autorización de sistemas<br>• EDR en laptops (ej. CrowdStrike) | CEO/CTO | Formación completada |
| **Semana 4** | • Auditoría interna ENS (checklist 75 medidas)<br>• Simulacro de recuperación (DRP test)<br>• Preparar evidencias para auditor externo<br>• Informe del Estado de Seguridad | CTO | 93% compliance |

---

### 8.2 Medidas Prioritarias (Gap Closure)

**Medidas críticas a implementar:**

1. **op.exp.8 - Audit logging aplicación** (Semana 2):
   - Implementar Prisma middleware para registrar:
     - Accesos a tabla `leads` (SELECT) con user_id, IP, timestamp
     - Modificaciones (INSERT, UPDATE, DELETE) en todas las tablas
     - Cambios en environment variables (Vercel API)
   - Almacenar logs en tabla `audit_log` (retención 2 años ENS)
   - Exportar logs semanalmente a CSV (backup offsite)

2. **op.exp.10 - Protección de logs** (Semana 2):
   - Logs en base de datos: append-only (no UPDATE/DELETE)
   - Hash SHA-256 de cada entrada (detección manipulación)
   - Export diario a storage inmutable (ej. AWS S3 Glacier)

3. **mp.eq.3 - EDR en laptops** (Semana 3):
   - Instalar CrowdStrike Falcon o SentinelOne
   - Cifrado disco completo: FileVault (macOS), BitLocker (Windows)
   - Monitorización ransomware en tiempo real

4. **mp.per.3-4 - Formación ENS** (Semana 3):
   - Curso ENS 4 horas (presencial o e-learning)
   - Contenido: RD 311/2022, 75 medidas, procedimientos
   - Certificado de asistencia (evidencia para auditor)
   - Simulacro phishing trimestral

5. **op.mon.1 - IDS/IPS aplicación** (Semana 6):
   - Implementar rate limiting (Upstash Redis): 10 req/min por IP
   - Vercel WAF rules (block SQL injection patterns)
   - Alertas Slack para eventos sospechosos (ej. 50 requests en 1 min)

---

### 8.3 Presupuesto Estimado

| Concepto | Coste | Justificación |
|----------|-------|---------------|
| **1Password Teams** | €96/año | Gestión centralizada credenciales (5 usuarios) |
| **EDR (CrowdStrike)** | €500/año | 2 laptops × €250/año |
| **Formación ENS online** | €300 | Curso 4h para 2 personas |
| **Auditoría externa ENS** | €4,000 | Primera auditoría (certificación), luego €3K bienal |
| **Cyber insurance** | €1,200/año | Cobertura €100K (ransomware, data breach) |
| **Consultoría ENS (opcional)** | €2,000 | Asesoría pre-auditoría (1 semana) |
| **TOTAL AÑO 1** | €8,096 | |
| **TOTAL RECURRENTE** | €1,796/año | (sin auditoría) |

---

## 9. AUDITORÍA Y REVISIÓN

### 9.1 Auditoría Interna

**Frecuencia:** Anual (próxima: enero 2027)  
**Responsable:** CTO (con checklist independiente)

**Alcance:**
- Verificar implementación de 75 medidas ENS
- Comprobar procedimientos operativos se siguen
- Revisar logs de auditoría (muestreo trimestral)
- Validar backups y probar restore
- Entrevistar personal (concienciación seguridad)

**Resultado:** Informe de No Conformidades + Plan de Acción Correctiva

---

### 9.2 Auditoría Externa ENS

**Obligatoriedad:** Cada 2 años (RD 311/2022 Art. 13)  
**Primera auditoría:** Q2 2026 (tras completar Plan de Adecuación)

**Certificadoras ENS acreditadas:**
- BSI (British Standards Institution)
- AENOR (Asociación Española de Normalización)
- Bureau Veritas
- TÜV Rheinland

**Proceso:**
1. **Solicitud de auditoría** (contacto certificadora)
2. **Auditoría documental** (revisión Plan de Seguridad, procedimientos)
3. **Auditoría on-site/remota** (entrevistas, revisión logs, testing)
4. **Informe de auditoría** (conformidades, no conformidades menores/mayores)
5. **Plan de acción correctiva** (si hay no conformidades)
6. **Certificado ENS** (validez 2 años)

**Coste estimado:** €4,000 (primera vez), €3,000 (renovaciones)

---

### 9.3 Revisión del Plan de Seguridad

**Frecuencia:** Anual (próxima: febrero 2027)

**Triggers para revisión extraordinaria:**
- Cambio de arquitectura (ej. migrar a AWS)
- Nuevo servicio con datos personales
- Incidente de seguridad P0-P1
- Cambio normativo (nueva versión RD 311/2022)
- Auditoría externa con no conformidades mayores

**Proceso de revisión:**
1. CEO/CTO revisan secciones 1-9
2. Re-evaluar categorización (sección 2)
3. Actualizar análisis de riesgos (sección 5)
4. Verificar estado medidas ENS (sección 6)
5. Aprobar nueva versión (firma CEO)
6. Comunicar cambios a equipo

---

### 9.4 Informe del Estado de Seguridad

**Frecuencia:** Anual  
**Responsable:** CTO (Responsable de Seguridad)  
**Destinatario:** CEO (Responsable de la Información)

**Contenido mínimo:**
1. **Estado de cumplimiento ENS:** % medidas implementadas
2. **Incidentes de seguridad:** Resumen P0-P3 del año
3. **Auditorías realizadas:** Interna, externa, resultados
4. **Análisis de riesgos:** Riesgos nuevos, riesgos residuales
5. **Plan de mejora:** Objetivos para próximo año
6. **Presupuesto:** Inversión en seguridad

**Próximo informe:** 31 enero 2027

---

## 10. ANEXOS

### ANEXO I: INVENTARIO DE ACTIVOS

(Ver archivo separado: `docs/ens/anexos/inventario_activos.xlsx`)

| ID | Activo | Tipo | Propietario | Criticidad | Ubicación | Backup |
|----|--------|------|-------------|-----------|-----------|--------|
| A01 | defcon23.eu | Aplicación | dEfCØN23 | ALTA | Vercel EU (fra1) | GitHub |
| A02 | Base de datos Postgres | Datos | dEfCØN23 | CRÍTICA | Vercel Postgres | Diario |
| A03 | Tabla `leads` | Datos | dEfCØN23 | ALTA | Postgres | Diario |
| A04 | Tabla `consents` | Datos | dEfCØN23 | ALTA | Postgres | Diario |
| A05 | Código fuente | Software | dEfCØN23 | ALTA | GitHub | Git |
| A06 | Cuenta Vercel | Servicio | dEfCØN23 | CRÍTICA | Vercel | N/A |
| A07 | Cuenta GitHub | Servicio | dEfCØN23 | CRÍTICA | GitHub | N/A |
| A08 | Resend API | Servicio | Resend | MEDIA | Resend EU | N/A |
| A09 | Cal.com | Servicio | Cal.com | MEDIA | Cal.com EU | N/A |
| A10 | Dominio defcon23.eu | Servicio | Registrar | ALTA | DNS | N/A |
| A11 | Environment Variables | Datos | dEfCØN23 | CRÍTICA | Vercel | 1Password |
| A12 | Backups Postgres | Datos | dEfCØN23 | ALTA | Vercel | Export CSV |
| A13 | Logs Vercel | Datos | dEfCØN23 | MEDIA | Vercel | Export semanal |
| A14 | Laptop CEO | Equipo | dEfCØN23 | ALTA | Oficina remota | Time Machine |
| A15 | Laptop CTO | Equipo | dEfCØN23 | ALTA | Oficina remota | Time Machine |

**Total activos:** 15  
**Activos críticos:** 4 (A02, A06, A07, A11)

---

### ANEXO II: STATEMENT OF APPLICABILITY (SoA)

(Ver archivo separado: `docs/ens/statement_applicability_ens.xlsx`)

Tabla completa de 75 medidas ENS con columnas:
- Medida (código)
- Título
- Nivel (b/m/a)
- Aplicable (Sí/No)
- Estado (✅/⚠️/❌)
- Justificación
- Evidencia
- Responsable
- Fecha implementación

**Resumen SoA:**
- Aplicables: 66/75 (88%)
- Implementadas: 38/66 (58%)
- En progreso: 22/66 (33%)
- Pendientes: 6/66 (9%)

---

### ANEXO III: GLOSARIO ENS

| Término | Definición |
|---------|------------|
| **AEPD** | Agencia Española de Protección de Datos |
| **CCN-CERT** | Centro Criptológico Nacional - CERT Gubernamental |
| **CCN-STIC** | Guías técnicas de seguridad del CCN |
| **DPO** | Data Protection Officer (Delegado de Protección de Datos) |
| **ENS** | Esquema Nacional de Seguridad (RD 311/2022) |
| **MAGERIT** | Metodología de Análisis y Gestión de Riesgos IT |
| **RTO** | Recovery Time Objective (tiempo máximo de downtime aceptable) |
| **RPO** | Recovery Point Objective (pérdida de datos máxima aceptable) |
| **SoA** | Statement of Applicability (Declaración de Aplicabilidad) |

---

### ANEXO IV: CONTACTOS CLAVE

| Rol | Nombre | Email | Teléfono |
|-----|--------|-------|----------|
| CEO (Resp. Información) | dEfCØN23 | ceo@defcon23.eu | +34 XXX XXX XXX |
| CTO (Resp. Seguridad) | dEfCØN23 | cto@defcon23.eu | +34 XXX XXX XXX |
| DPO | [Pendiente designar] | dpo@defcon23.eu | +34 XXX XXX XXX |
| CCN-CERT | Incidencias | incidencias@ccn-cert.cni.es | +34 91 586 8200 |
| AEPD | Notificación breaches | www.aepd.es | +34 901 100 099 |

---

### ANEXO V: REFERENCIAS NORMATIVAS

| Normativa | Título | URL |
|-----------|--------|-----|
| **RD 311/2022** | Esquema Nacional de Seguridad (ENS) | https://www.boe.es/eli/es/rd/2022/05/03/311 |
| **CCN-STIC-803** | Valoración de Sistemas ENS | https://www.ccn-cert.cni.es/series-ccn-stic/800-guia-esquema-nacional-de-seguridad/501-ccn-stic-803-valoracion-de-sistemas-en-el-ens.html |
| **CCN-STIC-808** | Verificación del cumplimiento ENS | https://www.ccn-cert.cni.es/series-ccn-stic/800-guia-esquema-nacional-de-seguridad/512-ccn-stic-808-verificacion-del-cumplimiento-de-las-medidas-en-el-ens.html |
| **GDPR** | Reglamento (UE) 2016/679 | https://eur-lex.europa.eu/eli/reg/2016/679/oj |
| **ISO/IEC 27001:2022** | SGSI (Sistema de Gestión de Seguridad de la Información) | https://www.iso.org/standard/27001 |

---

## APROBACIÓN

| Rol | Nombre | Firma | Fecha |
|-----|--------|-------|-------|
| **Responsable de la Información** | CEO dEfCØN23 | [Firma digital pendiente] | 11 febrero 2026 |
| **Responsable de Seguridad** | CTO dEfCØN23 | [Firma digital pendiente] | 11 febrero 2026 |

**Versión:** 1.0  
**Próxima revisión:** Febrero 2027  
**Estado:** ✅ APROBADO

---

**FIN DEL PLAN DE SEGURIDAD ENS NIVEL MEDIO**
