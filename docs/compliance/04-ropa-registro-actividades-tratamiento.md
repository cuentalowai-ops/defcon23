# ROPA — REGISTRO DE ACTIVIDADES DE TRATAMIENTO
## defcon23.eu (Art. 30 RGPD)

**Fecha de creación:** 11 de febrero de 2026  
**Responsable del ROPA:** dEfCØN23 (DPO: dpo@defcon23.eu)  
**Próxima revisión:** 11 de agosto de 2026 (semestral)

---

## INFORMACIÓN DEL RESPONSABLE DEL TRATAMIENTO

**Nombre/Razón social:** dEfCØN23  
**CIF/NIF:** [PENDIENTE]  
**Dirección:** [Dirección fiscal Madrid, España]  
**Email:** intel@defcon23.eu  
**DPO:** dpo@defcon23.eu  
**Website:** https://defcon23.eu

---

## ACTIVIDADES DE TRATAMIENTO

---

### ACTIVIDAD 1: CALCULADORA REYNOLDS (LEAD MAGNET)

| Campo | Descripción |
|-------|-------------|
| **Nombre de la actividad** | Calculadora Reynolds — Diagnóstico organizativo y generación de leads |
| **Finalidad del tratamiento** | • Calcular el Número de Reynolds organizativo (Re Score)<br>• Enviar informe de resultados personalizado<br>• Lead generation para servicios de ciberseguridad<br>• Marketing directo (con consentimiento) |
| **Base legal** | **Consentimiento** (Art. 6.1.a RGPD)<br>Consentimiento explícito mediante checkbox en formulario |
| **Categorías de interesados** | • Profesionales que solicitan diagnóstico organizativo<br>• Responsables de empresas interesados en servicios de ciberseguridad<br>• Leads potenciales (B2B) |
| **Categorías de datos personales** | • **Datos identificativos:** Email corporativo<br>• **Datos profesionales:** Nombre de empresa<br>• **Datos de evaluación:** Respuestas a 10 preguntas sobre la organización (no son datos personales directos, pero vinculados al email)<br>• **Datos técnicos:** Dirección IP (logs), timestamp de envío |
| **Categorías de destinatarios** | **Encargados de tratamiento:**<br>• **Vercel Inc.** (hosting de la web y base de datos)<br>• **Resend Labs Inc.** (envío de emails transaccionales)<br>• **Notion Labs Inc.** (CRM interno - si se implementa)<br><br>**NO se ceden datos a terceros con fines comerciales o publicitarios** |
| **Transferencias internacionales** | **NO hay transferencias fuera de la UE.**<br>• Vercel: Región UE (Frankfurt, Alemania)<br>• Resend: Región UE<br>• Notion: Región UE prioritaria, con posibilidad de almacenamiento en EE.UU. bajo EU-US Data Privacy Framework |
| **Plazo de conservación** | • **2 años** desde la última interacción si NO se convierte en cliente<br>• **6 años** si se convierte en cliente (obligación fiscal)<br>• **Supresión automática** tras el plazo de retención<br>• **Supresión anticipada** a solicitud del interesado (derecho de supresión Art. 17 RGPD) |
| **Medidas de seguridad** | **Técnicas:**<br>• Cifrado TLS 1.3 en tránsito<br>• Cifrado at-rest en base de datos (Vercel Postgres)<br>• Control de acceso con MFA (autenticación multifactor)<br>• Audit logging de accesos a datos (implementación en curso)<br>• Backups automáticos diarios (retención 30 días)<br><br>**Organizativas:**<br>• Política de Seguridad de la Información (ISO 27001)<br>• NDAs firmados por personal con acceso a datos<br>• Formación anual en protección de datos<br>• Plan de Respuesta a Brechas de Seguridad (72h a AEPD) |
| **Registro de consentimientos** | Tabla `consents` en base de datos con:<br>• Email del interesado<br>• Timestamp del consentimiento<br>• Dirección IP<br>• Versión de la Política de Privacidad aceptada<br>• Estado del consentimiento (activo/retirado) |

---

### ACTIVIDAD 2: PRESTACIÓN DE SERVICIOS DE CONSULTORÍA

| Campo | Descripción |
|-------|-------------|
| **Nombre de la actividad** | Prestación de servicios de auditoría de ciberseguridad y consultoría de compliance |
| **Finalidad del tratamiento** | • Gestión de la relación contractual<br>• Prestación de servicios de auditoría y consultoría<br>• Facturación y cobro de servicios<br>• Comunicaciones relacionadas con el servicio<br>• Gestión de reclamaciones y atención post-venta |
| **Base legal** | • **Ejecución de contrato** (Art. 6.1.b RGPD)<br>• **Obligación legal** (Art. 6.1.c RGPD) — Conservación de facturas (Ley General Tributaria) |
| **Categorías de interesados** | • Clientes (personas físicas) que contratan servicios en nombre de su empresa<br>• Representantes legales de empresas<br>• Puntos de contacto en organizaciones clientes |
| **Categorías de datos personales** | • **Datos identificativos:** Nombre, apellidos, DNI/NIE/Pasaporte, NIF/CIF<br>• **Datos de contacto:** Email, teléfono, dirección postal<br>• **Datos profesionales:** Empresa, cargo, departamento<br>• **Datos bancarios:** Número de cuenta (si domiciliación bancaria)<br>• **Datos de facturación:** Dirección fiscal, datos fiscales de la empresa<br>• **Datos del servicio:** Tipo de auditoría/consultoría contratada, fechas, entregables |
| **Categorías de destinatarios** | **Encargados de tratamiento:**<br>• **Vercel Inc.** (almacenamiento de datos contractuales)<br>• **Gestoría/Asesoría fiscal** (facturación y cumplimiento fiscal)<br>• **Banco/Entidad financiera** (procesamiento de pagos)<br><br>**Obligación legal:**<br>• **AEAT** (Agencia Tributaria) — Facturas y datos fiscales<br>• **TGSS** (Tesorería General de la Seguridad Social) — Si hay empleados |
| **Transferencias internacionales** | **NO hay transferencias fuera de la UE** (salvo Notion en EE.UU. bajo EU-US DPF si se usa como CRM) |
| **Plazo de conservación** | • **Duración del contrato** + **6 años** (obligación legal fiscal — Ley General Tributaria Art. 66 y 70)<br>• Datos de contacto: **2 años adicionales** tras finalizar el contrato para comunicaciones post-servicio<br>• **NO se pueden suprimir antes de 6 años** por obligación fiscal (excepción Art. 17.3.b RGPD) |
| **Medidas de seguridad** | Mismas medidas que Actividad 1 + adicionales:<br>• **Cifrado de documentos confidenciales** (informes de auditoría, hallazgos)<br>• **Acceso restringido** a datos de clientes (solo personal autorizado)<br>• **NDAs reforzados** para consultores externos<br>• **Protocolos de destrucción segura** de documentación física (si aplica) |

---

### ACTIVIDAD 3: RESERVAS DE CONSULTA (CAL.COM)

| Campo | Descripción |
|-------|-------------|
| **Nombre de la actividad** | Gestión de reservas de consultas de ciberseguridad (Cal.com) |
| **Finalidad del tratamiento** | • Gestionar solicitudes de reserva de consultas gratuitas<br>• Confirmar citas por email<br>• Realizar la consulta de ciberseguridad<br>• Seguimiento post-consulta (conversión a cliente) |
| **Base legal** | • **Consentimiento** (Art. 6.1.a RGPD)<br>• **Medidas precontractuales** (Art. 6.1.b RGPD) — Si la consulta deriva en contrato |
| **Categorías de interesados** | • Profesionales que solicitan consulta gratuita<br>• Potenciales clientes (leads calificados) |
| **Categorías de datos personales** | • **Datos identificativos:** Nombre<br>• **Datos de contacto:** Email, teléfono (opcional)<br>• **Datos técnicos:** Zona horaria, preferencias de horario<br>• **Notas de la consulta:** Descripción del problema/necesidad (opcional, texto libre) |
| **Categorías de destinatarios** | **Encargados de tratamiento:**<br>• **Cal.com Inc.** (plataforma de reservas)<br>• **Google Calendar / Microsoft Outlook** (sincronización de calendario — si se configura)<br>• **Resend** (emails de confirmación de cita) |
| **Transferencias internacionales** | Cal.com almacena datos en la UE (región prioritaria). Consultar DPA de Cal.com. |
| **Plazo de conservación** | • **1 año** desde la fecha de la consulta<br>• Si NO acude a la consulta: **6 meses** desde la fecha de reserva<br>• Si se convierte en cliente: datos pasan a Actividad 2 (prestación de servicios) |
| **Medidas de seguridad** | • Cal.com es GDPR-compliant (verificar certificaciones)<br>• Cifrado TLS 1.3<br>• Control de acceso a calendario (solo personal autorizado)<br>• DPA firmado con Cal.com |

---

### ACTIVIDAD 4: CONTACTO GENERAL (FORMULARIO DE CONTACTO)

| Campo | Descripción |
|-------|-------------|
| **Nombre de la actividad** | Gestión de consultas generales a través del formulario de contacto |
| **Finalidad del tratamiento** | • Responder a consultas de información<br>• Atender solicitudes de colaboración<br>• Gestionar solicitudes de ejercicio de derechos RGPD |
| **Base legal** | **Consentimiento** (Art. 6.1.a RGPD) |
| **Categorías de interesados** | • Usuarios del sitio web<br>• Potenciales clientes<br>• Personas que ejercen derechos RGPD<br>• Candidatos a empleo (si se habilita formulario de RRHH) |
| **Categorías de datos personales** | • **Datos identificativos:** Nombre<br>• **Datos de contacto:** Email<br>• **Datos profesionales:** Empresa (opcional)<br>• **Contenido del mensaje:** Texto libre (puede contener datos adicionales) |
| **Categorías de destinatarios** | **Encargados de tratamiento:**<br>• **Resend** (notificaciones por email)<br>• **Notion** (gestión de tickets de contacto - si se implementa) |
| **Transferencias internacionales** | NO (Resend y Notion en UE / EU-US DPF) |
| **Plazo de conservación** | • **1 año** desde la recepción de la consulta<br>• Si deriva en contratación: datos pasan a Actividad 2 |
| **Medidas de seguridad** | • Cifrado TLS 1.3<br>• Emails de contacto almacenados de forma segura<br>• Acceso restringido a buzón de contacto |

---

### ACTIVIDAD 5: LOGS DE SEGURIDAD Y AUDITORÍA

| Campo | Descripción |
|-------|-------------|
| **Nombre de la actividad** | Registro de actividad (logs) para seguridad de la información y cumplimiento de LSSI |
| **Finalidad del tratamiento** | • Seguridad de la información (detección de ataques, prevención de fraude)<br>• Cumplimiento de obligación legal (Ley de Servicios de la Sociedad de la Información)<br>• Auditoría de accesos a datos personales (Art. 32 RGPD)<br>• Investigación de incidentes de seguridad |
| **Base legal** | • **Interés legítimo** (Art. 6.1.f RGPD) — Protección de sistemas<br>• **Obligación legal** (Art. 6.1.c RGPD) — Ley 34/2002 (LSSI) |
| **Categorías de interesados** | • Todos los usuarios del sitio web<br>• Personal interno con acceso a datos |
| **Categorías de datos personales** | • **Dirección IP**<br>• **Timestamp** (fecha y hora de acceso)<br>• **URL visitada**<br>• **User-agent** (navegador, SO)<br>• **Referrer** (página de origen)<br>• **Audit logs:** Usuario que accedió a datos, acción realizada, timestamp |
| **Categorías de destinatarios** | **Encargados de tratamiento:**<br>• **Vercel Inc.** (logs de infraestructura)<br>• **Plausible Analytics** (analítica web anónima — NO se almacena IP) |
| **Transferencias internacionales** | NO (Vercel en UE) |
| **Plazo de conservación** | • **90 días** para logs de acceso (Vercel)<br>• **2 años** para audit logs de accesos a datos personales (compliance RGPD)<br>• **Datos analíticos agregados:** Indefinidamente (anonimizados) |
| **Medidas de seguridad** | • Logs protegidos contra modificación (write-once)<br>• Acceso restringido a logs (solo administradores)<br>• Anonimización de IPs en analítica (Plausible) |

---

## EVALUACIÓN DE RIESGOS (ANÁLISIS DE IMPACTO)

### ¿Se requiere DPIA (Data Protection Impact Assessment)?

**Criterios Art. 35.3 RGPD:**
1. Evaluación sistemática y exhaustiva de aspectos personales (profiling) → **NO**
2. Tratamiento a gran escala de categorías especiales de datos (datos sensibles Art. 9) → **NO**
3. Observación sistemática a gran escala de zonas de acceso público → **NO**

**CONCLUSIÓN:** **NO se requiere DPIA** para las actividades de tratamiento de defcon23.eu.

**Justificación:**
- Solo se tratan datos de contacto básicos (email, nombre, empresa)
- No se tratan datos sensibles (salud, origen racial, opiniones políticas, etc.)
- No se realiza profiling automatizado con efectos jurídicos
- Escala: <10,000 interesados/año (estimado)

**Monitorización:** Revisar esta decisión si:
- Se implementa scoring automatizado con efectos contractuales
- Se escala a >100,000 usuarios/año
- Se añaden nuevas finalidades de tratamiento

---

## ENCARGADOS DE TRATAMIENTO (DPAs REQUERIDOS)

| Encargado | Servicio | DPA firmado | Certificaciones | Contacto DPO |
|-----------|----------|-------------|-----------------|--------------|
| **Vercel Inc.** | Hosting + Base de datos | ❌ PENDIENTE | SOC 2, ISO 27001, GDPR | privacy@vercel.com |
| **Resend Labs Inc.** | Email transaccional | ❌ PENDIENTE | SOC 2, GDPR | privacy@resend.com |
| **Cal.com Inc.** | Reservas de citas | ❌ PENDIENTE | GDPR-compliant | privacy@cal.com |
| **Notion Labs Inc.** | CRM (potencial) | ❌ PENDIENTE | SOC 2, ISO 27001, EU-US DPF | privacy@makenotion.com |

**ACCIÓN URGENTE:** Solicitar y firmar DPAs con todos los encargados antes de [FECHA LÍMITE: 1 mes].

---

## PROCEDIMIENTOS ARCO (DERECHOS DE LOS INTERESADOS)

### Procedimiento de ejercicio de derechos:

1. **Canal de recepción:** dpo@defcon23.eu
2. **Verificación de identidad:** Copia de DNI/NIE/Pasaporte
3. **Plazo de respuesta:** 1 mes (extensible 2 meses si complejidad alta)
4. **Formato de respuesta:** Email + certificado de ejercicio de derecho

### SLA (Service Level Agreement):
- **Acuse de recibo:** 72 horas
- **Resolución completa:** 30 días naturales
- **Casos complejos:** Comunicar extensión a 60 días en los primeros 30 días

### Registro de solicitudes:
Tabla `arco_requests` en base de datos con:
- ID de solicitud
- Email del interesado
- Tipo de derecho ejercido (acceso, rectificación, supresión, etc.)
- Fecha de recepción
- Fecha de resolución
- Estado (pendiente, en proceso, resuelto)

---

## BRECHAS DE SEGURIDAD (DATA BREACHES)

### Procedimiento de notificación:

**Escenario de breach:**
- Acceso no autorizado a base de datos
- Filtración de emails de leads
- Ransomware en sistemas
- Pérdida de laptop con datos

**Timeline:**
1. **Detección:** Inmediata (monitorización de logs)
2. **Evaluación de impacto:** 24 horas (clasificar severidad)
3. **Notificación a AEPD:** 72 horas (Art. 33 RGPD)
4. **Notificación a interesados:** Sin demora (si riesgo alto Art. 34 RGPD)

**Responsable:** DPO (dpo@defcon23.eu) + CTO

**Templates:**
- Notificación a AEPD: [docs/templates/breach-notification-aepd.md]
- Notificación a usuarios: [docs/templates/breach-notification-users.md]

---

## REVISIONES Y ACTUALIZACIONES

**Frecuencia de revisión del ROPA:** Semestral (cada 6 meses)

**Próxima revisión:** 11 de agosto de 2026

**Responsable:** DPO (dpo@defcon23.eu)

**Eventos que requieren actualización del ROPA:**
- Nuevas actividades de tratamiento
- Cambios en finalidades o bases legales
- Nuevos encargados de tratamiento
- Cambios en plazos de conservación
- Incidentes de seguridad significativos
- Modificaciones legislativas (RGPD, LOPDGDD)

---

## APROBACIÓN

**Fecha de aprobación:** [FECHA]  
**Aprobado por:** [Nombre CEO/CTO]  
**Cargo:** Responsable del tratamiento  
**Firma:** _______________________

---

**Versión:** 1.0  
**Fecha de creación:** 11 de febrero de 2026  
**Próxima revisión:** 11 de agosto de 2026

**FIN DEL ROPA**
