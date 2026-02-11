# PROCEDIMIENTO 08: GESTIÓN DE TERCEROS (PROVEEDORES)
**Código:** ENS-PROC-08 | **Versión:** 1.0 | **Responsable:** CEO + CTO

## PROVEEDORES CRÍTICOS

| Proveedor | Servicio | Datos tratados | ISO 27001 | DPA | SLA |
|-----------|----------|----------------|-----------|-----|-----|
| **Vercel** | Hosting + DB | Todos los datos | ✅ Sí | ✅ Firmado | 99.99% |
| **Resend** | Email transaccional | Emails leads | ✅ Sí | ✅ Firmado | 99.9% |
| **Cal.com** | Booking system | Nombre, email, teléfono | ⚠️ Verificar | ❌ Pendiente | 99.9% |
| **Notion** | CRM (futuro) | Datos comerciales | ✅ Sí | ❌ Pendiente | 99.9% |

## EVALUACIÓN NUEVOS PROVEEDORES

### Security Assessment Checklist
Antes de contratar nuevo proveedor cloud:

- [ ] **ISO 27001 certificado?** (verificar en website + pedir certificado)
- [ ] **GDPR-compliant?** (UE o EU-US Data Privacy Framework)
- [ ] **DPA disponible?** (Data Processing Agreement Art. 28 GDPR)
- [ ] **Ubicación datos:** UE preferible, US aceptable con DPF
- [ ] **SLA uptime:** ≥ 99.9%
- [ ] **Incident response plan:** Documentado, contacto 24/7
- [ ] **Data breach notification:** < 72h (GDPR compliance)
- [ ] **Backup policy:** Frecuencia, retención
- [ ] **Penetration testing:** ¿Realizan pentesting anual?
- [ ] **SOC 2 Type II report:** Disponible (bajo NDA)
- [ ] **References:** Clientes similares, reviews G2/Capterra

### Aprobación
| Coste anual | Aprobador |
|-------------|-----------|
| < €1,000 | CTO |
| €1,000 - €5,000 | CEO |
| > €5,000 | CEO + Board (futuro) |

## DPA PROCUREMENT

### Proveedores pendientes (Semana 2)
**Email template:**
```
Subject: Data Processing Agreement (DPA) Request - defcon23.eu

Dear [Provider] Privacy Team,

We are dEfCØN23 (defcon23.eu), a cybersecurity compliance consultancy based in Spain.

We require a Data Processing Agreement (DPA) compliant with GDPR Article 28 to formalize our engagement.

Please provide:
1. Standard DPA template
2. List of sub-processors
3. EU data residency confirmation
4. Incident notification procedures (<72h)

Contact: dpo@defcon23.eu

Best regards,
dEfCØN23 Team
```

**Enviar a:**
- privacy@cal.com
- privacy@makenotion.com

## MONITORIZACIÓN PROVEEDORES

### Status Pages (revisar semanalmente)
- Vercel: https://www.vercel-status.com/
- Resend: https://status.resend.com/
- Cal.com: https://status.cal.com/

### Incidentes Proveedor
Si proveedor sufre outage:
1. Verificar impact en defcon23.eu
2. Comunicar a CEO si > 1h downtime
3. Documentar en `provider_incidents_log`
4. Evaluar si SLA cumplido (reclamar crédito si no)

---

**ESTADO:** ✅ APROBADO
