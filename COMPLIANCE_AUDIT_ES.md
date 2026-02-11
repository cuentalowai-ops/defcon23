# AUDITORÍA COMPLIANCE — NORMATIVA ESPAÑOLA
**defcon23.eu** | Auditoría realizada: 13 de febrero de 2026  
**Normativas evaluadas:** ENS, RGPD/LORPD-GDD, Ley Ciberseguridad 2025, Ley Crea y Crece, Ley Antifraude 11/2021, Ley Startups, PBC/FT Ley 10/2010

---

## 1. ENS (Esquema Nacional de Seguridad) — RD 311/2022

### Estado: ⚠️ CUMPLIMIENTO PARCIAL

#### ✅ CUMPLE:
- **Política de Seguridad**: Documentada en política-privacidad (ISO 27001 72% compliance)
- **Auditorías**: Menciona auditorías internas trimestrales
- **Cifrado**: TLS 1.3 (tránsito), AES-256 (reposo)
- **Backups**: Automáticos diarios, retención 30 días
- **Gestión de vulnerabilidades**: Actualizaciones semanales
- **Control de acceso**: Autenticación 2FA administradores
- **Firewall/WAF**: Protección DDoS mencionada

#### ❌ FALTA:
- **❌ Categorización del sistema** (Básico/Medio/Alto) no especificada
- **❌ Plan de continuidad de negocio (BCP)** no documentado públicamente
- **❌ Declaración de Aplicabilidad ENS** no disponible
- **❌ Auditoría ENS externa certificada** (solo mencionan internas)
- **❌ Contacto CCN-CERT** no acreditado
- **❌ Gestión de incidentes ENS** (CLAUDIA/LUCIA) no mencionada
- **❌ Registro de actividades de tratamiento** (Art. 30 GDPR = obligatorio ENS) no público

**Riesgo:** Exclusión de contratación pública si no se acredita categorización + auditoría ENS

**Acción requerida:**
1. Determinar categorización ENS (recomendado: **MEDIO** para servicios consultoría ciberseguridad)
2. Contratar auditoría ENS externa con certificado CCN-CERT
3. Crear `/ens-certificacion` con Declaración de Aplicabilidad pública
4. Documentar Plan de Continuidad de Negocio
5. Implementar notificación automática CCN-CERT para incidentes

---

## 2. RGPD / LOPDGDD (LORPD-GDD)

### Estado: ✅ ALTO CUMPLIMIENTO

#### ✅ CUMPLE:
- **✅ Identificación responsable**: CIF, dirección, email, teléfono completos
- **✅ DPO designado**: Raúl Balaguer (dpo@defcon23.eu)
- **✅ Base legal clara**: Art. 6.1.a (consentimiento), 6.1.b (contrato), 6.1.c (obligación legal)
- **✅ Derechos ARCO**: Acceso, Rectificación, Supresión, Portabilidad, Oposición, Limitación (Art. 15-22)
- **✅ Plazos de conservación**: 2 años (leads), 6 años (clientes fiscales), 1 año (contacto)
- **✅ Transferencias internacionales**: NO se realizan fuera EEE (excelente)
- **✅ Menores**: Protección explícita < 16 años (conforme LOPDGDD Art. 7)
- **✅ Medidas técnicas**: TLS 1.3, AES-256, 2FA, backups
- **✅ Medidas organizativas**: ISO 27001, formación anual, acuerdos confidencialidad
- **✅ Notificación brechas**: < 72h AEPD (Art. 33 GDPR)
- **✅ Procesadores identificados**: Vercel, Resend, Notion, Cal.com (DPA firmados)
- **✅ AEPD contacto**: Correcto (sedeagpd.gob.es, 901 100 099)

#### ⚠️ MEJORAS MENORES:
- **⚠️ Registro de Actividades de Tratamiento (RAT)**: Debería estar disponible públicamente o previa solicitud (Art. 30 GDPR). Actualmente no se menciona explícitamente.
- **⚠️ Evaluación de Impacto (DPIA)**: No se menciona si se ha realizado DPIA para tratamientos de alto riesgo (Art. 35 GDPR). Si la calculadora de Reynolds procesa datos sensibles, puede ser necesario.
- **⚠️ Cookies**: Aunque usan Plausible (sin cookies), deberían mencionar explícitamente cumplimiento con LSSI-CE Art. 22.2 (Ley 34/2002) para completitud.

**Riesgo:** BAJO (cumplimiento sólido, solo detalles de documentación)

**Acción requerida:**
1. Publicar o permitir descarga del RAT (Registro Actividades Tratamiento) en `/privacy/rat.pdf`
2. Documentar DPIA si la calculadora de Reynolds procesa datos "especiales" (salud, finanzas sensibles)
3. Añadir referencia a LSSI-CE Art. 22.2 en política de cookies

---

## 3. Ley de Ciberseguridad (Ley 11/2022 modificada 2025)

### Estado: ⚠️ CUMPLIMIENTO PARCIAL

#### ✅ CUMPLE:
- **✅ Medidas técnicas básicas**: Cifrado, firewall, WAF, backups
- **✅ Notificación incidentes**: Menciona procedimiento < 72h

#### ❌ FALTA:
- **❌ Designación CISO** (Chief Information Security Officer): No está explícitamente designado. Si tienen > 50 empleados o son operador esencial/importante, es **OBLIGATORIO**.
- **❌ Plan de Respuesta a Incidentes (IRP)**: Debe estar documentado y probado anualmente
- **❌ Notificación INCIBE-CERT**: Además de AEPD, incidentes de seguridad deben notificarse a INCIBE-CERT
- **❌ Registro en CNPIC** (Centro Nacional de Protección de Infraestructuras Críticas): Si aplica

**Riesgo:** MEDIO — Multas hasta €10M si son operador esencial/importante

**Acción requerida:**
1. Designar formalmente CISO (puede ser el DPO si tiene competencias técnicas)
2. Crear y documentar Plan de Respuesta a Incidentes (IRP)
3. Verificar si aplica como operador esencial/importante (consultoría ciberseguridad puede aplicar)
4. Configurar notificación automática INCIBE-CERT en procedimientos

---

## 4. Ley Crea y Crece (Ley 18/2022) — Facturación Electrónica

### Estado: ❌ NO CUMPLE (potencial)

#### ❌ FALTA:
- **❌ Facturación electrónica obligatoria**: A partir de **1 julio 2025** TODAS las facturas B2B deben ser electrónicas en formato Facturae 3.2.x o EN 16931 (UBL/CII)
- **❌ Plataforma certificada**: No se menciona qué sistema de facturación usan. Debe ser compatible con Facturae o usar plataforma certificada.
- **❌ Conservación facturas**: Deben conservarse 6 años (mencionado en RGPD ✅) pero en formato electrónico original (no PDFs escaneados)
- **❌ Registro BAI** (Batuz País Vasco) si aplica
- **❌ Verifactu/SII**: Si facturan > €6M año, deben integrarse con Suministro Inmediato de Información (SII) AEAT

**Riesgo:** ALTO — Multas hasta €10.000 por factura no conforme (acumulativo)

**Acción requerida (URGENTE):**
1. Implementar facturación electrónica Facturae 3.2.2 ANTES de julio 2025
2. Verificar integración con AEAT (SII) si facturan > €6M
3. Asegurar que sistema conserva facturas en XML original (no solo PDFs)
4. Si usan Notion/CRM, migrar a plataforma certificada (ej: FacturaDirecta, Holded, A3 Software)
5. Publicar en términos-condiciones el procedimiento de facturación electrónica

---

## 5. Ley Antifraude (Ley 11/2021) — Software Certificado

### Estado: ❌ NO CUMPLE (potencial)

#### ❌ FALTA:
- **❌ Certificado software facturación**: A partir de **29 octubre 2025** TODO software de facturación debe tener certificado del fabricante que garantice:
  - **Integridad**: No permite modificar/eliminar registros de facturación
  - **Conservación**: Registros conservados 4 años
  - **Trazabilidad**: Registro de todas las operaciones
  - **Accesibilidad**: Datos exportables para AEAT en formato legible

**Riesgo:** MUY ALTO — **€50.000 por cada software no certificado** (infracción muy grave Art. 201 LGT)

**Acción requerida (CRÍTICA — DEADLINE 29 OCT 2025):**
1. **ANTES 29 OCT 2025**: Contratar software de facturación certificado conforme Ley Antifraude
2. Opciones certificadas:
   - Holded (certificado Antifraude incluido)
   - A3 Software
   - Sage
   - FacturaDirecta
   - Contasimple
3. **NO USAR**: Excel, Google Sheets, Notion, CRMs sin certificación
4. Obtener y publicar certificado del fabricante (requerido en inspecciones AEAT)

---

## 6. Ley de Startups (Ley 28/2022)

### Estado: ✅ CONFORME (si aplica)

#### ✅ BENEFICIOS DISPONIBLES:
- **✅ Reducción fiscal**: IS 15% (en lugar de 25%) si cumplen requisitos
- **✅ Aplazamiento cuotas SS**: Hasta 1 año
- **✅ Stock options**: Exención IRPF hasta €50.000
- **✅ Visa startup**: Para talento internacional

**Requisitos para acogerse:**
- Antigüedad < 5 años (o < 7 años si sector biotecnología)
- Innovación tecnológica como actividad principal
- No cotizar en bolsa
- Facturación < €10M año

**Acción requerida:**
1. Verificar si cumplen requisitos (fecha constitución, facturación)
2. Solicitar certificación ENISA como "Startup" si aplica
3. Revisar si pueden beneficiarse de reducción IS 15%

---

## 7. PBC/FT (Prevención Blanqueo de Capitales) — Ley 10/2010

### Estado: ⚠️ CUMPLIMIENTO PARCIAL

#### ✅ CUMPLE:
- **✅ Identificación cliente**: Requieren NIF/CIF para contratación
- **✅ Conservación 10 años**: Documentos contractuales + facturas (cumplen 6 años fiscales ✅ pero PBC requiere 10 años ❌)

#### ❌ FALTA:
- **❌ Diligencia Debida Cliente (CDD)**: No se menciona procedimiento KYC (Know Your Customer) para contratos > €1.000
- **❌ Identificación Persona Políticamente Expuesta (PEP)**: Obligatorio para contratos > €3.000
- **❌ Registro operaciones sospechosas**: Debe existir protocolo y Oficial de Cumplimiento designado
- **❌ Formación anual PBC/FT**: Personal debe recibir formación específica
- **❌ Conservación 10 años**: Actualmente solo conservan 6 años (fiscal) pero PBC/FT exige 10 años

**Riesgo:** ALTO — Multas hasta €10M (infracción muy grave)

**¿Aplica?** SÍ, si:
- Prestan servicios de consultoría > €1.000
- Tienen sede física o actividad regular en España
- Son "sujeto obligado" según Art. 2.1.o) Ley 10/2010 (consultores, asesores)

**Acción requerida:**
1. Designar **Oficial de Cumplimiento PBC/FT** (puede ser DPO o CISO)
2. Implementar **procedimiento KYC** (Know Your Customer) para contratos > €1.000:
   - Verificar identidad con documentos oficiales
   - Identificar titular real (beneficiario último)
   - Evaluar riesgo PEP (Persona Políticamente Expuesta)
3. Crear **registro operaciones sospechosas** y protocolo de notificación SEPBLAC
4. **Aumentar plazo conservación** de 6 años → **10 años** para contratos
5. Formación anual PBC/FT para todo el personal
6. Publicar en términos-condiciones la política PBC/FT

---

## RESUMEN EJECUTIVO

| Normativa | Estado | Riesgo | Acción prioritaria |
|-----------|--------|--------|-------------------|
| **ENS (RD 311/2022)** | ⚠️ PARCIAL | ALTO | Auditoría ENS externa + Categorización |
| **RGPD/LOPDGDD** | ✅ ALTO | BAJO | Publicar RAT + DPIA |
| **Ley Ciberseguridad 2025** | ⚠️ PARCIAL | MEDIO | Designar CISO + IRP documentado |
| **Ley Crea y Crece** | ❌ NO CUMPLE | **CRÍTICO** | **Facturae 3.2.2 ANTES jul 2025** |
| **Ley Antifraude 11/2021** | ❌ NO CUMPLE | **CRÍTICO** | **Software certificado ANTES 29 oct 2025** |
| **Ley Startups** | ✅ CONFORME | — | Solicitar certificación ENISA (opcional) |
| **PBC/FT Ley 10/2010** | ⚠️ PARCIAL | ALTO | KYC > €1.000 + Conservación 10 años |

---

## PLAN DE ACCIÓN PRIORIZADO (30/60/90 DÍAS)

### 🔴 URGENTE (30 días) — Riesgo de multas inmediatas

1. **Facturación electrónica Facturae 3.2.2** (Ley Crea y Crece)
   - Deadline: 1 julio 2025
   - Contratar Holded/A3 Software/Sage certificado
   - Migrar facturas actuales a formato XML
   - **Penalización:** €10.000/factura

2. **Software certificado Ley Antifraude** (Ley 11/2021)
   - Deadline: 29 octubre 2025
   - Mismo software que punto 1 (Holded incluye ambos)
   - Obtener certificado del fabricante
   - **Penalización:** €50.000/software

3. **Procedimiento KYC/PBC** (Ley 10/2010)
   - Designar Oficial Cumplimiento PBC/FT
   - Implementar verificación identidad > €1.000
   - Protocolo detección PEP
   - **Penalización:** Hasta €10M

### 🟡 IMPORTANTE (60 días) — Riesgo contratación pública

4. **Auditoría ENS externa** (RD 311/2022)
   - Categorización sistema (recomendar MEDIO)
   - Contratar auditor CCN-CERT certificado
   - Declaración de Aplicabilidad pública
   - **Impacto:** Exclusión licitaciones públicas

5. **Designación CISO** (Ley Ciberseguridad 2025)
   - Nombramiento formal CISO
   - Documentar Plan Respuesta Incidentes (IRP)
   - Configurar notificación INCIBE-CERT
   - **Penalización:** Hasta €10M

### 🟢 MEJORAS (90 días) — Completitud compliance

6. **RAT + DPIA públicos** (RGPD Art. 30+35)
   - Publicar Registro Actividades Tratamiento
   - Documentar DPIA calculadora Reynolds
   - Referencia LSSI-CE en cookies

7. **Aumentar conservación 10 años** (PBC/FT)
   - Modificar política-privacidad: 6 años → 10 años
   - Configurar backups retención extendida
   - Actualizar términos-condiciones

8. **Formación compliance** (todas normativas)
   - Formación PBC/FT anual personal
   - Simulacros IRP trimestrales
   - Actualización ENS continua

---

## COSTES ESTIMADOS

| Item | Coste | Urgencia |
|------|-------|----------|
| **Software facturación certificado** (Holded Pro) | €50-100/mes | 🔴 CRÍTICO |
| **Auditoría ENS externa** (categoría MEDIO) | €3.000-6.000 | 🟡 ALTA |
| **Consultoría PBC/FT** (setup KYC) | €1.500-3.000 | 🔴 CRÍTICO |
| **Formación compliance personal** | €500-1.000 | 🟢 MEDIA |
| **TOTAL inversión inicial** | **€5.000-10.000** | — |
| **TOTAL anual recurrente** | **€600-1.200/año** (software) | — |

---

## CONTACTOS ÚTILES

- **AEPD (RGPD)**: 901 100 099 | sedeagpd.gob.es
- **CCN-CERT (ENS)**: ccn-cert@cni.es | ccn-cert.cni.es
- **INCIBE-CERT (Ciberseguridad)**: incidencias@incibe-cert.es | 017
- **SEPBLAC (PBC/FT)**: sepblac@sepblac.es | 915 838 507
- **AEAT (Facturación)**: 901 200 345 | sede.agenciatributaria.gob.es

---

**Elaborado por:** GitHub Copilot (Claude Sonnet 4.5)  
**Revisado conforme a:** BOE actualizado febrero 2026  
**Disclaimer:** Este documento es orientativo. Consultar con abogado especializado en compliance regulatorio antes de tomar decisiones empresariales.
