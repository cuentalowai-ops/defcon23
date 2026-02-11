# PROCEDIMIENTO 12: MONITORIZACIÓN Y LOGGING
**Código:** ENS-PROC-12 | **Versión:** 1.0 | **Responsable:** CTO

## ARQUITECTURA LOGGING

### Logs Actuales
| Fuente | Retención | Ubicación | Acceso |
|--------|-----------|-----------|--------|
| **Vercel Access Logs** | 30 días | Vercel Dashboard | CTO, CEO |
| **Vercel Function Logs** | 30 días | Vercel Dashboard | CTO |
| **GitHub Audit Log** | 90 días | GitHub Org Settings | CTO |
| **Vercel Postgres Query Logs** | 7 días | Postgres logs | CTO |

### Logs Futuros (Semana 5)
| Fuente | Retención | Ubicación | Acceso |
|--------|-----------|-----------|--------|
| **Application Audit Log** | 2 años | Tabla `audit_log` (Postgres) | CTO, DPO |
| **ARCO Requests** | 3 años | Tabla `arco_requests` | DPO |
| **Incident Log** | Indefinido | Tabla `incident_log` | CTO |

## EVENTOS A AUDITAR

### Nivel Aplicación (tabla audit_log)
```sql
CREATE TABLE audit_log (
  id SERIAL PRIMARY KEY,
  timestamp TIMESTAMP DEFAULT NOW(),
  user_id VARCHAR(100), -- email usuario o 'anonymous' si público
  ip_address INET,
  user_agent TEXT,
  action VARCHAR(50), -- SELECT, INSERT, UPDATE, DELETE, LOGIN, LOGOUT
  resource VARCHAR(100), -- 'leads', 'consents', 'env_vars'
  resource_id VARCHAR(100), -- ID específico del recurso afectado
  old_value JSONB, -- Valor antes del cambio (UPDATE/DELETE)
  new_value JSONB, -- Valor después del cambio (INSERT/UPDATE)
  success BOOLEAN DEFAULT TRUE,
  error_message TEXT
);
```

**Eventos críticos:**
- Acceso tabla `leads` (SELECT)
- Modificación datos personales (UPDATE/DELETE en `leads`, `consents`)
- Login fallido (>5 intentos = alerta phishing)
- Cambio environment variables (Vercel API)
- Cambio permisos GitHub (add/remove member)

### Nivel Infraestructura (Vercel)
- HTTP requests (IP, user-agent, URL, status code, latency)
- Errors 5xx (alert si rate > 1%)
- Deploy events (who, when, commit SHA)
- Environment variable changes

## ALERTAS EN TIEMPO REAL

### Configuración Actual
**Vercel → Integrations → Notifications:**
- Email si error rate > 5% (últimos 10 min)
- Email si deploy failed

### Configuración Futura (Semana 4)
**Slack Integration:**
- Canal #security-alerts
- Alertas:
  - Data breach detectado (audit_log: acceso no autorizado)
  - Dependabot CRITICAL alert
  - Error rate > 10% (15 min)
  - Deploy to production (info)
  - Login fallido > 5 intentos (1h)

## DASHBOARD MONITORIZACIÓN

### Vercel Analytics (actual)
- **Real-time:** Requests/s, error rate, latency P50/P95/P99
- **Historical:** 30 días (Plan Pro)

### Plausible Analytics (actual)
- **Web analytics:** Visitors, pageviews, bounce rate
- **GDPR-compliant:** No cookies, no PII
- **Public dashboard:** https://plausible.io/defcon23.eu

### Future: Grafana + Prometheus (opcional, Q3 2026)
- Métricas custom (ej. leads generados/día)
- Alertas avanzadas (anomaly detection)

## REVISIÓN LOGS

### Frecuencia
| Logs | Frecuencia | Responsable |
|------|------------|-------------|
| **Vercel access logs** | Diaria (5 min revisión) | CTO |
| **Application audit log** | Semanal (30 min revisión) | CTO |
| **GitHub audit log** | Mensual (15 min revisión) | CTO |
| **Incident log** | Continua (tras cada incidente) | CTO |

### Qué buscar
- **IPs anómalas:** Accesos desde países inusuales (ej. Rusia, China si no hay clientes ahí)
- **User-agents sospechosos:** Bots, scanners (curl, nmap, sqlmap)
- **Patrones ataque:** SQL injection attempts (`' OR 1=1`), XSS (`<script>`)
- **Brute force:** Login fallido > 10 intentos desde misma IP
- **Data exfiltration:** SELECT masivo de tabla leads (ej. 1000 rows en 1 query)

### Herramientas
```bash
# Vercel CLI: Tail logs en tiempo real
vercel logs defcon23.vercel.app --follow

# Postgres: Query audit_log
psql -h [HOST] -U [USER] -c "
  SELECT timestamp, user_id, action, resource 
  FROM audit_log 
  WHERE timestamp > NOW() - INTERVAL '24 hours'
  ORDER BY timestamp DESC;
"

# GitHub CLI: Audit log
gh api /orgs/cuentalowai-ops/audit-log --paginate
```

## PROTECCIÓN LOGS (op.exp.10)

### Requisitos ENS Nivel MEDIO
- **Append-only:** Logs no modificables (sin UPDATE/DELETE)
- **Integridad:** Hash SHA-256 para detectar manipulación
- **Backup offsite:** Export diario a storage inmutable

### Implementación (Semana 6)
```sql
-- Tabla audit_log: Deshabilitar UPDATE/DELETE
REVOKE UPDATE, DELETE ON audit_log FROM all_users;

-- Hash para integridad (trigger)
CREATE OR REPLACE FUNCTION audit_log_hash()
RETURNS TRIGGER AS $$
BEGIN
  NEW.hash := encode(
    digest(
      NEW.timestamp || NEW.user_id || NEW.action || NEW.resource,
      'sha256'
    ),
    'hex'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER audit_log_hash_trigger
BEFORE INSERT ON audit_log
FOR EACH ROW EXECUTE FUNCTION audit_log_hash();
```

### Export Diario
```bash
# Cron job (Vercel Cron o GitHub Actions)
# Cada día 2 AM UTC
psql -h [HOST] -U [USER] -c "COPY audit_log TO STDOUT WITH CSV HEADER" > audit_log_$(date +%Y%m%d).csv
# Upload a AWS S3 Glacier (inmutable)
aws s3 cp audit_log_$(date +%Y%m%d).csv s3://defcon23-audit-logs/ --storage-class GLACIER
```

## KPIs MONITORIZACIÓN

| Métrica | Target | Frecuencia |
|---------|--------|------------|
| **Uptime** | > 99.9% | Mensual |
| **Error rate** | < 0.1% | Diaria |
| **Latency P95** | < 500ms | Diaria |
| **Failed logins** | < 10/día | Diaria |
| **Security incidents** | 0/mes | Mensual |

---

**ESTADO:** ✅ APROBADO | **PRÓXIMA REVISIÓN:** Febrero 2027
