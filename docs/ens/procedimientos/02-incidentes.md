# PROCEDIMIENTO 02: GESTIÓN DE INCIDENTES DE SEGURIDAD
**Código:** ENS-PROC-02 | **Versión:** 1.0 | **Fecha:** 11 feb 2026 | **Responsable:** CTO

## 1. CLASIFICACIÓN DE INCIDENTES

| Nivel | Impacto | Ejemplos | Tiempo respuesta | Notificación |
|-------|---------|----------|------------------|--------------|
| **P0 - CRÍTICO** | Data breach, sistema comprometido | Base de datos expuesta, ransomware, acceso no autorizado a producción | **1 hora** | CEO + DPO + CCN-CERT + AEPD (72h) |
| **P1 - ALTO** | Servicio degradado, vulnerabilidad crítica explotada | Defacement website, DDoS exitoso, phishing exitoso (credenciales robadas) | **4 horas** | CEO + CTO |
| **P2 - MEDIO** | Vulnerabilidad no explotada, tentativa de ataque | Dependabot critical alert, tentativa phishing bloqueada, error rate > 10% | **24 horas** | CTO |
| **P3 - BAJO** | Falso positivo, evento informativo | Scan de puertos, intento login fallido aislado | **72 horas** | CTO (log only) |

## 2. PROCESO DE RESPUESTA (6 FASES)

### FASE 1: DETECCIÓN (0-15 min)
**Fuentes:**
- Alertas Vercel (email, futuro: Slack)
- GitHub Dependabot
- Reporte usuario/cliente
- Monitorización logs
- CCN-CERT advisory

**CTO evalúa:**
- ¿Es un incidente real? (descartar falso positivo)
- Clasificación P0/P1/P2/P3
- ¿Afecta datos personales? (GDPR breach → notificar DPO inmediatamente)

### FASE 2: CONTENCIÓN (15 min - 2h)
**Objetivo:** Detener propagación, aislar sistema afectado.

**Acciones P0-P1:**
```bash
# Revocar acceso comprometido
vercel env rm RESEND_API_KEY --yes
gh api -X DELETE /orgs/cuentalowai-ops/members/USERNAME

# Bloquear IP atacante (Vercel Firewall)
# Vercel Dashboard → Firewall → Block IP

# Poner website en maintenance mode (si necesario)
# Crear pages/maintenance.tsx + deploy emergency
```

**Acciones P2-P3:**
- Parchear vulnerabilidad
- Rotar credenciales afectadas

### FASE 3: ERRADICACIÓN (2h - 24h)
**Objetivo:** Eliminar causa raíz.

| Tipo incidente | Acción erradicación |
|----------------|---------------------|
| **Phishing exitoso** | Rotar password + MFA reset + revisar logs últimos 7 días |
| **Vulnerabilidad npm** | `npm audit fix` + redeploy + verificar sin CVE |
| **DDoS** | Cloudflare rate limiting + IP blacklist |
| **Data breach** | Identificar vector ataque, parchear, verificar no hay backdoors |

### FASE 4: RECUPERACIÓN (Paralelo a Fase 3)
**Objetivo:** Restaurar servicio normal.

```bash
# Restore base de datos desde backup (si corrupta)
vercel postgres restore --backup-id=BACKUP_ID

# Redeploy desde GitHub (si código comprometido)
git revert COMMIT_SHA
vercel --prod

# Verificar funcionalidad (smoke tests)
curl -I https://defcon23.eu/privacidad
# Expect: 200 OK
```

**RTO:** < 4 horas (Recovery Time Objective)

### FASE 5: POST-MORTEM (24h - 7 días después)
**Reunión post-incidente:**
- Participantes: CEO, CTO, DPO (si GDPR)
- Duración: 60 min
- Documentar en `incident_log`:
  - Timeline completo (detección → resolución)
  - Causa raíz (root cause analysis)
  - Datos afectados (ej. 150 emails expuestos 2h)
  - Lecciones aprendidas
  - Acciones correctivas (ej. implementar rate limiting)

**Template post-mortem:** `docs/ens/templates/post-mortem.md`

### FASE 6: NOTIFICACIONES

#### **GDPR Data Breach (AEPD)**
**Si aplica Art. 33:** Datos personales comprometidos + riesgo para derechos usuarios.

**Plazo:** 72 horas desde detección.

**Proceso:**
1. DPO completa **Formulario Notificación AEPD:**
   - https://www.aepd.es/es/documento/formulario-notificacion-quiebra-seguridad.pdf
2. Enviar vía Sede Electrónica AEPD
3. Si riesgo ALTO para usuarios → Notificar directamente (email) Art. 34

**Template email usuarios:**
```
Asunto: [URGENTE] Incidente de seguridad - Acción requerida

Estimado/a [NOMBRE],

El [FECHA] detectamos un incidente de seguridad que ha afectado a [DESCRIPCIÓN DATOS: tu email].

DATOS AFECTADOS:
- Email: [ejemplo@empresa.com]
- [Otros datos]

ACCIÓN REALIZADA:
- Contención del incidente en [X horas]
- Notificación a AEPD (72h)
- [Medidas correctivas]

ACCIÓN RECOMENDADA PARA TI:
- Cambiar contraseñas si usas la misma en otros servicios
- Activar MFA en cuentas críticas
- Vigilar emails phishing (no usar datos de este incidente como pretexto)

CONTACTO:
dpo@defcon23.eu | +34 XXX XXX XXX

Sentimos las molestias.
Equipo dEfCØN23
```

#### **CCN-CERT (Centro Criptológico Nacional)**
**Si aplica:** Incidente grave que afecte a infraestructura crítica o servicios públicos.

**Email:** incidencias@ccn-cert.cni.es  
**Teléfono:** +34 91 586 8200  
**Formulario:** https://www.ccn-cert.cni.es/gestion-de-incidentes/sistema-de-alerta-temprana-sat/formulario-sat.html

## 3. REGISTRO DE INCIDENTES

**Tabla `incident_log`** (crear Semana 3):
```sql
CREATE TABLE incident_log (
  id SERIAL PRIMARY KEY,
  incident_date TIMESTAMP NOT NULL,
  severity VARCHAR(2) CHECK (severity IN ('P0', 'P1', 'P2', 'P3')),
  type VARCHAR(50), -- phishing, ddos, data_breach, vulnerability, unauthorized_access
  description TEXT,
  affected_assets TEXT[], -- ['database', 'vercel_account', 'github']
  detection_source VARCHAR(100), -- vercel_alert, dependabot, user_report
  detected_by VARCHAR(100),
  
  containment_actions TEXT,
  containment_time TIMESTAMP,
  
  eradication_actions TEXT,
  root_cause TEXT,
  
  recovery_time TIMESTAMP,
  rto_met BOOLEAN, -- RTO < 4h?
  
  gdpr_breach BOOLEAN DEFAULT FALSE,
  aepd_notified BOOLEAN DEFAULT FALSE,
  aepd_notification_date TIMESTAMP,
  
  ccn_cert_notified BOOLEAN DEFAULT FALSE,
  
  lessons_learned TEXT,
  corrective_actions TEXT,
  
  responsible VARCHAR(100), -- CTO
  resolved_date TIMESTAMP,
  status VARCHAR(20) DEFAULT 'OPEN' -- OPEN, INVESTIGATING, RESOLVED, CLOSED
);
```

## 4. CONTACTOS DE EMERGENCIA

| Entidad | Contacto | Cuándo contactar |
|---------|----------|------------------|
| **CCN-CERT** | incidencias@ccn-cert.cni.es<br>+34 91 586 8200 | P0-P1 que afecte infraestructura crítica |
| **AEPD** | https://www.aepd.es/sede-electronica<br>+34 901 100 099 | Data breach GDPR (72h) |
| **Vercel Support** | support@vercel.com<br>Dashboard → Help | P0-P1 infraestructura Vercel |
| **GitHub Support** | https://support.github.com<br>Priority support (Enterprise) | Compromiso repositorio |

## 5. KPIs INCIDENTES

| Métrica | Target | Frecuencia medición |
|---------|--------|---------------------|
| **MTTD** (Mean Time to Detect) | < 24h | Mensual |
| **MTTR** (Mean Time to Respond) | < 72h | Mensual |
| **% RTO cumplido** | > 95% | Por incidente |
| **Incidentes P0-P1** | 0/año | Anual |
| **Falsos positivos** | < 20% | Trimestral |

---

**ESTADO:** ✅ APROBADO | **PRÓXIMA REVISIÓN:** Febrero 2027
